///////////////////////////////////////// discriminated union //////////////////////////

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "reactangle";
  length: number;
  width: number;
}

type Shape = Circle | Square;
// adding Rectangle later
type Shape2 = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // else if(shape.kind === "square")
  return shape.side ** 2;
}

function getArea(shape: Shape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side ** 2;

    case "reactangle":
      return shape.length * shape.width;

    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
