// class employee{
//     login(){
//         console.log("Employee has logged in.")
//     }
//     logout(){
//         console.log("Employee has logged out.");
//     }
//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves}leaves`);
//     }
//     requestBonus(bonus){
//         console.log(`${bonus} granted`);
//     }

// }

// class programmer extends employee{
//     requestCoffee(x){
//         console.log(`Employee has requested ${x}numbers of coffees.`);
//     }
//     login(){
//         console.log(`Programmer has logged in.`);
//     }
//     logout(){
//         console.log(`Programmer has logged out.`);
//     }
//     requestBonus(bonus){
//         super.requestBonus(bonus+1000);
//         console.log("One thousand more granted.");
//     }
// }


// let emp = new employee();

// emp.login();
// emp.logout();

// let prog = new programmer();

// prog.login();
// prog.logout();

// prog.requestBonus(15000);


//Here lets create a new class. 

class student{
    requestLeaves(leaves){
        console.log(`${leaves} numbers of leaves autoapproved.`);
    }

    requestNotes(){
        console.log(`Notes available at the college website.`)
    }
}

class teacher extends student{//Here we inherit the property of the student class in teacher class.
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