let shinobis: string[] = [];
shinobis.push("Kakashi Hatake");
shinobis[4] = "92";

let luckyNumbers: number[] = [];
luckyNumbers.push(1);
luckyNumbers.push(2);
luckyNumbers.push(3);
const red = 9;
luckyNumbers[3] = red;

let randomArr: any[] = [];

randomArr[0] = null;
randomArr[1] = "null string";
randomArr[2] = 98;

// another way of declaring the variable

let heroPower: Array<number> = []; //same as heroPower: number[] = [];
heroPower.push(4);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
// allUsers.push("") // will give error
allUsers.push({
  name: "K K",
  isActive: false,
});

const selectedUsers: Array<User> = [];
// selectedUsers[0] = {} //will give error;

const as: User = {
  name: "Arijit Singh",
  isActive: true,
};

selectedUsers[0] = as;

const matrix: number[][] = [
  [1, 2, 3],
  [2, 4, 5],
  [0, 1, 0],
];

const matrix2: string[][] = [
  ["a", "b"],
  ["c", "d"],
];

const matrix3: any[][] = [
  [1, 2, "v"],
  [6, "l", "o"],
];

console.log(matrix);

export {};
