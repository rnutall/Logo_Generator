function genLogo(answers);
let inquirer = require('inquirer');
let fetch = require("node-fetch");

//prompt for text with 3 chars.
const questions = [{
message: "what characters would you like for your logo?"
 chars: ("Min 3 Characters."),
 input: (""),
 type: "input",

 //prompt for text color, then i can enter coloer keyword or [hexadecimal]
    message: "What color would you like your text?"
 color:  (""),
    input: (""),
    type: "input",

    // promt for shape, presented with a list circle, triangle, square
     message: "choose a shape Circle, Triangle, Square"
     shapes: ("Circle, Triangle, Square"),
     input: (""),
    type: "input",

    //promt for shape color, thern enter color keyword or [hexadecimal]
    message: "What color would you like your shape?"
}];





function writeToFile(ReadMe_server, data,) {}
function writeToFile(ReadMe_server, data,) {
 fs.writeFile('data.csv', 'utf8', (error, data) => {

    if (err) {
        console.log("File writing error", err);
        }
        else {
            console.log("Successful file");
        }
        console.log(genlogo);

    });
}  

//command line app that acceps usser input.




//when all prompts are entered, then SVG IS CREATED 'logoSVG'
//when the logo.SVG is opened in browser, then im shown a 300x200 px image that matches criteria entered      

// test 

//const shape = new Triangle();
//shape.setColor("blue");
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>{})
}

       // console.log(answers)

       init();