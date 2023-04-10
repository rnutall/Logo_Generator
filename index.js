const inquirer = require("inquirer");
const fs = require('fs');
const {Circle, Square, Triangle}= require("./lib/shapes.js");
const SVG = require("./lib/svg.js");
let newssvg;
let svgData;
let sloagan;
let shape;
let shape_colornpm

//prompt for slogan 
const questions = [
    {
    name: "slogan",
message: "what is your business slogan?",
 type: "input",

 //prompt for text color, then i can enter color keyword or [hexadecimal]
name: "text_color",
meassage: "what color is your logo text?",
    type: "input",

 // promt for shape, presented with a list circle, triangle, square
     name: "shape",
     meassage: "Choose a shape Circle, Triangle, Square",
     type: "input",
     selection: ["Circle, Triangle, Square"],

    //promt for shape color, thern enter color keyword or [hexadecimal]
    name: "shape_color",
    message: "What color would you like your shape?",
    type: "input"
}];

// function to write to file and prompts.
function makeFile(data) {
 fs.writeFile("./deliverable/logo.svg", data, err => {

    if (err) {
        console.log("err");
    }
    });
}  
//when all prompts are entered, then SVG IS CREATED 'logoSVG'
inquirer
.prompt(questions)
.then(answers => {
    console.log(answers);

    if (answers.slogan.length > 0 && answers.slogan,length < 4){
        slogan = answers.slogan;
    }
    else{
        console.log("Enter three characters");
        return;
    }
    text_color = answers.text_color;
    switch(answers.shape){
        case "Square":
            shape = new Square;
            break;

            case "Triangle":
                shape = new "Triangle";
                break;
                
                case  "Circle":
                    shape = new Circle;
                    break;
    }
    shape.setColor(answers.color);
    newsvg = new SVG();
    newsvg.setText(slogan, text_color);
    newsvg.setShape(shape);
    svgData = newsvg.render();
    //console.log(svgData);
    makeFile(svgData);
    });

