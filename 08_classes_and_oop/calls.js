function SetUsername(username){
    //compledx DB calls
    this.username = username
    console.log("called");
}
function createUser(username, email, passwaord){
    SetUsername(this.username)
    this.email = email
    this.passwaord = passwaord
}
const James = new createUser("James", 'James@gmailcom', '123')
console.log(James);