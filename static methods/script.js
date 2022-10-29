
//Static method is used to associate a method to a class. 
//To call a static method, the method must be called with the class name. 
//The static method cannot be called with the use of newly defined class.
class Animal{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log(`${Animal.capitalize(this.name)} is walking.`);
    }
    static  capitalize(name){
        return name.charAt(0).toUpperCase()  + name.slice(1);
    }
     capitalize1(){
        console.log(this.name.charAt(0).toUpperCase()  + this.name.slice(1));
    }

}

let a =new Animal("tiger");
a.walk();
a.capitalize1();
