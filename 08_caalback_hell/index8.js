// asyns function / setTimeout function
// setTimeout(function,milisecond)
/*console.log("Hello")

setTimeout(function(){
    console.log("this is setTimeout function"), 4000})

console.log("world")*/





function cheesfun(callback) {
    setTimeout(() => {
        chees = "🧀"
        console.log("want the chees")
        callback(chees)        
    }, 2000);    
}
function douwfun(chees,callback) {
    setTimeout(() => {
        douw = chees + "🍪"
        console.log("want the douw")
        callback(douw)        
    }, 2000);    
}
function pizzafun(douw, callback) {
    setTimeout(() => {
        pizza = douw + "🍕"
        console.log("want the pizza")
        callback(pizza)        
    }, 2000);    
}
cheesfun((chees) => {
    douwfun(chees,(douw) => {
        pizzafun(douw,(pizza) => {
            console.log("get the pizza",pizza)
        })            
    })
})