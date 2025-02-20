async function fetchWithBatching(urls: string[], batchSize: number, delayMs: number) {
  const batchedRequests: string[][] = [];
  const results: unknown[] = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    batchedRequests.push(urls.slice(i, i + batchSize));
  }

  for (const batch of batchedRequests) {
    const batchResults = await Promise.all(batch.map((url) => fetch(url).then((res) => res.json())));

    results.push(...batchResults);

    console.log(`Batch completed. Waiting ${delayMs}ms before next batch...`);
    await new Promise((resolve) => setTimeout(resolve, delayMs)); // Dynamic delay
  }

  return results;
}

// Usage
let urls = [];
const finalResults = fetchWithBatching(urls, 10, 1000); // 10 requests per batch, 1s delay
console.log("Final results:", finalResults);
