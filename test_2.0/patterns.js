document.getElementById('app').innerHTML = `<p><a href="https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/">Striver Patterns sheet</a></p>`;



function pattern2 (n) {
    let x = 0;
    for(let i = 0; i < n; i ++){
        let str = x.toString();
        if(x === 1) x= 0;
        else x = 1;
        // let str = "";
        for(let j = 0; j < i; j++){
            // x++;
            str += x;
            if(x === 1) x= 0;
            else x = 1;
        }
        console.log(str);
        // x++;
    }
}
pattern2(5);

function pattern3 (n) {
    for(let i = 0; i < n; i++){
        let str = "1";
        let x = 2; 
        for (let j = 0; j < i; j++){
            str += x;
            x++;
        }
        console.log(str);
    }
}

// pattern3(5);

function pattern4 (n) {
    for(let i = 1; i < n + 1; i++){
        let str = i.toString();
        for (let j = 1; j < i + 1; j++){
            str += i;
        }
        console.log(str);
    }
}
// pattern4(5);

function pattern5 (n){
    for(let i = n; i > 0; i--){
        let str = "1";
        let x = 2;
        for (let j = i  - 1; j > 0; j--){
            str += x;
            x++;
        }
        console.log(str);
    }
}

// pattern5(5);

function pattern6(n){
    for(let i = 0; i < n; i++){
        let str = "";
        for(let j = 0; j < 2 *n - 1; j++){
            if(j >= n - 1 - i && j <= n - 1 + i ){
                str += "*";
            }
            else{
                str += " ";
            }
        }
        console.log(str);
    }
}
// pattern6(4);
console.log("///////////");
const pattern7 = n => {
    for(let i = 0; i < n; i++){
        let str = "";
        for (let j = 0; j < 2 * n - 1; j++){
            if( j >= i && j <= 2 * (n - 1) - i){
                str+= "*";
            }
            else str+= " ";
        }
        console.log(str);
    }
}

// pattern7(4);

function pattern8 (n) {
    let x = 1;
    for(let i = 0; i < n; i ++){
        let str = "";
        for (let j = 0; j < 2 * n - 1; j++){
            if(j >= n - 1 -i && j <= n - 1 + i){
                str+= "*";
            }
            else str+= " ";
        }
        console.log(str);
        // console.log(x);
    }
    const m = n - 1;
    for (let i = 0; i < m; i++){
        let str = " ";
        for(let j = 0; j < 2 * m - 1; j++){
            if( j >= i && j <= 2 * (m - 1) - i){
                str+= "*";
            }
            else str+= " ";
        }
        console.log(str);
    }
}

pattern8(4);

function pattern9 (n) {
    let x = 1;
    for(let i = 0; i < n; i ++){
        let str = "";
        for (let j = 0; j < 2 * n - 1; j++){
            if(j >= n - 1 -i && j <= n - 1 + i){
                str+= "*";
            }
            else str+= " ";
        }
        console.log(str);
        // console.log(x);
    }
    const m = n;
    for (let i = 0; i < m; i++){
        let str = "";
        for(let j = 0; j < 2 * m - 1; j++){
            if( j >= i && j <= 2 * (m - 1) - i){
                str+= "*";
            }
            else str+= " ";
        }
        console.log(str);
    }
}

pattern9(4);

const pattern10 = (n) => {
    for(let i = 0; i < n; i++){
        let str = "*";
        for (let j = 0; j < i; j++){
            str += "*";
        }
        console.log(str);
    }
    for(let i = n - 1; i > 0; i--){
        let str = "*";
        for (let j = 0; j < i - 1; j++){
            // if(j === i - 1) str += "*";
            // else str+= " ";
            str+= "*";
        }
        console.log(str);
    }
}
pattern10(5);

console.log("//////////////")
const boxPattern1 = (n) => {
    let x = 0;
    for(let i =0; i < n; i++){
        if(x === 1) x= 0;
        else x = 1;
        let str = "";
        for (let j = 0; j < n; j++){
            // x++;
            // if((i === 0 || i === n-1)) str+= "*";
            if((i === 0 || i === n-1)) str+= x;
            else if(j === 0 || j === n-1){
                // str+="*";
                str+= x;
            }
            else{
                str+= " ";
            }
            if(x === 1) x= 0;
            else x = 1;
        }
        console.log(str);
    }
}
boxPattern1(4);

//0 * * * * * * * * * * n - 0, n 
//1 * * * *     * * * * n - 1, n - 1 + 1 4, 5
//2 * * *         * * * n - 2, n - 1, n - 1 + 1, n + 1 3, 6
//3 * *             * * n - 3, n - 2, n - 1, n, n +1, n + 2 2, 7
//4 *                 * 1, 8
//5 *                 * 0, 9 ----- 1, 8 ................. 5 - 5
//6 * *             * * 1, 10 ----- 2, 7 ............... 6 - 5
//7 * * *         * * * 2, 11 ----- 3, 6 ................ 7 - 5
//8 * * * *     * * * * 3, 12 ---- 4, 5 ................. 8 - 5 
//9 * * * * * * * * * *

function boxPattern2(n){
    for(let i = 0; i < 2 * n; i++){
        let str1 = "";
        let lowerVal = n - i;
        if(i >= n){
            lowerVal = i - n + 1;
        } 
        higherVal = 2 * n - 1 - lowerVal;
        for(let j = 0; j < 2 * n; j++){
            if(i === 0 || i === 2 * n - 1) str1 += "*";
            else if(j >= lowerVal && j <= higherVal) str1 += " ";
            else str1 += "*";
        }
        console.log(str1);
        // document.write(str1 + "<br>");
    } 
}

boxPattern2(40);

// n = 5 0123456789             <=     >=
// 0     *        *  1, 8...    0 ---- 9    i, 2 * n - 1 - i 
// 1     **      **  2, 7...    1 ---- 8    i, 2 * n - 1 - i
// 2     ***    ***  3, 6...    2 ---- 7
// 3     ****  ****  4, 5...    3 ---- 6
// 4     **********      ...    4 ---- 5
// 5     ****  ****  4, 5...    3 ---- 6    2 * n - i - 2
// 6     ***    ***  3, 6...    2 ---- 7    10 - 6 -2
// 7     **      **  2, 7...    1 ---- 8    10 - 7 - 2
// 8     *        *  1, 8...    0 ---- 9    10 - 8 - 2

function boxPattern3(n){
    for(let i = 0; i < 2 * n - 1; i++){
        let str = "";
        let lowerVal = i;
        if(i >= n) lowerVal = 2 * (n - 1) - i; 
        higherVal = 2 * n - 1 - lowerVal;
        for(let j = 0; j < 2 * n; j++){
            if(j <= lowerVal || j >= higherVal) str += "*";
            else str += " ";
        }
        console.log(str);
        // document.write(str + "<br>");
    }
}
console.log("boxPattern3");
boxPattern3(50);