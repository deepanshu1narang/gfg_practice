"use strict";
function detectType(val) {
    if (typeof val === "string")
        return val.toLowerCase();
    return val + 5;
}
function provideId(id) {
    if (!id) {
        console.log("id not found!");
    }
    else {
        id = "old_" + id;
        id = id.toLowerCase();
        console.log(id);
    }
}
function printAll(params) {
    if (params) {
        if (typeof params === "object") {
            for (const p of params) {
                console.log(p);
            }
        }
    }
    else if (typeof params === "string") {
        console.log(params);
    }
}
function isAdmin(account) {
    // return account.isAdmin; /// isAdmin doesn't apply on User... only for Admin
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    let x = account.hasOwnProperty("isAdmin");
    console.log("x", x);
    return false;
}
// instanceof and Type Predicates
function logValue(x) {
    // example let r = new Date(); ..... r is isntanceOf Date
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else if (x instanceof Object) {
        console.log(Object.keys(x));
        console.log(Object.values(x));
        console.log(Object.entries(x));
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish2(pet) {
    return pet.swim !== undefined;
}
// THIS IS returning true or false
// but i want if the type is Fish or Bird
// for that
function isFish(pet) {
    return pet.swim !== undefined;
}
// basically pet is Fish is true if the fn is returning true; else false
function getFood(pet) {
    if (isFish(pet)) {
        console.log(pet);
        return "fish food";
    }
    else {
        console.log(pet);
        return "bird food";
    }
}
