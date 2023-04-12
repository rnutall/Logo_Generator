const {Circle, Triangle, Square} = require("./shapes.test.js");

// Test of circle
describe ("Circle", () => {
    test("Cirle rendered correctly", () => {
        const shape = "newCircle";
        var color = "marroon";
        shape.setColor(color);
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />');

    });
});
// test for Triangle
describe ("Triangle", () => {
    test("Triangle rendered correctly", () => {
        const shape = "newTriangle";
        var color = "marroon";
        shape.setColor(color);
        expect(shape.render()).toEqual('<rect cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />');

    });
});
// test for square
describe ("Square", () => {
    test("Square rendered correctly", () => {
        const shape = "newSquare";
        var color = "marroon";
        shape.setColor(color);
        expect(shape.render()).toEqual('<polygon cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />');

    });
});