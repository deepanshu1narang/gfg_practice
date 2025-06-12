let greetings: string = "Hello Deepanshu Narang";
// greetings = true; ... shows error

//number
let userId: number = 33445.5;
userId.toFixed();

// boolean
let isLoggedIn: boolean = true;

// type inference
let myNum = 98;
// instead of myNum: number
// myNum = "gfg"; //// wrond... myNum is number and even without putting colon TS will know that myNum is a number


greetings.toLowerCase();

console.log(greetings);

// any w/p writing any
// let hero;
let hero: string;

function getHero(): boolean {
    // return "Akshay Saini";
    return true;
}

// hero = getHero();

// just to remove red line underlining  greetings
export {};