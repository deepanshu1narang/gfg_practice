// 1. Print all subsequences of an array

const arr2 = [3, 1, 2];
const n = arr2.length;
function getSubsequences(idx = 0, list = []){
    if(idx >= n){
        console.log(list);
        return;
    }
    
    list.push(arr2[idx]);
    getSubsequences(idx + 1, list);
    list.pop();
    getSubsequences(idx + 1, list);
}

getSubsequences(0, []);

// 2. Print all the subsequences whose sum is K (a given number)
function getCountAndSubsequences(arr, k){
    let value = {x: 0};

    return printSubsequences([1,2,1], 2, value, 0, [], 0);
}

function printSubsequences(arr, k, value, idx = 0, list = [], sum = 0){
    if(idx === arr.length){
        if(sum === k){
            console.log(list);
            value.x++;
        }
        return;
    }
    
    list.push(arr[idx]);
    sum += arr[idx];
    printSubsequences(arr, k, value, idx + 1, list, sum);
    list.pop();
    sum -= arr[idx];
    
    printSubsequences(arr, k, value, idx + 1, list, sum);
    return value.x;
}

console.log(getCountAndSubsequences([1,2,1], 2));
