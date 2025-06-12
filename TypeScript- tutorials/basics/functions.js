"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ...any
function addTwo(num) {
    num.toUpperCase();
    return num + 2;
}
addTwo("5");
// wiriting in beeter way
function addThree(num) {
    // num.toUpperCase(); .... in this case it'll show error
    return num + 3;
}
// addThree("3"); // will show error bco arg is string
addThree(3);
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(); // at least 1 arg is reqd
var s2;
s2 = getUpper("qwerty");
function signUp(name, email, password) {
    console.log("signed up, returned void");
    // return null;
}
signUp("d", "e", "e");
// fiving default values
var loginUser = function (name, email, isPremium) {
    if (isPremium === void 0) { isPremium = false; }
    // do nothing
};
loginUser("D", "qwe@rt.com", false);
loginUser("Da", "qe@t.com");
function getVal(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var val = getVal(2);
var val2 = getVal(21);
var getHello = function (s, c) {
    if (c === void 0) { c = 0; }
    return "";
};
getHello("naruto");
// const heroes = ["naruto", "luffy", "deku"];
var heroes = [1, 2, 3];
var hList = heroes.map(function (hero) { return "Main character of his show is ".concat(hero); });
var hList2 = heroes.map(function (hero) { return "Main character of his show is ".concat(hero); }); //// not a good idea... TS will check the type itself
function consoleError(err) {
    console.log(err);
}
function handleFailure(msg) {
    throw new Error(msg);
}
handleFailure("big issue");
function giveInterest(principle, time, roi) {
    if (principle < 0 || roi < 0) {
        throw new Error("p and roi can't be negative");
    }
    else if (time < 0) {
        throw new Error("Time travel is not possible yet");
    }
    return principle * roi * time / 100;
}
try {
    var amt = giveInterest(12345, 2, 5);
    console.log(amt); // Output: 1234.5
}
catch (error) {
    console.error(error.message);
}
try {
    var amt2 = giveInterest(12345, -2, 3.5);
    console.log(amt2);
}
catch (error) {
    console.error(error.message); // Output: "Time travel is not possible yet"
}
