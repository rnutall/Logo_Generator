const { Circle, Triangle, Square } = require("./shapes");

// Test of circle
describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    var color = "";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      '<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>'
    );
  });
});
// test for Triangle
describe("Triangle", () => {
  test("Triangle rendered correctly", () => {
    const shape = new Triangle();
    var color = "";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      '<rect cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>'
    );
  });
});
// test for square
describe("Square", () => {
  test("Square rendered correctly", () => {
    const shape = new Square();
    var color = "";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      '<square cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>'
    );
  });
});
