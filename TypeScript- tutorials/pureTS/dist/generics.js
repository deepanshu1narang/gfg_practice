"use strict";
const scores = [];
const names = [];
function identity1(val) {
    return val;
}
// takes boolean | number as argument and returns boolean | number
function identity2(val) {
    return val;
}
// takes any as argument and returns any
////// super IMP
function identity3(val) {
    return val;
}
// takes something as argument and returns the same type
const id3 = identity3(4);
const id4 = identity3("5");
function identity4(val) {
    // console.log(val.length); /// it's not fixed that val will be an array for sure
    return val;
} // just T got replaced with Type but people generally use this to look cool
// way to give interface as argument
const id5 = identity4({
    brand: "Avvatar",
    price: 300,
});
const id6 = identity3(8);
function identity5(arg) {
    // this time arg is an array for sure.
    console.log(arg);
    return arg;
}
function identity6(arg) {
    console.log(arg.length);
    return arg;
}
// if it is one of the value from the array
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
// arrow function syntax with generics
const seeMoreProductsLikeThis = (products) => {
    // logic
    return products;
};
const seeMoreProductsLikeThis2 = (products) => {
    // logic
    const idx = 5;
    return products[idx];
};
// this <T, > means it is not a component... it is a generic
// const someFn = <T, >(args: T[]): void => {
const someFn = (args) => {
    // return 5;
    console.log("some logics");
    // return args[1];
};
///////////////////////////// please watch 3rd vidoeo of generics too
///////////////////// generic classes //////////////////////////
function anotherGenericFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherGenericFunction(3, "9");
function anotherFunction(val1, val2) {
    return {
        val1,
        val2,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
