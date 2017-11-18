/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = oldID + 1000000000
let ageIsValid = Number.isInteger(currentAge)
let randomNumber = Math.floor(Math.random() * 20);
let randomInteger = Math.floor(randomNumber)
let randomUserID = randomInteger + 1000000000

// Math.floor(Math.random() * 10) + 1;


// Finally, we need a way to randomly select a user by their ID number. As you know, we have millions of active users, but since this is your first assignment we'll limit the testing pool to twenty users with IDs between 1000000001 and 1000000020. You're tasked with creating three variables:
// randomNumber, which should contain a randomly-generated number between 0 (inclusive) and 20 (exclusive).
// randomInteger, which should take the value in randomNumber and round it down to the nearest integer.
// randomUserID, which should convert randomInteger into a valid ID number — an integer between 1000000001 and 1000000020.
