
//Javascript has three types of scopes:
// 1) Block Scope - let;
// 2) Function Scope - let;
// 3) Global Scope - var;
{
    let a= 10;
}
console.log(a);//This program won't run as the let is local varaible. It's scope is local.

{
    var b=10;
}
console.log(b);//Var is a global varaible. When a varialbe is declared using keyword var, the availability of the variable is global.

var b=12;
console.log(b);
//But one thing about var is, the varaible with same name can be declared again. 