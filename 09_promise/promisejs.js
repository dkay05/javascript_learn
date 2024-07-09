// promise basic   
let ticket = new Promise(function(resolve, reject)
{
    const result = true
    if(result)
        resolve("wow")
    else
        reject("oh no")
})
ticket
    .then((data) =>{
        console.log(data,"congratulation")
    })
    .catch((data) =>{
        console.log(data,"sorry")
    })
    .finally((data) =>{
        console.log(data,"i am finally")
    })
    