// class form{
//     constructor(name){
//         // console.log("Constructor Called.....");
//         this.name=name;
//     }

//     submit(){
//         console.log(this.name+": Form submitted");
//     }
//     cancel(){
//         console.log(this.name+ ": Form cancelled");
//     }

//     // fill(givenName){
//     //     this.name=givenName;
//     // }

// }

// let har= new form("Daemon");
// // har.fill("Daemon");

// let rohan = new form("Rhaenarya");
// // rohan.fill("Rhaerya")

// har.submit();
// rohan.cancel();

//With the use of constructor, we can pass values directly into the class's template.

//here let's create a class.

class id{
    constructor(name,roll){
        this.name=name;
        this.number=roll;
    }
    pass(){
        console.log(`Student with the name ${this.name} and roll number ${this.number} has passed the exam.`)
    }
    fail(){
        console.log(`Student with the name ${this.name} and roll number ${this.number} has failed the exam.`)
    }
}

let animesh=new id("Animesh",12);//Here we do not need another method to pass the value into the class. We can pass the name "Animesh" directly into the class template.

let daemon=new id("Daemon",123);
//Same in this case.

animesh.pass();//Here when we are calling this function, the value of name and the roll number has already been passed.

daemon.fail();

//If the value is not passed, the value of this.name will be declared udeclared.