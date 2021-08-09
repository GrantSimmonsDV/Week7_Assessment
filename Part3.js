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


 //Function, Create holding array, loop through and see if 

 let addToZero(arr) {

    let store = {}
    let answer = []
    
    for (let i = 0; i < arr.length; i++){
      if (store[arr[i]]){
        answer.push()
      }
    }
    
    }
    
    // For example:
    
    // addToZero([]);
    // // -> False
    
    // addToZero([1]);
    // // -> False
    
    // addToZero([1, 2, 3], 0);
    // // -> False
    
    // addToZero([1, 2, 3, -2]);
    // // -> True

    //--------------

    // function addToZero(arr){
    
    // let solution = []
    
    // for (let i = 0; i < arr.length; i++){
    //   for(let j = i + 1; arr.length; i++){
    //     if (arr[i] + arr[j] === 0){
    //       solution.push(arr[i])
    //       solution.push(arr[j])
    //       console.log(solution)
    //       return true
    //     } else {
         
    //     }
    //   }
    // }
    // return false
    // }
