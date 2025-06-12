"use strict";
/////////////////////////// UTILITY TYPES ////////////////////////////////
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function updateTodo(todo, filedsToUpdate) {
    return Object.assign(Object.assign({}, todo), filedsToUpdate);
}
const todo1 = {
    title: "organise room",
    description: "clean the table",
};
// for todo2 I directly can't write only description; but using Partial I can
const todo2 = {
    description: "throw out trash",
};
const finalTask = updateTodo(todo1, todo2);
const ob1 = { a: 3 };
// const ob2: Required<Props> = {b: "p"}; //// in this we'll need to give every key even if they are optional
const ob2 = { b: "p", a: 6 }; //// in this we'll need to give every key even if they are optional
const merge = (user, overrides) => (Object.assign(Object.assign({}, user), overrides));
// example
let p1 = { name: "Selena Gomez", email: "gSel112@gmail.com" };
let p2 = { email: "gomez.Selena@gmail.com" };
p1 = merge(p1, p2);
console.log(p1);
const q1 = {
    name: "Sahil Kumar",
    email: "sahil.kumar@incture.com",
    phNumber: 912837465,
    id: "120992",
};
const person = {
    name: "Deepanshu",
};
const anotherPerson = {
    name: "Deepanshu",
    phNumber: 5678,
};
// Record<Keys, Type>
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shor thair" },
};
console.log(cats.boris);
// what if I change id from type string to number or something else
// let's ask it to take type of id itself
// const mapById = (users: MyUser2[]): Record<string, MyUser2> => {
const mapById = (users) => {
    // whatever property we're going to use as key must not be optional (bcoz now c.id was string | undefined but we wanted it as string only)
    return users.reduce((a, c) => (Object.assign(Object.assign({}, a), { [c.id]: c })), {});
};
console.log(mapById([
    {
        id: "foo",
        name: "foo",
    },
    {
        id: "baz",
        name: "Baz",
    },
]));
// ///////////////////// 5. Omit //////////////////////
// what if in the result of mapById i don't want id to be shown again
// what if I change id from type string to number or something else
// let's ask it to take type of id itself
// const mapById2 = (users: MyUser2[]): Record<string, Omit<MyUser2, "id">> => {
const mapById2 = (users) => {
    return users.reduce((a, c) => {
        const { id } = c, others = __rest(c, ["id"]);
        return Object.assign(Object.assign({}, a), { [id]: others });
    }, {});
};
let q11 = mapById2([
    {
        id: "foo",
        name: "foo",
    },
    {
        id: "baz",
        name: "Baz",
    },
]);
console.log(mapById2([
    {
        id: "foo",
        name: "foo",
    },
    {
        id: "baz",
        name: "Baz",
    },
])); // we're still getting id... we need to remove this
