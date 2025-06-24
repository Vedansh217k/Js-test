const myName = "Sam      "
const channel = "hellosam"
//console.log(myName.truelength);


let myHeros = ["spiderman", "ironman"]
let heroPower = {
    spiderman: "webs",
    iornman: "boost",
    getPiderPower: function()
{
    console.log(`Spidy power is ${this.spiderman}`);
}
}

Object.prototype.sam = function(){
    console.log(`sam is present in all objects`);
}
Array.prototype.heysam = function(){
    console.log(`sam says hello`);
}
//heroPower.sam()
// myHeros.sam()
// myHeros.heysam()
//heroPower.heysam()




//INHERITANCE
const User = {
    name: 'Sam',
    email: 'sam@gmail.com'

}
const Teacher = {
    makevedios: true
}
const TeachingSupport = {
    isAvailable : true
}
const TASupprt = {
    makeAssignments: 'JS assignments',
    fullTime: true,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = User
//Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "david"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`)
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"   sam   ".trueLength()
"David".trueLength()