//UNIQUE CHARACTERS

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

//create a variable to hold evaluated chars while looping

//break string up into seperate letter in an array

//loop over the array to detirmine if the char being evaluated is already stored in the holding array already

//
function hasUniqueChars(str) {
  const holdingArr = [];

  const charArr = str.toLowerCase().split("");
  // console.log(charArr)
  for (let i = 0; i < charArr.length; i++) {
    if (holdingArr.includes(charArr[i])) {
      // console.log(charArr[i], holdingArr)
      return false;
    } else {
      holdingArr.push(charArr[i]);
    }
  }
  return true;
}

// For example:

// hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

//SUM ZERO

// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True
