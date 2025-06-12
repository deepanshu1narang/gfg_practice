// suppose we want to keep some constant values across pur code
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

let seat: number = 0;
let code: number;

if (seat === AISLE) {
} else if (seat === MIDDLE) {
} else if (seat === WINDOW) {
}

// here codes are written for aisle, middle and window... we can write this as
if (seat === 0) {
} else if (seat === 1) {
} else if (seat === 2) {
}
// but suddenly management changes the codes for those keys... then we need to write those again
// 1 idea is to keep this is object and send it to redux and we'll change it at onle place only

// we can use enums too
// enums: we want to have some restrictive options
// example
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}
// it by default takes up 1st one as 0, next as 1, and does increment to all the succeeding values
// these values can be changed too... but if we don't change it then the value will take value as preceeding  +1
// example here, AISLE = 0, MIDDLE (next to it) = 1 and WINDOW = 2

const hcSeat = SeatChoice.AISLE;
console.log(SeatChoice.AISLE, SeatChoice.MIDDLE, SeatChoice.WINDOW);

// another example
enum TheatreSeatChoice {
  SILVER = 200,
  GOLD,
  DIAMOND,
  PLATINUM,
  URANIUM,
}
console.log(TheatreSeatChoice.SILVER, TheatreSeatChoice.GOLD, TheatreSeatChoice.DIAMOND, TheatreSeatChoice.PLATINUM, TheatreSeatChoice.URANIUM);
// here I gave SILVER as 200... so GOLD as SILVER + 1 ie GOLD = 201, DIAMOND = 202, PLATINUM = 203, URANIUM as 204

enum PeriodicElements {
  Au = 212,
  Ag = 318,
  Na = 23,
  Xv,
  Zn,
  K = 21,
}

// for others values are there but for Xv and Zn not there... so Xv is 24 and Zn is 25
console.log(PeriodicElements.Au, PeriodicElements.Ag, PeriodicElements.Na, PeriodicElements.Xv, PeriodicElements.Zn, PeriodicElements.K);

// if we give numbers  then these get auto-calculated but if we give string as value then we have to give value for each until we give a number as value

enum Ninjas {
  NARUTO = "Naruto",
  SASUKE = "Sasuke",
  GENIN = 0,
  CHUNIN,
  JONIN,
}

const ninja = Ninjas.NARUTO;
console.log(ninja);
console.log(Ninjas);
console.log(Ninjas[0]);
// here Ninjas.GENIN === 0 and Ninjas[0] === "GENIN" .... interchangably they can be used

// here if we check its JS code it has generated a lots of IIFE for every enum and that is little crazy and tricky to understand.... if we want it to b e simple then we just need to use const before enum keyword
// check the changes in Ninjas and Ninja2

const enum Ninjas2 {
  NARUTO = "Naruto",
  SASUKE = "Sasuke",
  GENIN = 0,
  CHUNIN,
  JONIN,
}

const ninja2 = Ninjas2.NARUTO;
console.log(ninja);

export {};
