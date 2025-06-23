const nums = [1,2,3,4]
const myTotal = nums.reduce(function (acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)
console.log(myTotal)



const numstotal = nums.reduce( (acc, curr) => acc+curr, 0)

console.log(numstotal);

const shoppingCart = [
    {
        itemnmae: "js course",
        price: 1999
    },
    {
        itemnmae: "python course",
        price: 2999
    },
    {
        itemnmae: "java course",
        price: 2999
    },
    {
        itemnmae: "cpp course",
        price: 1999
    },
]
const priceTopay= shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceTopay);