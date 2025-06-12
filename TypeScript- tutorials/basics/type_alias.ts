// type keyword in ts
// suppose we need to create some object with some specific keys
// basically object with normal keys but values are its types

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardNumber?: number;
  //   collections: number[];
};

// examples
type syString = string;
// can be used like this too

// it is kinda creating a specific type of data-structure

// take type User, return type User
function createUser(user: User): User {
  console.log(user);
  user["isActive"] = !user.isActive;
  return user;
}

createUser({ name: "", email: "", isActive: false, _id: "" + Math.random() });

let myUser: User = {
  _id: "" + Math.random(),
  name: "Sasuke",
  email: "uchiha.sasuke@konoha.com",
  isActive: true,
};

// in myUser if I don't give name key it'll give me error bcoz 'name' key is mandatory

myUser.name = "Sasuke Uchiha";
// myUser._id = "qwer1234"; // gives error Cannot assign to '_id' because it is a read-only property. bcoz we used readonly while declaring

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardOwner = {
  fName: string;
  lName?: string;
};

// & is to combine all the things together (mandatorily... use ?: for making it optional
// mixing two types and using it at once
type cardDetails = cardNumber &
  cardOwner &
  cardDate & {
    cvv: number;
  };

let myCard: cardDetails = {
  cardNumber: "45678tyuio",
  cardDate: "12-09-2029",
  cvv: 234,
  fName: "Deepanshu",
};

myCard.lName = "Narang";

export {};
