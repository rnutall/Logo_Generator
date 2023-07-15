//defines the shape class. with a constructor calling back color and sets the value of color.
class Shape{
    constructor(){
        this.color = ""
    }
    setColor(color){
        this.color = (color);
    }
}
    //defines the  class the calls the shape and renders the svg shape, with position, size, and fill color
class Square extends Shape{

    render(){
         return '<square cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>';
        }
}

class Triangle extends Shape{
   
    render(){
        return '<rect cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>';
    }
}

class Circle extends Shape{
    
    render(){
        return '<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>';
    }
}



module.exports = {Circle, Square, Triangle};
    


