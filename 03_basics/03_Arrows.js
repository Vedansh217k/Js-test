// function chai(){
//     let username = "hitesh"
//     console.log(this.username);

// }
// chai()
// const chai = function(){
//     let username = "hitesh"

//     console.log(this.username)
// }
const chai  = () => {
    let username = "hiesh"
    console.log(this);
}
chai()
// const addtwo = (num1 , num2) => {
//     return num1 + num2

const addtwo = (num1 , num2) => (num1 + num2)
console.log(addtwo(3,7))