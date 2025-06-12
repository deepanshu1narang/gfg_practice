"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Deepanshu Narang";
// greetings = true; ... shows error
//number
var userId = 33445.5;
userId.toFixed();
// boolean
var isLoggedIn = true;
// type inference
var myNum = 98;
// instead of myNum: number
// myNum = "gfg"; //// wrond... myNum is number and even without putting colon TS will know that myNum is a number
greetings.toLowerCase();
console.log(greetings);
// any w/p writing any
// let hero;
var hero;
function getHero() {
    // return "Akshay Saini";
    return true;
}
