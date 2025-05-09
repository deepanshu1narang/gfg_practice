console.log("start");

function importantAction(username) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000);
    });
}

function likeThisVideo(video) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Like this ${video} video`);
        }, 2000);
    });
}

function shareThisVideo(video) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Share this ${video} video`);
        }, 3000);
    });
}

const p4 = new Promise((_resolve, reject) => setTimeout(() => reject("rejected - aka failed promise"), 500));
const p5 = new Promise((_resolve, reject) => setTimeout(() => reject("promise rejected"), 1400));

// if any one of the promises fails all fail
const promiseAll = Promise.all([importantAction("Roadside coder"), likeThisVideo("Pomises"), shareThisVideo("Promises")]);

promiseAll.then(data => {
    console.log(data);
});

const promiseAllWithArejected = Promise.all([importantAction("Roadside coder"), likeThisVideo("Pomises"), shareThisVideo("Promises"), p4]).catch(err => console.log(err));

promiseAllWithArejected
    .then(data => console.log(data))
    .catch(err => console.log(err));

// returns the promise which settles 1st (either resolved or rejected)
const promiseRace = Promise.race([importantAction("Roadside coder"), shareThisVideo("Pomises"), p5]);
promiseRace.then(data => console.log(data));

// returns the promise which is resolved 1st (oonly resolved.. fails only if all promises fail)
const promiseAny = Promise.any([importantAction("Roadside coder"), likeThisVideo("Pomises")]);
promiseAny.then(data => console.log(data));

const promiseAnyWithFailedPromise = Promise.any([importantAction("Roadside coder"), likeThisVideo("Pomises"), p4]);
promiseAnyWithFailedPromise.then(data => console.log(data));


const promiseAnyWithFailedPromise2 = Promise.any([p5, p4]);
promiseAnyWithFailedPromise2.then(data => console.log(data));

// returns allSettled promises result... fails only if all fail
const promiseAllSettled = Promise.all([importantAction("Roadside coder"), likeThisVideo("Pomises"), shareThisVideo("Promises")]);

promiseAll.then(data => {
    console.log(data);
});

const promiseAllSettledWithArejected = Promise.all([importantAction("Roadside coder"), likeThisVideo("Pomises"), shareThisVideo("Promises"), p4]).catch(err => console.log(err));

promiseAllWithArejected
    .then(data => console.log(data))
    .catch(err => console.log(err));

const promiseAllSettledWithArejected2 = Promise.all([p5, p4]).catch(err => console.log(err));

promiseAllWithArejected
    .then(data => console.log(data))
    .catch(err => console.log(err));

console.log("end");