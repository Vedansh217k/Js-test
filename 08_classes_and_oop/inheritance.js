class User{
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email =email
        this.password = password 
    }

    addcourses(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const sam = new Teacher("sam", "sam@gmail.com", '123')
sam.addcourses()
const David = new User("David")
David.logMe()

console.log(sam == David )