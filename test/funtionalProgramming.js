'use strict'
console.log(this);
function abc () {
    console.log(this);
}
abc({a: 4});