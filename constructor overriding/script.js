//Here lets create a new class. 

class student{
    constructor(){
        //This is the constructor of the parent class.
        //Whenever we are calling the child class, the constructor of the parent class needs to be called compulsorily, otherwise the code will the throw a error.
        console.log("This is construtor of student class.");
    }
    requestLeaves(leaves){
        console.log(`${leaves} numbers of leaves autoapproved.`);
    }

    requestNotes(){
        console.log(`Notes available at the college website.`)
    }
}

class teacher extends student{//Here we inherit the property of the student class in teacher class.
    constructor(){
        super();//Here with the use of super keyword, we are calling the constructor of the parent class.
        console.log("This is the constructor for the teacher class.");//Along with the code in constructor of the parents class, this one will also run.
    }
    requestNotes(){//Here we overwrite the methods in the parents class.
        super.requestNotes();//Super keyword is used to call the method in the parents class.
        console.log("If you found some mistakes or some inconvinience receiving the notes, kindly inform the administration.");
    }
    requestLeaves(leaves){
        console.log("Kindly send the mail to the college administration.");
    }
}

let daemon = new teacher();
daemon.requestNotes();

let rhaenarya = new student();
rhaenarya.requestNotes();

//Here for Daemon and Rhaenarya, we get different output as the methods has been overwritten for teacher class.