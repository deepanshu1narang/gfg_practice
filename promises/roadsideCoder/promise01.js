console.log("start");

function lottery(n) {
    n = n % 10;
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.ceil(Math.random() * 10);
            if (result > n) {
                resolve(`you won the lottery ${result}`);
            }
            else {
                reject(`better luck next time ${result}`);
            }
        }, 2000);
    });
    return promise1;
}

const sub = Promise.resolve("complete whole video of Promises by roadside coder today");
const sub2 = Promise.reject("no game for today");
console.log(sub);
sub.then(data => console.log(data));
console.log(sub2);
sub2.then(data => console.log(data)).catch(err => console.log(err));

lottery(4).then(data => console.log(data)).catch(err => console.log(err));
console.log("stop");