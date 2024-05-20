// worse than naive
function hcf(a, b) {
    const smallerNum = Math.min(a, b);
    const largerNum = Math.max(a, b);
    let hcf = 1;
    if (largerNum % smallerNum === 0)
        return smallerNum;
    else {
        let start = 2;
        let increasement = 1;
        if (a % 2 !== 0 || b % 2 !== 0) {
            start = 3;
            increasement = 2;
        }
        for (let i = start; i < smallerNum; i = i + increasement) {
            if (a % i === 0 && b % i === 0)
                hcf = i;
        }
        return hcf;
    }
}

// console.log(hcf(42, 28));
// console.log(hcf(42, 48));
// console.log(hcf(42, 56));
// console.log(hcf(56, 48));

// naive
function hcf2(a, b) {
    const smallerNum = Math.min(a, b);
    const largerNum = Math.max(a, b);
    let hcf = 1;
    if (largerNum % smallerNum === 0)
        return smallerNum;
    else {
        for (let i = smallerNum - 1; i > 1; i--) {
            if (a % i === 0 && b % i === 0) {
                hcf = i;
                return hcf;
                // break;
            }
        }
        return hcf;
    }
}

// naive - 2
const hcf3 = (a, b) => {
    let hcf = Math.min(a, b);
    while (hcf > 0) {
        if (a % hcf === 0 && b % hcf === 0)
            return hcf;
        hcf--;
    }
}

console.log(hcf2(42, 28));
console.log(hcf2(42, 48));
console.log(hcf2(42, 56));
console.log(hcf2(56, 48));
console.log("euclid");


function euclidHCF(a, b) {
    let hcf = 1;
    const n1 = Math.max(a, b);
    const n2 = Math.min(a, b);
    if (n1 % n2 === 0)
        hcf = n2;
    else {
        const rem = n1 % n2;
        hcf = euclidHCF(n2, rem);
    }
    return hcf;
}

// better one
function euclidHCF2(a, b) {
    if (b === 0)
        return a;
    return euclidHCF(b, a % b);
}


console.log(euclidHCF(42, 27));
console.log(euclidHCF(42, 28));
console.log(euclidHCF(42, 48));
console.log(euclidHCF(42, 56));
console.log(euclidHCF(56, 48));
console.log("euclidHCF2 - much better")
console.log(euclidHCF2(42, 27));
console.log(euclidHCF2(42, 28));
console.log(euclidHCF2(42, 48));
console.log(euclidHCF2(42, 56));
console.log(euclidHCF2(56, 48));

function hcfIterative(a, b) {
    while (true) {
        let rem = a % b;
        if (rem === 0) {
            return b;
        }
        else {
            a = b;
            b = rem;
        }
    }
}

console.log("iterative apporoach for hcf")
console.log(hcfIterative(42, 27));
console.log(hcfIterative(42, 28));
console.log(hcfIterative(42, 48));
console.log(hcfIterative(42, 56));
console.log(hcfIterative(56, 48));

function hcfIterative2(a, b) {
    while (b !== 0) {
        a = a % b;
        [a, b] = [b, a];
    }
    return a;
}

console.log("another iterative apporoach for hcf")
console.log(hcfIterative2(42, 27));
console.log(hcfIterative2(42, 28));
console.log(hcfIterative2(42, 48));
console.log(hcfIterative2(42, 56));
console.log(hcfIterative2(56, 48));

export { hcfIterative2 };