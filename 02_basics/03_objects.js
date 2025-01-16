//singleton
// Object.create
//object literals
const mysym = Symbol("key1")
const JsUser = {
    name: "John",
    [mysym]: "mykey1",
    age: 21,
    location: "paris",
    email:"john@google.com",
    isLoggedIn: false,
    lastloginDays: ["Monday" , "Saturday"]
}
console.log(JsUser.email)

console.log(JsUser["email"])
console.log(JsUser[mysym])

JsUser.email = "john@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "john@wwe.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("JS User hi");
}

console.log(JsUser.greeting)