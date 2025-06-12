// function stringMatcher(str1, str2) {
//     let flag = true;
//     if (str1 === str2 || str2 === "?*" || str2 === "*?" || (str2.split("").length > 0 && str2.split("").every(e => e === "*"))) {
//         // flag = true;
//     }
//     else {
//         for (let i = 0; i < str1.length; i++) {
//             if (str1[i] === str2[i]) {
//                 // flag = true;
//             }
//             else if (str2[i] !== "?" && str2[i] !== "*") {
//                 flag = false;
//                 break;
//             }
//             // else if(str2[i] === "?" && !str2.includes("*")){
//             //     flag = stringMatcher(str1.slice(i + 1), str2.slice(i + 1));
//             // }
//             else if (str2[i] === "?") {
//                 flag = stringMatcher(str1.slice(i + 1), str2.slice(i + 1));
//                 // continue;
//             }
//             else if (str2[i] === "*") {
//                 let str2AfterStar = str2.slice(i + 1);
//                 let newStr1 = str1.slice(-1 * str2AfterStar.length);
//                 flag = stringMatcher(newStr1, str2AfterStar);
//             }
//             // 
//         }
//     }
//     return flag;
// }


// function loopIn(inp) {
//     const input = inp;
//     for (let i = 0; i < input.length; i++) {
//         const [str1, str2] = input[i].split(" ");
//         const res = stringMatcher(str1, str2);
//         if (res) console.log("True");
//         else console.log("False");
//     }
// }

// const tc1 = ["Hello Hell*", "Hell He*ll", "Hell hell*"];
// const tc2 = ["Hello *l?", "Hell He?ll", "Hell ?*"];

// console.log("tc1");
// loopIn(tc1);
// console.log("tc2");
// loopIn(tc2);


// let str1 = "tri";
// let str2 = "sttring";



// function isPartOf(str1, str2) {
//     let n1 = str1.length;
//     let n2 = str2.length;
//     let i = 0, j = 0;

//     while (i < n1 && j < n2) {
//         if (str1[i] !== str2[j]) {
//             if (i > 0 && j > 0) {
//                 i = 0;
//                 if (str1[i] === str2[j]) {
//                     i++;
//                 }
//             }
//         }
//         else if (str1[i] === str2[j]) {
//             i++;
//             if (i === n1) {
//                 return true;
//             }
//         }
//         j++;
//     }
//     return false;
// }

// console.log(isPartOf(str1, str2));

function largestPrimeFactor(N) {
    const ogNum = N;
    if (N <= 1) return 1;
    let lpf = 1;
    while (N % 2 === 0) {
        lpf = 2;
        N /= 2;
    }
    while (N % 3 === 0) {
        lpf = 3;
        N /= 3;
    }
    for (let i = 5; i * i < N; i += 6) {
        while (N % i === 0) {
            lpf = i;
            N /= i
        }
        while (N % (i + 2) === 0) {
            lpf = i + 2;
            N /= (i + 2);
        }
        if (N > 3) lpf = N;
    }
    if (lpf === ogNum) {
        return 1;
    }
    return lpf;
}

console.log(largestPrimeFactor(55));