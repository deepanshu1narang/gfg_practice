// ...any
function addTwo(num){
    num.toUpperCase();
    return num + 2;
}

addTwo("5");

// wiriting in beeter way
function addThree(num: number){
    // num.toUpperCase(); .... in this case it'll show error
    return num + 3;
}

// addThree("3"); // will show error bco arg is string
addThree(3);

function getUpper(val: string): string{
    return val.toUpperCase();
}

// getUpper(); // at least 1 arg is reqd
let s2: string;
s2 = getUpper("qwerty");

function signUp(name: string, email: string, password: string): void{
    console.log("signed up, returned void");
    // return null;
}

signUp("d", "e", "e");

// fiving default values
const loginUser = (name: string, email: string, isPremium: boolean = false) => {
    // do nothing
};

loginUser("D", "qwe@rt.com", false);
loginUser("Da", "qe@t.com");

function getVal(myVal: number): boolean | string {
    if(myVal > 5){
        return true;
    }
    return "200 OK";
}

let val: boolean | string = getVal(2);
let val2: boolean | string = getVal(21);

const getHello = (s: string, c: number = 0): string => {
    return "";
}
getHello("naruto");

// const heroes = ["naruto", "luffy", "deku"];
const heroes = [1, 2, 3];
const hList = heroes.map(hero => `Main character of his show is ${hero}`);
const hList2 = heroes.map((hero): string => `Main character of his show is ${hero}`); //// not a good idea... TS will check the type itself

function consoleError(err: string): void {
    console.log(err);
}

function handleFailure(msg: string): never {
    throw new Error(msg);
}

handleFailure("big issue");

function giveInterest(principle: number, time: number, roi: number): number | string {
    if(principle < 0 || roi < 0){
        return "p and roi can't be negative";
    }
    else if(time < 0){
        return "Time travel is not possible yet";
    }
    return principle * roi * time / 100;
}


const amt: number | string = giveInterest(12345, 2, 5);
const amt2: number | string = giveInterest(12345, -2, 3.5);
console.log(amt); // Output: 1234.5
console.log(amt2);


export {};