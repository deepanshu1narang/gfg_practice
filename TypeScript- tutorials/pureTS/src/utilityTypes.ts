/////////////////////////// UTILITY TYPES ////////////////////////////////

// 1. Awaited<Type>  ----- for Promises
// wait

// 2. Partial<Type>
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, filedsToUpdate: Partial<Todo>) {
  return { ...todo, ...filedsToUpdate };
}

const todo1: Todo = {
  title: "organise room",
  description: "clean the table",
};

// for todo2 I directly can't write only description; but using Partial I can
const todo2: Partial<Todo> = {
  description: "throw out trash",
};

const finalTask = updateTodo(todo1, todo2);

////////////////////////// 3. Required  ---- opposite of Partial ..... in this all the keys from interface are  required
interface Props {
  a?: number;
  b?: string;
}

const ob1: Props = { a: 3 };
// const ob2: Required<Props> = {b: "p"}; //// in this we'll need to give every key even if they are optional
const ob2: Required<Props> = { b: "p", a: 6 }; //// in this we'll need to give every key even if they are optional

interface MyUser {
  name: string;
  email: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => ({
  ...user,
  ...overrides,
});

// example
let p1: MyUser = { name: "Selena Gomez", email: "gSel112@gmail.com" };
let p2: MyUserOptionals = { email: "gomez.Selena@gmail.com" };
p1 = merge(p1, p2);
console.log(p1);

interface MyUser2 {
  name: string;
  email?: string;
  phNumber?: number;
  id: string;
}

type RequiredUser = Required<MyUser2>;
const q1: RequiredUser = {
  name: "Sahil Kumar",
  email: "sahil.kumar@incture.com",
  phNumber: 912837465,
  id: "120992",
};

///////////////// 3. Pick //////////////////

// Pick<TypeError, Keys> .... 1st select  type or interface and then choose whatever keys out of (type/interface) them you want
type PhNum = {
  phNumber: number;
};
type JustEmailAndName = Pick<MyUser2, "name" | "email">;
type JustEmailAndName2 = Pick<MyUser2, "name" | "email"> & PhNum;

const person: JustEmailAndName = {
  name: "Deepanshu",
};
const anotherPerson: JustEmailAndName2 = {
  name: "Deepanshu",
  phNumber: 5678,
};

///////////////////// 4. Record /////////////////////////////

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

// Record<Keys, Type>
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shor thair" },
};

console.log(cats.boris);

// what if I change id from type string to number or something else
// let's ask it to take type of id itself
// const mapById = (users: MyUser2[]): Record<string, MyUser2> => {
const mapById = (users: MyUser2[]): Record<MyUser2["id"], MyUser2> => {
  // whatever property we're going to use as key must not be optional (bcoz now c.id was string | undefined but we wanted it as string only)
  return users.reduce((a, c) => ({ ...a, [c.id]: c }), {});
};

console.log(
  mapById([
    {
      id: "foo",
      name: "foo",
    },
    {
      id: "baz",
      name: "Baz",
    },
  ])
);

// ///////////////////// 5. Omit //////////////////////

// what if in the result of mapById i don't want id to be shown again

// what if I change id from type string to number or something else
// let's ask it to take type of id itself
// const mapById2 = (users: MyUser2[]): Record<string, Omit<MyUser2, "id">> => {
const mapById2 = (users: MyUser2[]): Record<MyUser2["id"], Omit<MyUser2, "id">> => {
  return users.reduce((a, c) => {
    const { id, ...others } = c;
    return { ...a, [id]: others };
  }, {});
};
let q11 = mapById2([
  {
    id: "foo",
    name: "foo",
  },
  {
    id: "baz",
    name: "Baz",
  },
]);

console.log(
  mapById2([
    {
      id: "foo",
      name: "foo",
    },
    {
      id: "baz",
      name: "Baz",
    },
  ])
); // we're still getting id... we need to remove this
