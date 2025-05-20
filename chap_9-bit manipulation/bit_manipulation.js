// (x: number): string
function convertDecimalToBinary(num) {
    if (num === 0)
        return "0";
    let bin = "";
    while (num !== 1) {
        bin = num % 2 + bin;
        num = Math.floor(num / 2);
    }
    return num + bin;
}
// TC - log2 (n)
// SC - log2 (n)
console.log(convertDecimalToBinary(13));
// (bin: string): number
function convertBinaryToDecimal(bin) {
    let num = 0;
    const len = bin.length;
    for(let i = len - 1; i >= 0; i--){
        num += (bin[i] - 0) * Math.pow(2, bin.length - 1 - i);
    }
    return num;
}

console.log(convertBinaryToDecimal('1101'));

// the computer stores 32 bits for int (00000000000000000000000000001101) and 64 bits for long long

