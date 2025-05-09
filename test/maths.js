// maths by anuj bhaiya ----> part 1
console.log("https://www.youtube.com/watch?v=69jsFIMINpI");

const app = document.getElementById('app');
const maths1 = document.createElement("div");
const maths2 = document.createElement("div");
maths1.style.border = "1px solid blue";
maths1.style.backgroundColor = "cyan";
maths1.style.color = "red";
let basicMathsTopics = ["factorial", "number of trailing zeroes in the factorial of a number", "Palindrome(number and string)"];
const mathsTopicsList2 = ["Prime Numbers", "Sieve if Eratosthenes", "Euclid GCD", "Modulo Arithmetics", "Fast Power", "Compute a^b modulo 10^9 + 7"];
// maths1.innerHTML = "hello world";
maths1.innerHTML = `<ol>${basicMathsTopics.map(e => (
    `<li>${e}</li>`
))?.join("")}</ol>`;
maths2.innerHTML = `<ol>${mathsTopicsList2.map(e => (
    `<li>${e}</li>`
))?.join("")}</ol>`;
app.appendChild(maths1);
app.appendChild(maths2);
// maths2 by anuj bhaiya ----> part 2

const videoLinkSpan = document.createElement("span");

let vLink = document.createElement("a");
vLink.href = "https://www.youtube.com/watch?v=69jsFIMINpI";
videoLinkSpan.appendChild(vLink);
app.appendChild(videoLinkSpan);

// const maths2 = 

// Q1: factorial of a number
function factorial(num) {
    if (num < 0 || parseInt(num) !== num) {
        throw new Error("only whole numbers");
    }
    else if (num === 0) {
        return 1;
    }
    else if (num <= 2) {
        return num;
    }
    else {
        return num * factorial(num - 1);
    }
}

function factorial2 (num) {
    let fact = 1;
    if (num < 0 || parseInt(num) !== num) {
        throw new Error("only whole numbers");
    }
    else if (num === 0) {
        return 1;
    }
    else if (num <= 2) {
        return num;
    }
    else{
        for (let i = 1; i <= num; i++){
            fact = fact*i;
        }
    }
    return fact;
}

// Q2: trailing zeroes
function getTrailingZeroesInFactorialOf(num) {
    let zeroes = 0;
    for (let i = 5; i <= num; i*=5) {
        zeroes += Math.floor(num / i);
    }
    return zeroes;
}


console.log(getTrailingZeroesInFactorialOf(340));

// Q3: Palindrome

function fnReverseTheNumber (num) {
    let reversedNum = 0;
    let i = 1;
    while (num !== 0) {
        reversedNum = reversedNum*10 + parseInt(num%10);
        num = parseInt(num/10);
    }
    return reversedNum;
}

console.log(fnReverseTheNumber(2134));


function fnReverseString(str){
    return str.split("").reverse().join("");
}

console.log(fnReverseString("keyboard"));

function isPalindrome (x){
    if(typeof x === "number"){
        return x === fnReverseTheNumber(x);
    }
    else if(typeof x === "string"){
        return x === fnReverseString(x);
    }
}

console.log(isPalindrome("deepanshu"));
console.log(isPalindrome(1234567654321));



///////////////////////////////////// MORE MATHS /////////////////////////////////////////////

// 1. Prime Number
// a) Find if a given number is prime or not
function isPrime(n){
    if (n < 2 || parseInt(n) !== n) {
        throw new Error("The number must be whole number and greater than or equal to 2");
    }
    else if(n === 2){
        return true;
    }
    else if(n > 2 && n%2 !== 0){
        let isPrimeNum = true;
        for(let i = 3; Math.pow(i, 2) < n; i += 1){
            if(n%i === 0){
                isPrimeNum = false;
                break;
            }
        }
        return isPrimeNum;
    }
    else {
        return false;
    }
}

console.log(isPrime(695719));

// 2. Sieve of EratoSthenes
// a) Write the code that will generate all primes less than N using sieve of eratosthenes algorithm
// simple method without sieve of eratosthenes
function allPrimesUptoN(num){
    num = parseInt(num);
    let primesList = [];
    for(let i = 2; i < num; i++){
        if(isPrime(i)){
            primesList.push(i);
        }
    }
    return primesList;
}

// console.log(allPrimesUptoN(695719));
// console.log(allPrimesUptoN(6959));

// using sieve of eratosthenes
function findAllPrimes(num){
    //////// step 1 ////////////// making a boolean array: the index of number will denote that number
    let primesArray = new Array(num + 1); // n+1 so that we don't leave the case when n is also prime
    // targetArray.fill(ele, initialPosition, FinalPosition);
    // if initialPosition and finalPosition are not written then from 0th to last
    ////////////////// step 2: making all as true
    primesArray = primesArray.fill(true);
    ///////////////// step 3: the no. 0 and 1 are obvi to be excluded
    primesArray[0] = false;
    primesArray[1] = false;

    //////////////// step 4 ////// loop from 2 to Math.sqrt(num) only
    for(let i = 2; i*i <= num; i++){
        for(let j = i*2; j <= num; j = j + i){
            primesArray[j] = false;
        }
    }
    /////////// step 5: now iterate over the list and print all the numbers which are still marked as true
    let primesList = [];
    primesArray.map((e, index) => {
        if(e){
            primesList.push(index);
        }
    });
    return primesList;
}

console.log(findAllPrimes(6957));

// 3. HCF & LCM & prime-factorization
// lcm ---- O(n1*n2)
function findLCM(n1, n2){
    const num1 = Math.max(n1, n2);
    const num2 = Math.min(n1, n2);

    let lcm = num1*num2;
    if(num1 % num2 === 0){
        lcm = num1;
    }
    else{
        let flag = true;
        for(let i = 1;i <= num2; i++){
            if(flag){
                for(let j = 1;j <= num1; j++){
                    if(num1*i === num2*j){
                        lcm = num1*i;
                        flag = false;
                        break;
                    }
                }
            }
        }
    }
    return lcm;
}
console.log(findLCM(40, 30));

// lcm ---- O(n)
function findLCM2(n1, n2){
    const larger = Math.max(n1, n2);
    const smaller = Math.min(n1, n2);

    for(let i = larger; ; i+=larger){
        if(i%smaller === 0){
            return i;
        }
    }
}

console.log(findLCM2(48, 30));

// hcf or gcd
function findHCF(n1, n2){
    const larger = Math.max(n1, n2);
    const smaller = Math.min(n1, n2);

    if(larger % smaller === 0){
        return smaller;
    }
    else{
        for(let i = smaller - 1; i > 1; i--){
            if(smaller%i === 0 && larger%i === 0){
                return i;
            }
        }
    }
}
console.log(findHCF(320, 408));
console.log(findHCF2(32, 408));

// recursive approach
function findHCF2(n1, n2){
    const larger = Math.max(n1, n2);
    const smaller = Math.min(n1, n2);

    if(smaller === 0){
        return larger;
    }
    else{
        return(smaller, larger%smaller);
    }
}

////// prime factorizations
function primeFactorization(num){
    let primeNumbers = findAllPrimes(num);
    let factrors = [];
    let idx = 0;
    while(num > 1){
        if(num%primeNumbers[idx] !== 0){
            idx++;
        }
        else{
            factrors.push(primeNumbers[idx]);
            num = num/primeNumbers[idx];
        }
    }
    let factorsObj = {};
    factrors?.forEach(f => {
        if(!factorsObj[f]){
            factorsObj[f] = 1;
        }
        else{
            factorsObj[f]+=1;
        }
    });
    let primeFactFreq = "";
    let primeFactStatement = [];
    Object.keys(factorsObj)?.map(k => {
        primeFactFreq = k + "^" + factorsObj[k];
        primeFactStatement.push(primeFactFreq);
    });
    return primeFactStatement?.join(" * ");
}

// console.log(primeFactorization(69*45));
console.log(primeFactorization(15));
// console.log(primeFactorization(169*5*4*32*32*43*69*45));

// better approach
function primeFactorization(num) {
    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }

    let factors = [];

    for (let factor = 2; factor <= num; factor++) {
        while (num % factor === 0) {
            factors.push(factor);
            num /= factor;
        }

        // Check for primality before proceeding to the next factor
        if (num > 1) {
            while (!isPrime(factor + 1)) {
                factor++;
            }
        }
    }

    const primeFactorization = factors.reduce((result, factor) => {
        result[factor] = (result[factor] || 0) + 1;
        return result;
    }, {});

    const primeFactorizationString = Object.keys(primeFactorization).map(factor => {
        const exponent = primeFactorization[factor];
        return exponent > 1 ? `${factor}^${exponent}` : factor;
    }).join(" * ");

    return primeFactorizationString;
}

const number = 169 * 5 * 4 * 32 * 43 * 69 * 45;
const factorization = primeFactorization(number);
console.log("Prime factorization of", number, "is:", factorization);

function minAnd2ndMin(arr,n){
    //code here
    n = arr.length;
    if(n === 1) return -1;
    else{
        
        let min = Number.MAX_SAFE_INTEGER;
        let min2 = Number.MAX_SAFE_INTEGER;
        
        for(let i = 0; i < n; i++){
            if(arr[i] < min){
                min2 = min;
                min = arr[i];
            }
            else if(arr[i] < min2){
                min2 = arr[i];
            }
        }
        return [min, min2];
    }
}
console.log(minAnd2ndMin([2, 4, 3 ,5 ,6]));

class Solution {
    
    sort012(arr, N) {
        //your code here
        let freqObj = {};
        arr?.forEach(e => {
            if(!freqObj[e]){
                freqObj[e] = 1;
            }
            else{
                freqObj[e] += 1;
            }
        });
        let finalArr = [];
        for(const key in freqObj){
            for(let i = 0; i < freqObj[key]; i++){
                finalArr.push(parseFloat(key));
            }
        }
        // console.log(finalArr)
        return finalArr;
    }
}

const x = new Solution;
console.log(x.sort012([0, 2, 1, 2, 0]));

function allDivisors(n){
    let allDivs = [];
    for(let i = 1; i*i <= n; i ++){
        if(n%i === 0){
            allDivs.push(i);
            if(i !== n/i) allDivs.push(n/i);
        }
    }
    // return allDivs.sort((a, b) => a - b);
    return allDivs;
}

console.log(allDivisors(36));

function armStrong (num){
    let n = num;
    let sum = 0;
    while(n > 0){
        sum += Math.pow(n%10, 3);
        n = parseInt(n/10);
    }
    console.log(sum);
    return num === sum;
}

console.log(armStrong(153));