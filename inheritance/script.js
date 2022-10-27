//Inheritance is the property of the oops where the property of a class is inherited by other function.

//Here we created a class monkey.
class monkey{
    food(){
        console.log("It eats food.");
    }

    legs(){
        console.log("It has two legs.");
    }

    hands(){
        console.log("It has two hands.");
    }

    fur(){
        console.log("It's body is covered with fur.")
    }
}

//Now with the help of inheritance, we are inheriting the methods of monkey in human.
class human extends monkey {
    speak(){
        console.log("It can speak.");
    }
}

let animesh = new human();

animesh.food();
animesh.legs();
animesh.hands();
animesh.speak();