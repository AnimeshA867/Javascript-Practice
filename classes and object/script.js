// class form{
//     submit(){
//         alert(this.name+": Form submitted");
//     }
//     cancel(){
//         alert(this.name+ ": Form cancelled");
//     }

//     fill(givenName){
//         this.name=givenName;
//     }

// }

// let har= new form();
// har.fill("Daemon");

// let rohan = new form();
// rohan.fill("Rhaerya")

// har.submit();
// rohan.cancel();

//Class is like a template for an object.
//Where as object is a new class created by using the template provided by the class.

//Let's create a class :

class card {
    hello(){
        console.log("Hello "+ this.name);
    }
    goodMorning(){
        console.log("Good Morning, "+this.name);
    }

    goodEvening(){
        console.log("Good Evening,"+this.name);
    }
    name(naMe){
        this.name=naMe;
    }
}

let greet = new card();

greet.name("Animesh");
greet.hello();
greet.goodMorning();
greet.goodEvening();