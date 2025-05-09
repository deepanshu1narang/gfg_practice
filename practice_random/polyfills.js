console.log("map");

// ar2 = ar.map((e, i, arr) => )

Array.prototype.myMap = function myMap(cb) {
    let ret = [];
    for (let i = 0; i < this.length; i++) {
        let ele = this[i];
        let idx = i;
        let arr = this;
        let elem = cb(ele, idx, arr);
        ret.push(elem)
    }
    return ret;
}

let x2 = [1, 2, 3, 4, 5].myMap(e => e * 2);
console.log(x2);

console.log("forEach");

// arr.forEach((e, i) => snvjwvj);

Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        const ele = this[i];
        const idx = i;
        const arr = this;
        cb(ele, idx, arr);
    }
}

x2.myForEach((e, i) => {
    console.log(e - i, e, i, e + i);
});

console.log("filter");

Array.prototype.myFilter = function (cb) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        const bol = cb(this[i], i, this);
        if (bol)
            res.push(this[i]);
    }
    return res;
}

const x3 = x2.myFilter(x => x > 5);
console.log(x3);

console.log("redce");

// a2 = a.reduce((a, c) => ...., i)

Array.prototype.myReduce = function (callBack, initialVal) {
    let acc = initialVal;

    for (let i = 0; i < this.length; i++) {
        acc = acc ? callBack(acc, this[i]) : this[i];
    }
    return acc;
}

console.log([1, 2, 3, 4, 5, 4, 3, 2, 1].reduce((a, c) => a + c, 0));

console.log("flat");


Array.prototype.myFlat = function (depth) {
    let res = [];

    if (!Array.isArray(this))
        throw new Error("only for arrays");
    else {
        this.forEach(el => {
            if (Array.isArray(el) && depth > 0) {
                let flattedArray = el.myFlat(depth - 1);
                res.push(...flattedArray);
            }
            else {
                res.push(el);
            }
        });
    }
    return res;
}
let flat1arr = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11, 12, [13, [14, [[15], [[[16]]]]]]]], 98, 97, [96, 95, [43]]];
console.log(flat1arr);
console.log(flat1arr.myFlat(1));
console.log(flat1arr.myFlat(2));
console.log(flat1arr.myFlat(3));
console.log(flat1arr.myFlat(Infinity));

console.log("call");

Function.prototype.myCall = function (reference = {}, ...args) {
    if (typeof this !== 'function')
        throw new Error("only for functions");
    reference.fn = this;
    reference.fn(...args);
}

function printAge(age = 24) {
    console.log(`${this.name} is ${age} years old`);
}

let name = "asdf";
const ob1 = { name: "poi" };

// printAge.call(ob1, 19);
printAge.myCall(ob1, 19);

Function.prototype.myApply = function (reference = {}, ...args) {
    if (typeof this !== 'function')
        throw new Error("only for functions");

    if (!Array.isArray(...args))
        throw new Error("only array");

    reference.fn = this;
    reference.fn(...args);
}


Function.prototype.myBind = function (reference = {}, ...args) {
    if (typeof this !== 'function')
        throw new Error("only for functions");

    reference.fn = this;
    return function (...args2) {
        reference.fn(...args, ...args2);
    }
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 Success');
    }, 2001);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('P2 Fail');
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P3 Success');
    }, 4000);
});

Promise.race([p1, p2, p3])
    .then(results => console.log(results))
    .catch(err => console.error(err));