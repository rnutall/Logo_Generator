const inquirer = require("inquirer");
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes.js");

class SVG {
constructor(){
    this.textElement = ''
    this.shapeElement = ''
}
render(){
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
}
setTextElement(text,color){
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
}
setShapeElement(shape){
    this.shapeElement = shape.render()

}

}

// Defines array of 'questions' using the inquirer library
//prompt for slogan 
const questions = [
    {
    name: "text",
type: "input",
message: "TEXT: Enter up to (3) characters: ",

 //prompt for text color, then i can enter color keyword or [hexadecimal]
name: "text_color",
type: "input",
message: "TEXT COLOR: Enter a color for your logo",

name: "shape",
type: "input",
message: "SHAPE COLOR: Enter a color for your logo",

 // prompt for shape, presented with a list circle, triangle, square
     name: "shape",
     message: "Choose a shape Circle, Triangle, Square",
     type: "list",
     selection: ["Circle, Triangle, Square"],

    
}];

// function to write to file and prompts.
function writeToFile(fileName, data) {
 fs.writeToFile(fileName, data, function (error) 
  {

    if (error) {
        console.log("error");
    }
    console.log('Congratulations, you have generated a logo.svg! ');
    });
}  
//when all prompts are entered, then SVG IS CREATED 'logoSVG'

// prompt loop to initialize the questions
async function promptLoop() {
    const and = await inquirer
.prompt(questions)
let enteredLength = answers.slogan.length 

if (enteredLength === 0 || enteredLength > 3 || enteredLength < 3)
{
    console.log('invalid input')
    return promptLoop()
};

    const answers = await inquirer.prompt(questions);
        
        console.log("Enter three characters");
        return;
    }
    user_text = answers.prompt(questions);
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
    newsvg.setText(moto, text_color);
    newsvg.setShape(shape);
    svgData = newsvg.render();
    //console.log(svgData);
    makeFile(svgData);
    ;
{
    var svg = new SVG();

    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();
    
    //print shape to log
    console.log("Display shape:\n\n" + svgString);
    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svg_file, svgString);
    }
    init();
    