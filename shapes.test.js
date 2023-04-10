const {Circle, Triangle, Square} = require(".shapes.js");

// Test of circle
describe ("Circle", () => {
    Test("Cirle rendered correctly", () => {
        const shape = new Circle;
        var color = "marroon";
        shape.setColor(color);
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />');

    });
});
// test for Triangle
describe ("Triangle", () => {
    Test("Triangle rendered correctly", () => {
        const shape = new Triangle;
        var color = "marroon";
        shape.setColor(color);
        expect(shape.render()).toEqual('<rect cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />');

    });
});
// test for square
describe ("Square", () => {
    Test("Square rendered correctly", () => {
        const shape = new Square;
        var color = "marroon";
        shape.setColor(color);
        expect(shape.render()).toEqual('<polygon cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />');

    });
});