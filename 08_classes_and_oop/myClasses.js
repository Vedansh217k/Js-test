// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
    // changeuserame(){
    //     return `${this.username.toUpperCase()}`
    // }


// const James = new User("James", 'james@gmail.com', "1234")
// console.log(James.encryptPassword());
// console.log(James.changeuserame());
// Behind the scene
function User(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeuserame = function(){
        return `${this.username.toUpperCase()}`;
}

const sam = new User('sam', 'sam@gami.com', '123')
console.log(sam.encryptPassword());
console.log(sam.changeuserame());