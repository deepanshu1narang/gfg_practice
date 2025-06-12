///////////////// CHALLENGE 1 //////////////////////

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

const houses: Array<House> = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
];

function findHouses(houses: string | House[], filter?: (house: House) => boolean): HouseWithID[] {
  let housesFound: HouseWithID[] = [];
  if (typeof houses === "string") {
    houses = JSON.parse(houses);
  }
  (houses as House[]).forEach((house) => {
    if (filter) {
      let bool1 = filter(house);
      if (bool1) {
        housesFound.push({ ...house, id: Math.random() });
      }
    } else {
      housesFound.push({ ...house, id: Math.random() });
    }
  });
  return housesFound;
}

const house1 = findHouses(houses, (x) => x.name === "Atreides");
const house2 = findHouses(JSON.stringify(houses), (x) => x.name === "Harkonnen");
const house3 = findHouses(houses);

function findHouses2(houses: string | House[], filter?: (house: House) => boolean): HouseWithID[] {
  houses = typeof houses === "string" ? JSON.parse(houses) : houses;
  if (filter) {
    houses = (houses as House[]).filter(filter);
  }
  return (houses as House[]).map((house, index, arr) => ({ ...house, id: arr.indexOf(house) }));
}

const house4 = findHouses(houses, (x) => x.name === "Atreides");
const house5 = findHouses(JSON.stringify(houses), (x) => x.name === "Harkonnen");
const house6 = findHouses(houses);
const house7 = findHouses(JSON.stringify(houses));

console.log(house1);
console.log(house2);
console.log(house3);
console.log(house4);
console.log(house5);
console.log(house6);
console.log(house7);

//////////// CHALLENGE 2 /////////////////

//  1. forEach
function myForEach<T>(array: T[], cb: (v: T, index?: number, arr?: T[]) => void): void {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
}

myForEach([1, 4, 6, 8], (e) => console.log(e * 3));

function myForEach2<T>(items: Array<T>, cb: (v: T) => void): void {
  items.reduce((a, c) => {
    cb(c);
    return undefined;
  }, undefined);
}

myForEach2([1, 4, 6, 8], (e) => console.log(e * 3));

// 2. map

function myMap<T>(items: T[], callBack: (v: T, index?: number, arr?: T[]) => T): T[] {
  let arr: T[] = [];
  for (let i = 0; i < items.length; i++) {
    let elem = callBack(items[i], i, items);
    arr.push(elem);
  }
  return arr;
}

let x1 = myMap([1, 4, 6, 8], (e) => e ** 2);
console.log(x1);

function myMap2<T>(items: Array<T>, mapCB: (v: T) => T): T[] {
  let arr: T[] = [];
  items.reduce((a: unknown, c: T) => {
    arr.push(mapCB(c));
    return c;
  }, undefined);
  return arr;
}

x1 = myMap2([1, 4, 6, 8], (e) => e ** 2);
console.log(x1);

function myMap3<T>(items: T[], mapCB: (v: T) => T): T[] {
  return items.reduce<T[]>((a, c) => [...a, mapCB(c)], []);
}
x1 = myMap3([1, 4, 6, 8], (e) => e ** 3);
console.log(x1);

function myMap4<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce<K[]>((a, c) => [...a, mapFunc(c)], [] as K[]);
}
let x2 = myMap4([1, 4, 6, 8], (e) => (e ** 4).toString());
console.log(x2);

function myFilter<T>(items: T[], cb: (each: T, idx?: number, arr?: T[]) => boolean) {
  let arr: T[] = [];
  for (let i = 0; i < items.length; i++) {
    let bool1 = cb(items[i], i, items);
    if (bool1) {
      arr.push(items[i]);
    }
  }
  return arr;
}

console.log(myFilter([12, 23, 34, 45], (e) => e > 25));

function myFilter2<T>(items: T[], cb: (each: T) => boolean): T[] {
  return items.reduce<T[]>((a, c) => (cb(c) ? [...a, c] : a), []);
}
console.log(myFilter2([12, 23, 34, 45], (e) => e > 25));

export {};
