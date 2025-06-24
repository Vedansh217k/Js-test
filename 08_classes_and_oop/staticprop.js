class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    createId(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `1234`
    }
}
const sam = new User('Sam')
console.log(sam.createId())


class Teacher extends User {
    constructor(username, email)
{
    super(username)
    this.email = email
}
}


const iphone = new Teacher("iphone", 'iphone@gmail.com')

console.log(iphone.createId());