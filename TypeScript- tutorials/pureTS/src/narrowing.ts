function detectType(val: string | number): string | number {
  if (typeof val === "string") return val.toLowerCase();
  return val + 5;
}

function provideId(id: string | null): void {
  if (!id) {
    console.log("id not found!");
  } else {
    id = "old_" + id;
    id = id.toLowerCase();
    console.log(id);
  }
}

function printAll(params: string | string[] | null) {
  if (params) {
    if (typeof params === "object") {
      for (const p of params) {
        console.log(p);
      }
    }
  } else if (typeof params === "string") {
    console.log(params);
  }
}

////////////////////// in operator Narrowing ///////////////

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: User | Admin) {
  // return account.isAdmin; /// isAdmin doesn't apply on User... only for Admin
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  let x = account.hasOwnProperty("isAdmin");
  console.log("x", x);
  return false;
}

// instanceof and Type Predicates

function logValue(x: Date | string | Object) {
  // example let r = new Date(); ..... r is isntanceOf Date
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else if (x instanceof Object) {
    console.log(Object.keys(x));
    console.log(Object.values(x));
    console.log(Object.entries(x));
  } else {
    console.log(x.toUpperCase());
  }
}

//////////////// Type Predicates //////////////////

type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};

function isFish2(pet: Fish | Bird): boolean {
  return (pet as Fish).swim !== undefined;
}
// THIS IS returning true or false
// but i want if the type is Fish or Bird

// for that
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
// basically pet is Fish is true if the fn is returning true; else false

function getFood(pet: Fish | Bird): string {
  if (isFish(pet)) {
    console.log(pet);
    return "fish food";
  } else {
    console.log(pet);
    return "bird food";
  }
}
