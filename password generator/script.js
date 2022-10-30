function containNumbers(str){
    return /[0-9]/.test(str);
}
class password{
    constructor(length){
        let pass="01234567890!@#$%^&*()~`_QWERTYUIOP{}|:?><LKMNJHBVGFCXDSZAqwertyuiop[];lkjmn,./hbgvfcdxsaz"
        let passWeak="qwertyuiopasdfghjklzxcvbnm";

        this._pass=pass;
        this._passWeak=passWeak;
        this.length=length;
    }
    static generateStrong(length,pass){
        let pw="";
        let ran;
        do{
            pw="";
            for(let i=0;i<length;i++){
                ran=Math.floor(Math.random()*(pass).length);
                pw+=pass.slice(ran,ran+1);
            }
        }while(!containNumbers(pw));
        return pw;
    }
    static generateWeak(length,passWeak){
        let pw="";
        let ran;
        for(let i=0;i<length;i++){
            ran=Math.floor(Math.random()*(passWeak).length);
            pw+=passWeak.slice(ran,ran+1);
        }
        return pw;
    }

    get weakPw(){
        let pw=password.generateWeak(this.length,this._passWeak);
        this._password=pw;
        return this._password;
    }
    get strongPw(){
        let pw=password.generateStrong(this.length,this._pass);
        this._password=pw;
        return this._password;
    }
}

let pass = new password(15);
// console.log(pass.weakPw);
// console.log(pass.strongPw);
let strongPass=document.getElementById("strong");
let weakPass =document.getElementById("weak");
strongPass.append(pass.strongPw);
weakPass.innerText=pass.weakPw;