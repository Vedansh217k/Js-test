const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetigs = "Hello world"
for (const greet of greetigs) {
    console.log(`each char is ${greet}`)
}
// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "Unied States Of America")
map.set('FRA', "France")
console.log(map);
 for(const [key, value] of map){
    console.log(key, "=>" , value);
 }
 const myObject = {
    game1:'LUDO',
    game2:'PUBG'
 }
//  for(const [key,value]of myObject) {
//     console.log(key, "=>" , value);
//  }
