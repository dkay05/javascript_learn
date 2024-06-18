// Loops
// 1. for loop
for(let i=0; i<10;i++)
    {
        console.log("D kay bby")
    }
// 2.for in
const obj ={
    name: "dewang",
    company: "itdelta"
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}
// for of
for (const c of "dewang") {
        console.log(c)    
}
// whilw loop
let a = 1;
while(a<=10){
    console.log(2*a)
    a++
}
// do while loop
let b;
b = prompt("enter number")
do{
    console.log(2*b)
    b++ 
}
while(b<=10)
