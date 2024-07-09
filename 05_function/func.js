// functions
function myfun(name){
    console.log("my name is",name,"i am a good boy")
}

myfun("rohan")




// Return function
function sum(a,b){
    console.log("the no. is:",a,b)
    let c = a+b
    return c
}
let result = sum(20,10)
console.log("Result is:",result)





// funtion expretion
const plus = function(a,b,c=10){
    console.log("The number is:",a,b,c)
    let sum = a+b+c
    return sum
}
let fun = plus(10,10)
console.log("sum is:",fun)





// Arrow function
const cal = functionS(a,b)
{
    let c = a+b
    return c
}
let r = cal(10,10)
console.log("result",r)

// call back function

// function
function getfun(name, call){
    console.log("hi"+ " "+ name);
    call();
}
// call back
function callme(){
    console.log("i am call back function");
}
// passing function argument
getfun("Dewang",callme);