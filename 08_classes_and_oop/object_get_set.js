const User = {
    _email: 'sam@gmail.com',
    _password: ' 1234',
    

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){

        this.email = value

    }

}
const sam = Object.create(User)
console.log(sam.email);