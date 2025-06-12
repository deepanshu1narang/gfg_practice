// getters and setters in JS
// In JavaScript, there are two kinds of object properties:

// ---- Data properties
// ---- Accessor properties

// data property is simply filling data into it
// ex: 
const student5 = {
    fName: "Sahil",
    lName: "Kumar",
}

// Accessor Property- In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

////////////////////  get - to define a getter method to get the property value
////////////////////  set - to define a setter method to set the property value

// getter

const student = {

    // data property
    firstName: 'Monica',
    lName: "Patel",

    // accessor property(getter)
    get getName() {
        return this.firstName;
    },
    get printLname() {
        console.log(this.lName);
    }

};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
// console.log(student.getName()); // error
// TypeError: student.getName is not a function
//     at Object.<anonymous> (/tmp/MlPLkaelxZ.js:25:25)
//     at Module._compile (node:internal/modules/cjs/loader:1356:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
//     at Module.load (node:internal/modules/cjs/loader:1197:32)
//     at Module._load (node:internal/modules/cjs/loader:1013:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
//     at node:internal/main/run_main_module:28:49

student.printLname;
// student.printLname(); //
// TypeError: student.printLname is not a function
//     at Object.<anonymous> (/tmp/MlPLkaelxZ.js:33:13)
//     at Module._compile (node:internal/modules/cjs/loader:1356:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
//     at Module.load (node:internal/modules/cjs/loader:1197:32)
//     at Module._load (node:internal/modules/cjs/loader:1013:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
//     at node:internal/main/run_main_module:




//////////////////////// setter ///////////////
// In JavaScript, setter methods are used to change the values of an object. For example,
const student2 = {
    firstName: 'Monica',

    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student2.firstName); // Monica

// change(set) object property using a setter
student2.changeName = 'Sarah';

console.log(student2.firstName); // Sarah

//////////////////// we can't use getter and setter as normal functions outside object
// ...................//////////////////// ex: student.getName not student.getName()
// similarly student.setName = value      not     student.setName(value)