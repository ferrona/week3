// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Simulate the rolling of two six-sided dice

// Write the recipe (algorithm) in the comments. Write the code.

// Store the value of the first die in memory. Write it out to the console in a human-readable format.
let first = getRandomInt(6)
console.log(`The first die is ${first}`)

// Store the value of the second die in memory. Write it out to the console in a human-readable format.
let second = getRandomInt(6)
console.log(`The second die is ${second}`)

// Store the value of the total of the two dice in memory. Write it out to the console in a human-readable format.
let total = first + second
console.log(`The total is ${total}`)