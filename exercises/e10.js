// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let letterInName = [];

  for (let i = 0; i < array.length; i++) { // loops through the array of objects
    let name = array[i].name; // scope and context within JS doesn't interfere with the name property within the object

    for (let x = 0; x < name.length; x++) { // loops through each character of the object's name from the variable we declared above
      if (name[x].toLowerCase() === letter.toLowerCase()) {
        letterInName.push(name); // pushes the name value of the object ['Kevin', ...] 
        break; // Stops checking further letters in the name once a match is found
      }
    }
  }
  return letterInName; // returns an array containing the names after matching the letters
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function