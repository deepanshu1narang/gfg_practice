const scores: Array<number> = [];
const names: Array<string> = [];

function identity1(val: boolean | number): boolean | number {
  return val;
}
// takes boolean | number as argument and returns boolean | number

function identity2(val: any): any {
  return val;
}
// takes any as argument and returns any

////// super IMP

function identity3<Type>(val: Type): Type {
  return val;
}

// takes something as argument and returns the same type

const id3 = identity3(4);
const id4 = identity3("5");

function identity4<T>(val: T): T {
  // console.log(val.length); /// it's not fixed that val will be an array for sure
  return val;
} // just T got replaced with Type but people generally use this to look cool

interface Bottle {
  brand: string;
  type?: string;
  price: number;
}

// way to give interface as argument
const id5 = identity4<Bottle>({
  brand: "Avvatar",
  price: 300,
});

const id6 = identity3<number>(8);

function identity5<Type>(arg: Type[]): Type[] {
  // this time arg is an array for sure.
  console.log(arg);
  return arg;
}

function identity6<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length);
  return arg;
}

// if it is one of the value from the array
function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3;
  return products[myIndex];
}

// arrow function syntax with generics
const seeMoreProductsLikeThis = <T>(products: T[]): T[] => {
  // logic
  return products;
};

const seeMoreProductsLikeThis2 = <T>(products: T[]): T => {
  // logic
  const idx = 5;
  return products[idx];
};

// this <T, > means it is not a component... it is a generic
// const someFn = <T, >(args: T[]): void => {
const someFn = <T>(args: T[]): void => {
  // return 5;
  console.log("some logics");
  // return args[1];
};
///////////////////////////// please watch 3rd vidoeo of generics too
///////////////////// generic classes //////////////////////////

function anotherGenericFunction<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherGenericFunction(3, "9");

interface DB {
  connection: string;
  userName: string;
  password: string;
}

function anotherFunction<T, U extends DB>(val1: T, val2: U) {
  return {
    val1,
    val2,
  };
}

// class usage in generics

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  public addToCart(product: T) {
    this.cart.push(product);
  }
}
