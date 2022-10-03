// array methods
/// toString - doesn't specify separator && join - specifies separator(preferred when mapping)
const fruits = ['bananas', 'mangoes', 'avocadoes', 'jam fruit']

console.log(fruits.length)

console.log(fruits.toString())

console.log(fruits.join(", "))


// pop(remove last element/nondestrucive) && shift(remove first element/destructive)

// console.log(fruits.pop())

// console.log(fruits.shift())



// unshift(add as first element/nondestrucive) && push(add as last element)
console.log(fruits.unshift("blueberries"))

console.log(fruits.push("apples"))


console.log(fruits.indexOf('apples'))


// splice(add or remove elements from an array)
console.log(fruits.splice(2, 3, "Lemon", "Kiwi"))

console.log(fruits)


// slice(makes new array out of an existing one)
let newFruits = fruits.slice(1, 3)

console.log(newFruits)




