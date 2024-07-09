// array example
const array1 = ["hello", 2, "the","world"]
console.log(array1)
console.log(typeof(array1))

// accesing array elements
const my_array = ['h','e','l','l','o']
console.log(my_array[0])
console.log(my_array[1])
my_array[2] = "k"
console.log(my_array[2])
console.log(my_array[3])
console.log(my_array[4])

// mix array
const mix_array = [
                    "dewang", 
                    20, 
                {   name: "rohan",
                    age:"20"
                }
]
console.log(mix_array)
console.log(typeof(mix_array))

// ---------------------Array Methods-----------------------
// 1.indexof()
const array2 = [2,1,4,3,8,6,7,5]
console.log(array2.indexOf(6))
// 2.unshift()
array2.unshift(10)
console.log(array2)

// 3.push

array2.push("ram")
console.log(array2)

//4.pop()
array2.pop()
console.log(array2)

// 5.shift
array2.shift()
console.log(array2)
// 6.sort()

array2.sort()
console.log(array2)

// 7.slice()

const sub_array = array2.slice(2,4)
console.log(sub_array)

// 8.includes()

const fruits = ["mango","apple","orange"]
console.log(fruits.includes("mango"))