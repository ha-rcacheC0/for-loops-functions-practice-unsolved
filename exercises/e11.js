// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let withdrawalSums = [];
  
  for (let i = 0; i < array.length; i++) {
    let withdrawalTotal = 0; // the key is putting 0 here and not above so the function resets to 0 every new account
    let withdrawals = array[i].withdrawals || []; // this ensures the second step of the instructions so if withdrawals don't exist in an account we return 0 hence necessary to declare withdrawalTotal

    for (let x = 0; x < withdrawals.length; x++) { // this loops through withdrawals
      withdrawalTotal += withdrawals[x]; // notice grabbing each withdrawal at every index and adding it to the withdrawalTotal each time
    }
    withdrawalSums.push(withdrawalTotal); // once the loop above is done running and we have a total then can we push the total value back into the array
  }
  return withdrawalSums; // now returning a single value. 0 immediately if it does not exist or the total then push.
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function