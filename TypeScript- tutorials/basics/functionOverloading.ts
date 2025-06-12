interface Coordinate {
  x: number;
  y: number;
}

function passCoordinatesFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}

function passCoordinatesFromNumber(x: number, y: number): Coordinate {
  return { x, y };
}

// fucntion overloading
function passCoordinate(obj: Coordinate): Coordinate;
function passCoordinate(str: string): Coordinate;
function passCoordinate(x: number, y: number): Coordinate;
function passCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coords: Coordinate = { x: 0, y: 0 };
  if (typeof arg1 === "object") {
    // coords = { ...arg1 }; // Type '{}' is missing the following properties from type 'Coordinate': x, y
    coords = { ...(arg1 as Coordinate) };
  } else if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coords[key as "x" | "y"] = parseInt(value, 10);
    });
  } else {
    coords = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coords;
}

console.log(passCoordinate(10, 20));
console.log(passCoordinate({ x: 10, y: 20 }));
console.log(passCoordinate("x:10,y:20"));

export {};
