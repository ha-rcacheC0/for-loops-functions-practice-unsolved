
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let balanceDifference = [];

  for (let i = 0; i < array.length; i++) {
    let account = array[i];
    let depositsArray = account.deposits || [];
    let withdrawalsArray = account.withdrawals || [];

    let depositsTotal = 0;
    for (let x = 0; x < depositsArray.length; x++) {
      let deposit = depositsArray[x];
      depositsTotal += deposit;
    }
    
    let withdrawalsTotal = 0;
    for (let n = 0; n < withdrawalsArray.length; n++) {
      let withdrawal = withdrawalsArray[n];
      withdrawalsTotal += withdrawal;
    }

    if (depositsTotal - withdrawalsTotal !== account.balance) {
      balanceDifference.push(account);
    }
  }

  return balanceDifference;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
