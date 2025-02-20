console.log(`1️⃣ Sequential Batching (One Batch at a Time)
Requests are executed batch by batch, waiting for one batch to finish before starting the next.
Useful when API rate limits exist, or the requests must be processed in order.
Slower but safer for APIs with limitations.

Example Code for Sequential Batching`);

async function fetchInBatchesSequential(ids: string[], batchSize: number) {
  const urls = ids.map((id) => `/api/data/${id}`);
  const batchedRequests: string[][] = [];

  // Create batches
  for (let i = 0; i < urls.length; i += batchSize) {
    batchedRequests.push(urls.slice(i, i + batchSize));
  }

  // Process batches one at a time
  for (const batch of batchedRequests) {
    const promises = batch.map((url) => fetch(url).then((res) => res.json()));
    const results = await Promise.all(promises);
    console.log("Batch completed:", results);
  }

  console.log("All batches completed.");
}

console.log(`How it Works:
URLs are grouped into batches of batchSize.
The function waits (await) for one batch to finish before moving to the next.
Runs sequentially to avoid hitting API rate limits.
Pros ✅
✔ Prevents overloading the server
✔ Ensures the order of execution
✔ Works well with APIs that have rate limits

Cons ❌
⏳ Slower than parallel processing
📉 Increased total execution time

`);

console.log(`2️⃣ Parallel Batching (All Batches at Once)
All batches run at the same time instead of waiting for one to finish before starting the next.
Useful when speed is a priority and the API can handle many requests simultaneously.
Example Code for Parallel Batching`);

async function fetchInBatchesParallel(ids: string[], batchSize: number) {
  const urls = ids.map((id) => `/api/data/${id}`);
  const batchedRequests: string[][] = [];

  // Create batches
  for (let i = 0; i < urls.length; i += batchSize) {
    batchedRequests.push(urls.slice(i, i + batchSize));
  }

  // Process all batches in parallel
  await Promise.all(batchedRequests.map((batch) => Promise.all(batch.map((url) => fetch(url).then((res) => res.json())))));

  console.log("All batches completed.");
}

console.log(`How it Works:
URLs are divided into batches.
Each batch runs in parallel using Promise.all(), meaning multiple batches are processed at once.
The function waits for all batches to finish before proceeding.
Pros ✅
🚀 Much faster than sequential processing
📈 Reduces overall execution time

Cons ❌
🔴 If too many requests are made at once, it may exceed API limits
⚠️ No guarantee of order in the response

`);
