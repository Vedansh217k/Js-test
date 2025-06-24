function multiplyBy5(num){
    this.num = num
    return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
   this.username = username
   this.score = score
}
createUser.prototype.inrement = function(){
    this.score++
}
createUser.prototype.printME = function(){
    console.log(`price is ${this.score}`);
}
const name = new createUser("James", 25)
const login = new createUser("JamesID", 305)
name.printME()