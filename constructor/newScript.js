class form{
    constructor(name,trainNo){
        this.name=name;
        this.trainNo=trainNo;
    }
    preview(){
        console.log(`${this.name}: Train number: ${this.trainNo}`)
    }
    submit(){
        console.log(this.name+": Form submitted for train number "+this.trainNo);
    }
    cancel(){
        console.log(this.name+ ": Form cancelled for train number "+this.trainNo);
        this.trainNo=0;
    }

    // fill(givenName){
    //     this.name=givenName;
    // }

}

let har= new form("Daemon",1500);

har.preview();
har.submit();
har.cancel();
har.preview();