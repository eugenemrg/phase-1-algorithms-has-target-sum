function hasTargetSum(array, target) {
  // Write your algorithm here

  let hasTargetSum = false // O(1)

  array.forEach((current, current_index) => {
    // O(n)

    let testArray = array.map((number, index) => (current_index === index) ? null : (current + number)) // O(n*n) - O(n*2)

    if (testArray.includes(target)) {
      // O(1)

      hasTargetSum = true // O(1)
      return 
    }

  });

  return hasTargetSum
}

/* 
  Write the Big O time complexity of your function here

  O = 1 + n + n*2 + 1 + 1
  O = n*2 + n + 3 
  O = n*2

  Big O time complexity is O(n*2)
*/

/* 
  Add your pseudocode here
  Done on paper
*/

/*
  Add written explanation of your solution here
  Get the array
  For each array entry map a function with the sum of that entry and all other entries
  Check if array has the target after mapping
  If found return true else continue
  Finally return false if the target is never found
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
