"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// suppose we want to keep some constant values across pur code
var AISLE = 0;
var MIDDLE = 1;
var WINDOW = 2;
var seat = 0;
var code;
if (seat === AISLE) {
}
else if (seat === MIDDLE) {
}
else if (seat === WINDOW) {
}
// here codes are written for aisle, middle and window... we can write this as
if (seat === 0) {
}
else if (seat === 1) {
}
else if (seat === 2) {
}
// but suddenly management changes the codes for those keys... then we need to write those again
// 1 idea is to keep this is object and send it to redux and we'll change it at onle place only
// we can use enums too
// enums: we want to have some restrictive options
// example
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
// it by default takes up 1st one as 0, next as 1, and does increment to all the succeeding values
// these values can be changed too... but if we don't change it then the value will take value as preceeding  +1
// example here, AISLE = 0, MIDDLE (next to it) = 1 and WINDOW = 2
var hcSeat = SeatChoice.AISLE;
console.log(SeatChoice.AISLE, SeatChoice.MIDDLE, SeatChoice.WINDOW);
// another example
var TheatreSeatChoice;
(function (TheatreSeatChoice) {
    TheatreSeatChoice[TheatreSeatChoice["SILVER"] = 200] = "SILVER";
    TheatreSeatChoice[TheatreSeatChoice["GOLD"] = 201] = "GOLD";
    TheatreSeatChoice[TheatreSeatChoice["DIAMOND"] = 202] = "DIAMOND";
    TheatreSeatChoice[TheatreSeatChoice["PLATINUM"] = 203] = "PLATINUM";
    TheatreSeatChoice[TheatreSeatChoice["URANIUM"] = 204] = "URANIUM";
})(TheatreSeatChoice || (TheatreSeatChoice = {}));
console.log(TheatreSeatChoice.SILVER, TheatreSeatChoice.GOLD, TheatreSeatChoice.DIAMOND, TheatreSeatChoice.PLATINUM, TheatreSeatChoice.URANIUM);
// here I gave SILVER as 200... so GOLD as SILVER + 1 ie GOLD = 201, DIAMOND = 202, PLATINUM = 203, URANIUM as 204
var PeriodicElements;
(function (PeriodicElements) {
    PeriodicElements[PeriodicElements["Au"] = 212] = "Au";
    PeriodicElements[PeriodicElements["Ag"] = 318] = "Ag";
    PeriodicElements[PeriodicElements["Na"] = 23] = "Na";
    PeriodicElements[PeriodicElements["Xv"] = 24] = "Xv";
    PeriodicElements[PeriodicElements["Zn"] = 25] = "Zn";
    PeriodicElements[PeriodicElements["K"] = 21] = "K";
})(PeriodicElements || (PeriodicElements = {}));
// for others values are there but for Xv and Zn not there... so Xv is 24 and Zn is 25
console.log(PeriodicElements.Au, PeriodicElements.Ag, PeriodicElements.Na, PeriodicElements.Xv, PeriodicElements.Zn, PeriodicElements.K);
// if we give numbers  then these get auto-calculated but if we give string as value then we have to give value for each until we give a number as value
var Ninjas;
(function (Ninjas) {
    Ninjas["NARUTO"] = "Naruto";
    Ninjas["SASUKE"] = "Sasuke";
    Ninjas[Ninjas["GENIN"] = 0] = "GENIN";
    Ninjas[Ninjas["CHUNIN"] = 1] = "CHUNIN";
    Ninjas[Ninjas["JONIN"] = 2] = "JONIN";
})(Ninjas || (Ninjas = {}));
var ninja = Ninjas.NARUTO;
console.log(ninja);
console.log(Ninjas);
console.log(Ninjas[0]);
var ninja2 = "Naruto" /* Ninjas2.NARUTO */;
console.log(ninja);
