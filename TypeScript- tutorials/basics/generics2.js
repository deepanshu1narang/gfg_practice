"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function takes T and returns a tuple of 2 fns... 1st fn returns T and 2nd fn takes T and returns nothing
function simpleState(initial) {
    var val = initial;
    return [
        function () { return val; },
        function (v) {
            val = v;
        },
    ];
}
var _a = simpleState(10), st1getter = _a[0], st1setter = _a[1];
console.log(st1getter());
st1setter(43);
console.log(st1getter());
//////////////// overriding  inferred generic type
// with this only specific type I can give
var _b = simpleState("str"), st2getter = _b[0], st2setter = _b[1];
console.log(st2getter());
// in st2String we have to give string only
st2setter("59");
console.log(st2getter());
// to make it to take null also.. just use a union tyoe
var _c = simpleState(null), st3getter = _c[0], st3setter = _c[1];
console.log(st3getter());
st3setter("str");
console.log(st3getter());
// function ranker(items: any[], rank: (v: any) => number): any[] {}
function ranker(items, rank) {
    var ranks = items.map(function (item) { return ({
        item: item,
        rank: rank(item),
    }); });
    ranks.sort(function (a, b) { return a.rank - b.rank; });
    return ranks.map(function (rank) { return rank.item; });
}
function ranker2(items, rank) {
    var ranks = items.map(function (item) { return ({
        item: item,
        rank: rank(item),
    }); });
    ranks.sort(function (A, b) { return A.rank - b.rank; });
    return ranks.map(function (rank) { return rank.item; });
}
var pokemons = [
    {
        name: "Pikachu",
        hp: 45,
    },
    {
        name: "Squirtle",
        hp: 37,
    },
];
var pokeRanks = ranker(pokemons, function (x) { return x.hp; });
console.log(pokeRanks);
var pokeRanks2 = ranker2(pokemons, function (poke) { return poke.hp; });
console.log(pokeRanks2);
