const name = "john"
const repocount =50

console.log(name + repocount + " Value");
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(3));
console.log(name.indexOf('h'));

const newString = name.substring(0, 3)
console.log(newString);

const anotherString = name.slice(0,2)
console.log(anotherString);

const newStrinOne = "     John      "
console.log(newStrinOne);
console.log(newStrinOne.trim());

const url = "https:googlehi.com"
console.log(url.replace('hi','hello'));

console.log(url.includes('google'));

console.log(url.split('o'));