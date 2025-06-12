// generally if we know keys of the object then interfacr, type are the best.... interface is the best
var obj = {};
obj.a = 9;
// but...
obj = "er";
var ob1 = {
    a: 45,
    b: "qwert",
    c: {
        ca: "werrye",
        cb: ["we", 3],
    },
};
console.log(ob1);
