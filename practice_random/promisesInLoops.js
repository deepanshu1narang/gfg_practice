const items = [1, 2, 3, 4, 5];

function processItem(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processing item ${item}`);
            resolve(item);
        }, Math.random() * 1000);
    });
}

// sequentially
async function processItems() {
    let result = 0
    for (const item of items) {
        result = await processItem(result + item);
    }
    console.log('All items processed');
}

// processItems();

// first resolve first execute
function processItems2() {
    for (const item of items) {
        processItem(item);
    }
    console.log('All items processed');
}

// processItems2();

// function recursiveSetTimeout() {
//     console.log("Hello");
//     setTimeout(recursiveSetTimeout, 0);
// }

// recursiveSetTimeout();

async function processItems3() {
    const promiseArray = []
    for (const item of items) {
        promiseArray.push(processItem(item));
    }
    const result = await Promise.all(promiseArray);
    console.log(result);
}

// processItems3();

async function processItems4() {
    items.forEach((item) => {
        processItem(item);
    })
}

// processItems4();

function processItems5() {
    let chainedPromise = Promise.resolve();
    items.forEach((item) => {
        chainedPromise = chainedPromise.then(() => {
            return processItem(item);
        })
    });
}

processItems5();
