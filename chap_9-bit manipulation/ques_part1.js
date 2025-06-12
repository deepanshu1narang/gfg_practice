// swap 2 numbers
function swap2numbers(a, b){
    console.log(a, "<<<a");
    console.log(b, "<<<b");

    a = a ^ b;
    b = a ^ b;
    a  = a ^ b;

    console.log(a, "<<<a");
    console.log(b, "<<<b");
}

swap2numbers(6, 5);

// check if i-th bit is set or not

