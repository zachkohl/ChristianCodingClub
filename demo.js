//welcome to Javascript, it is completely different


function doStuff(){
  
   let x = document.getElementById('output');

   x.innerHTML = '<i>this could be anything</i>';


   //at this point we need to talk about let and const. 
   //we also need to discuss . notation. Will make more sense as we discuss objects. 
}

function goBack(){
  
    let x = document.getElementById('output');
 
    x.innerHTML = 'we can change this';
 
 }





 //Lets make objects!

 //Perception is reality. This is a rectangle because you can see it has 
 //rectangle properties. All objects in the real world have properties. 
 //Object oriented programing is based on this conceptual framework.
 //except that computer objects are also alive, which means you can tell them
 //to do things, this is what a method is. 

 //It is best to think of ways this could be used for game development, and then
 //work backwards towards more useful programs. 

 //objects are how modern memory is organized. Much easier when big than the linear 
 //sequence of commands found in assembly programing. 

 //Fun fact, everything in javascript is an object.

 //Everything in Python is an object.

 //feel empowered yet?


 //This is a class, read about syntax here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

 //Platonic form
 class Rectangle {
    constructor(height, width) {
      this.height = height; //this is a special word that means whatever object we end up with
      this.width = width;
    }
    // Getter (just do it their way, seems to work better)
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  //Time to make a real object (instantation of platonic form into reality)
  const square = new Rectangle(10, 10); //this is a const, see how it is used?
  

  //access the real object
  console.log(square.area); // 100


  //lets do a user input



  function calculateArea(){
  

    let Y = document.getElementById('height').value
    let X= document.getElementById('width').value
  
    let square = new Rectangle(Y, X); 

    let variableName = document.getElementById('area');

    let myString = square.area;
    variableName.innerHTML = myString;

 }

 console.log();