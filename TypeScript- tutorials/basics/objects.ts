const User = {
  name: "Harry",
  channel: "Code with Harry",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }): void {}

createUser({ name: "hitesh", isPaid: false });

// return object
function createCourse(): {} {
  return {};
}

function createCourse2(): object {
  return { a: 3 };
}

// function (): return type object to show that fn will return object {
//  fn logic
// }
function createCourse3(): { name: string; price: number } {
  return { name: "TypeScript", price: 400 };
}

const newUser = {
  name: "Akshay Saini",
  isPaid: true,
  email: "akshay@namastedev.com",
};

// bad behaviour of object bcoz email was not there in createUser fn
createUser(newUser);

export {};
