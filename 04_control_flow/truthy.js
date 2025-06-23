const userEmail = "h2itesh.ai"
if(userEmail) {
    console.log("Got user Email");}
else{
    console.log("Don't have user email");
}

//falsy values


// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
//truthy values
//"0", 'false'," ", [], {}, function(){}

// if(userEmail.length==0){
//     console.log("Array is empty")
// }


const emptyobj = {}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
}

// Nullish Caolescing Operator (??) : null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10

val1 = undefined ?? 17
val1 = null ?? 10 ?? 10
console.log(val1)


//Ternarry Operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




