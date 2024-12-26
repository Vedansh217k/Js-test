// Primitive

// 7 types : String, Number, Boolean, Null, Undefined,Symbol, BigInt
const score = 100

const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// Reference (Non Primitive)
// Array, Objects, Functions
const bigNumber = 1234567890n

const heros = ["Shaktiman", "Naraj", "Doga"];
let myObj = {
    name: "John",
    age: 22,    
}

const myFunction = Function()
    console.log("hi");    

console.log(typeof bigNumber);