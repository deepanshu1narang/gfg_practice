// tuples are useful when we have fixed number of elements and type for them is also fixed .. in fact order of types in that array is also fixed.. that's tuple
// IT'S NOT SAME AS PYTHON TUPLE
// we can use rest element in tuple and hence fixed length in that case is no more applicable

let tupleData: [number, boolean, string];
tupleData = [23, false, "vbnm"];
tupleData = [2, true, ";"];
// tupleData = [22, true, "lku", "e"];
tupleData.pop();

tupleData.push("lawn");
tupleData.push(false);
tupleData.push(0);

// in tuple we said fixed  number of elements can be written ... but... tuple at the end of the day is just an array and all the array methods are applicable

let rgb: [number, number, number];
rgb = [32, 44, 98];

// only numners can be pushed

rgb.push(223);

// optional element in tuple
type Either2dOr3d = [number, number, number?];
let cord1: Either2dOr3d = [3, 5];
cord1 = [3, 8, 18];

// rest elements in tuple .... it has to be a type
type StringNumberBooleansTuple = [string, number, ...boolean[]];
let restTuple: StringNumberBooleansTuple = ["qw", 89, true, false, true, false];

type StringBooleansNumberTuple = [string, ...boolean[], number];
let restTuple2: StringBooleansNumberTuple = ["dfg", true, false, 9];

type BooleansStringNumberTuple = [...boolean[], string, number];
let restTuple3: BooleansStringNumberTuple = [false, true, false, "oiuytrew", 9];
restTuple3.unshift(67);
