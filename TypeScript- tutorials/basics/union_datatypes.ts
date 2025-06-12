let score: number | string = 33;
score = "44";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let somebody: User | Admin = {
  name: "Sergio Martin",
  id: 334,
};
somebody = {
  userName: "Professsor",
  id: 1007,
};
somebody = {
  name: "Anibal Cortes",
  userName: "Rio",
  id: 911,
};

modifyId("i23");
modifyId(92);
modifyId();
// modifyId({ id: "i90" });

function modifyId(id: number | string = 13) {
  //   id = id.toUpperCase();
  //   Property 'toUpperCase' does not exist on type 'string | number'.
  //   Property 'toUpperCase' does not exist on type 'number'.
  ///////////////////////////
  //   to get rid of this error
  if (typeof id === "string") {
    id = id.toUpperCase();
  } else {
    id += 21;
  }
}

// array

// array contains only number
const data: number[] = [1, 2, 3];
// array contains only string
const data2: string[] = ["qwe", "rty", "uio"];
// array containing either all the elements as number or all the elements as string
let data3: number[] | string[] = [1, 2, 4];
data3 = ["a", "s", "d"];
// data3 = [1,2,"l"];
// element inside array can either be a number or a sring
const data4: (number | string)[] = [1, 3, "cat"];

// can be either an array or a string
let data5: string[] | string = ["w", "s"];
data5 = "poi";

function welcomePeople(input: string[] | string): void {
  if (Array.isArray(input)) {
    input = input.join(":");
  } else {
    if (input.length > 2) {
      input = input.split("");
      input = input.slice(1, input.length - 1);
      input = input.join(":");
    }
  }
}

// Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing:

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

let pi: 3.14 = 3.14;
// pi = 4; // will give error.... this is weird but yes it compiles and does not give error.. so beware of this

// suppose you are booking a movie ticket and you have onnly 3 choices: diamond, golden, silver.... no other options and you don't want any coder to write any other ticket type
let ticket: "golden" | "silver" | "diamond";

ticket = "silver";
// ticket = "gol" // will give error --> Type '"gol"' is not assignable to type '"golden" | "silver" | "diamond"'
ticket = "diamond";
ticket = "golden";

export {};
