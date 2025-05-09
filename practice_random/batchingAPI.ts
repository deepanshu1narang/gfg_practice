console.log("Sequential Batching");
function handleClose() {}

async function fetchInBatches_Sequential(ids: string[]): Promise<void> {
  // creating some urls
  const urls = ids.map((id) => "/WorkRulesServices" + id);
  const batchSize = 7;
  const batchedRequests: string[][] = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    batchedRequests.push(urls.slice(i, i + batchSize));
  }

  try {
    for (const batch of batchedRequests) {
      const promises = batch.map((url) => fetch(url, {}).then((res) => res.json()));

      const results = await Promise.all(promises); // ✅ Await batches sequentially
      console.log(results);
    }
  } catch (err) {
    console.error(err);
  } finally {
    handleClose(); // ✅ Ensures handleClose() is called only once
  }
}

const fnAddSelectedEntities = (ids: string[]): Promise<void> => {
  return fetchInBatches_Sequential(ids);
};

console.log("Parallel Batching");

async function fetchInBatches_Parallel(ids: string[]): Promise<void> {
  const urls = ids.map((id) => "/WorkRulesServices" + id);
  const batchSize = 7;
  const batchedRequests: string[][] = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    batchedRequests.push(urls.slice(i, i + batchSize));
  }

  try {
    await Promise.all(batchedRequests.map((batch) => Promise.all(batch.map((url) => fetch(url, {}).then((res) => res.json())))));
  } catch (err) {
    console.error(err);
  } finally {
    handleClose();
  }
}
