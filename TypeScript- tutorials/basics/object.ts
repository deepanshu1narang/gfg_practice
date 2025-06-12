// generally if we know keys of the object then interfacr, type are the best.... interface is the best

let obj: any = {};

obj.a = 9;

// but...
obj = "er";

// I want some vairable to be object only
interface DynamicObject {
  [key: string]: unknown;
}

let ob1: DynamicObject = {
  a: 45,
  b: "qwert",
  c: {
    ca: "werrye",
    cb: ["we", 3],
  },
};

console.log(ob1);

let ob2: DynamicObject = structuredClone(ob1);
ob2["next"] = [1, 3, 5, 7, 9];
