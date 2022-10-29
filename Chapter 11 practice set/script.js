class complex{
    constructor(real,imag){
        this._real= real;
        this._imag=imag;
    }
    add(num){
        this._real+=num._real;
        this._imag+=num._imag;
    }

    get imag(){
        return this._imag;
    }
    set imag(newImag){
        this._imag= newImag;
    }
}

let num1=new complex(2,4);
let num2=new complex(4,4);
num1.imag=13;
num1.add(num2);

console.log(`${num1._real} + ${num1._imag}i`);

console.log(num1.imag);


// class human{
//     walk(){
//         console.log("Human is walking.");
//     }
//     talk(){
//         console.log("Human is talking.");
//     }
// }

// class student extends human{
//     walk(){
//         console.log("It seems the student hasn't done his homework yet. So the student is running to the school.");
//     }
// }

// let animesh = new student();

// animesh.walk();