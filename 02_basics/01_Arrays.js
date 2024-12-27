//Arrays

const myarr = [1, 2, 3, 4, 5, 6, true, "John"]
const myHeros = ["Shaktiman","Ironman","Spiderman"]

const myarr2 = new Array(1,2,3,4,5,6,"John")
console.log(myarr2[1]);


// Arrays methods

// myarr.push(7)
// myarr.push(8)
// myarr.pop()

// console.log(myarr.includes(7)); 
// console.log(myarr.indexOf(2)); 


//slice, splice 
console.log("A ", myarr);
const myn1 = myarr.slice(1,3);

console.log(myn1);
console.log("B ", myarr);
const myn2 = myarr.splice(1,3);
console.log("c ", myarr);
console.log(myn2);

