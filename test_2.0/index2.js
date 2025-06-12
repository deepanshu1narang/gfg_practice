function recersiveCombos(arr, n, combos){
    // let combos = [];
    let randomIndex = Math.floor(Math.random()*arr.length);
    let tempArr = [...arr];
    const ele = tempArr.splice(randomIndex, 1);
    combos.push(ele);
    if (n === 1) {
        return combos;
    }
    else{
        recersiveCombos(tempArr, n-1, combos);
    }
}
function getCombinations(arr, n){
    let result = [];
    for(let i = 0; i < n; i++){
        let x = recersiveCombos(arr, n, []);
        result.push(x);
    }
    return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('getCombinations', getCombinations(arr, 3));