const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB callss , cryptography, network call
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})
promiseOne.then(function(){

    console.log("Promise consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2.');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sam", email:"sam@gmail"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Sam",password:'1234'})
        } else{
            reject('ERROR: Something went wrong.')
        }  
    },1000)
})
const username = promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then(() => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolevd or rejected"))

const promiseFive = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:'1234'})
        } else{
            reject('ERROR: Something went wrong.')
        }  
    },1000)
});
async function consumePromiseFive(){
   const response = await promiseFive
   console.log(response);
}
consumePromiseFive()

