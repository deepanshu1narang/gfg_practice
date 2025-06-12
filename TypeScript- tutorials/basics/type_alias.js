"use strict";
// type keyword in ts
// suppose we need to create some object with some specific keys
// basically object with normal keys but values are its types
Object.defineProperty(exports, "__esModule", { value: true });
// can be used like this too
// it is kinda creating a specific type of data-structure
// take type User, return type User
function createUser(user) {
    console.log(user);
    user["isActive"] = !user.isActive;
    return user;
}
createUser({ name: "", email: "", isActive: false, _id: "" + Math.random() });
var myUser = {
    _id: "" + Math.random(),
    name: "Sasuke",
    email: "uchiha.sasuke@konoha.com",
    isActive: true,
};
// in myUser if I don't give name key it'll give me error bcoz 'name' key is mandatory
myUser.name = "Sasuke Uchiha";
var myCard = {
    cardNumber: "45678tyuio",
    cardDate: "12-09-2029",
    cvv: 234,
    fName: "Deepanshu",
};
myCard.lName = "Narang";
