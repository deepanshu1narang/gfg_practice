Print all subsequences of an array

const arr2 = [3, 1, 2];
const n = arr2.length;
function getSubsequences(idx = 0, list = []){
    if(idx >= n){
        console.log(list, "result");
        return;
    }
    
    list.push(arr2[idx]);
    getSubsequences(idx + 1, list);
    console.log(list, "phase a", idx);
    list.pop();
    getSubsequences(idx + 1, list);
    console.log(list, "phase r", idx);
}

getSubsequences(0, []);
