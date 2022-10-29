class Animal{
    constructor(name){
        this._name=name;
    }
    fly(){
        console.log("Huiiii");
    }

    //get operator is used to get certain property of an class.
    get name(){
        return this._name;
    }

    //set operator is used to set certain property of an class.
    set name(newName){
        this._name=newName;
    }
}

let a= new Animal("Huiiiiii");
a.fly();
console.log(a.name);
let b;

//instanceof operator is used to check whether an object belongs to a certain class.
//This is used as following:

console.log(a instanceof Animal);
console.log(b instanceof Animal);

//instanceof returns true even if another class inherit the original class.