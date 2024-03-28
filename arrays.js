// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
const getNthCharacterInArray = (a, n) => {
    return a[n-1];
  };

  const result = getNthCharacterInArray([1,2,3,4,5],3);
    console.log(result);

    const result1 = getNthCharacterInArray([10, 9, 8, 7, 6],5);
    console.log(result1);

    const result2 = getNthCharacterInArray([7, 2, 1, 6, 3],1);
    console.log(result2);
  
  /*
  Test cases:
  myFunction([1,2,3,4,5],3) Expected 3
  myFunction([10,9,8,7,6],5) Expected 6
  myFunction([7,2,1,6,3],1) Expected 7
  */
  
  // ========================================
  
  // Write a function that takes an array (a) as argument
  // Remove the first 3 elements of 'a'
  // Return the result
  // Tip: use the array prototype function slice()
  const removeFirstThreeElements = (a) => {
    return a.slice(3);
  };

  const result3 = removeFirstThreeElements([1,2,3,4]);
  console.log(result3);

  const result4 = removeFirstThreeElements([5,4,3,2,1,0]);
  console.log(result4);

  const result5 = removeFirstThreeElements([99,1,1]);
  console.log(result5);


  
  /*
  Test cases:
  myFunction([1,2,3,4]) Expected [4]
  myFunction([5,4,3,2,1,0]) Expected [2,1,0]
  myFunction([99,1,1]) Expected []
  */
  
  // ========================================
  
  // Write a function that takes an array (a) and a number (n) as arguments
  // It should return the last n elements of a
  // Tip: use the array prototype function slice()
  const removeLastNElements = (a, n) => {
    return a.slice(-n);
  };

  const result6 = removeLastNElements([1,2,3,4,5],2);
  console.log(result6);

  const result7 = removeLastNElements([1,2,3],6);
  console.log(result7);

  const result8 = removeLastNElements([1,2,3,4,5,6,7,8],3);
  console.log(result8);
  
  /*
  Test cases:
  myFunction([1, 2, 3, 4, 5], 2) Expected [ 4, 5 ]
  myFunction([1, 2, 3], 6) Expected [ 1, 2, 3 ]
  myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3) Expected [ 6, 7, 8 ]
  */
  
  // ========================================
  // Write a function that takes an array (a) as argument
  // Return the number of elements in a
  // Tip: How do you find the length of an array?
  const countNumberOfElements = (a) => {
    return a.length;
  };

  const result9 = countNumberOfElements([1,2,2,4]);
  console.log(result9);

  const result10 = countNumberOfElements([9,9,9]);
  console.log(result10);

  const result11 = countNumberOfElements([4,3,2,1,0]);
  console.log(result11);

  /*
  Test cases: 
  myFunction([1,2,2,4]) Expected 4
  myFunction([9,9,9]) Expected 3
  myFunction([4,3,2,1,0]) Expected 5
  */
  
  // ========================================
  
  // Write a function that takes an array of numbers as argument
  // Return the number of negative values in the array
  // Tip: There are multiple ways to solve this e.g.
  // - Use .filter() to filter only negative numbers, and count them
  // - Use .forEach() to iterate through all numbers and count negatives
  const countNumberOfNegativeValues = (a) => {
    let count = 0;
    a.forEach((num) => {
      if (num < 0) {
        count++;
      }
    });
    return count;
  };

  const result12 = countNumberOfNegativeValues([1,-2,2,-4]);
  console.log(result12);

  const result13 = countNumberOfNegativeValues([0,9,1]);
  console.log(result13);

  const result14 = countNumberOfNegativeValues([4,-3,2,1,0]);
  console.log(result14);
  
  /*
  Test cases:
  myFunction([1,-2,2,-4]) Expected 2
  myFunction([0,9,1]) Expected 0
  myFunction([4,-3,2,1,0]) Expected 1
  */
  
  // ========================================
  
  // Write a function that takes an array of numbers as argument
  // It should return the sum of the numbers
  // Tip: forEach, c-style loop (or even .reduce() for the brave)
  const calcSumOfArrayOfNumbers = (a) => {
    return a.reduce((acc, num) => acc + num, 0);
  };

  const result15 = calcSumOfArrayOfNumbers([10,100,40]);
  console.log(result15);

  const result16 = calcSumOfArrayOfNumbers([10,100,1000,1]);
  console.log(result16);

  const result17 = calcSumOfArrayOfNumbers([-50,0,50,200]);
  console.log(result17);
  
  /*
  Test cases:
  myFunction([10,100,40]) Expected 150
  myFunction([10,100,1000,1]) Expected 1111
  myFunction([-50,0,50,200]) Expected 200
  */
  
  // ========================================
  // Write a function that takes an array of numbers as argument
  // It should return the average of the numbers
  // Tip: forEach, c-style loop (or even .reduce() for the brave)
  // to get the sum, then divide by number of elements in array
  const calcAvgOfArrayOfNumbers = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0) / arr.length;
  };

  const result18 = calcAvgOfArrayOfNumbers([10,100,40]);
  console.log(result18);

  const result19 = calcAvgOfArrayOfNumbers([10,100,1000]);
  console.log(result19);

  const result20 = calcAvgOfArrayOfNumbers([-50,0,50,200]);
  console.log(result20);

  
  /*
  Test cases:
  myFunction([10,100,40]) Expected 50
  myFunction([10,100,1000]) Expected 370
  myFunction([-50,0,50,200]) Expected 50
  */
  
  // ========================================
  // Write a function that takes an array of strings as argument
  // Return the longest string
  // Tip: It's possible to get length of string with .length
  // E.g. 'Gunnsteinn'.length = 10
  const getLongestStringFromArray = (arr) => {
    return arr.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    });
  };

  const result21 = getLongestStringFromArray(['help', 'me']);
  console.log(result21);

  const result22 = getLongestStringFromArray(['I', 'need', 'candy']);
  console.log(result22);
  
  /*
  Test cases:
  myFunction(['help', 'me']) Expected 'help'
  myFunction(['I', 'need', 'candy']) Expected 'candy'
  */
  
  // ========================================
  // Write a function that takes an array as argument
  // It should return true if all elements in the array are equal
  // It should return false otherwise
  // Tip: STRICTLY equal, ====
  const areAllEqual = (arr) => {
    return arr.every((val) => val === arr[0]);
  };

  const result23 = areAllEqual([true, true, true, true]);
  console.log(result23);

  const result24 = areAllEqual(['test', 'test', 'test']);
  console.log(result24);

  const result25 = areAllEqual([1,1,1,2]);
  console.log(result25);

  const result26 = areAllEqual(['10',10,10,10]);
  console.log(result26);


  /*
  Test cases:
  myFunction([true, true, true, true]) Expected true 
  myFunction(['test', 'test', 'test']) Expected true 
  myFunction([1,1,1,2]) Expected false 
  myFunction(['10',10,10,10]) Expected false 
  */

  // ========================================
  // Write a function that takes arguments an arbitrary number of arrays
  // It should return an array containing the values of all arrays
  // Tip: Make use of the spread syntax (...), as the parameters suggest
  const mergeAllArrays = (...arrays) => {
    return arrays.reduce((acc, arr) => acc.concat(arr), []);
  };

  const result27 = mergeAllArrays([1,2,3], [4,5,6]);
  console.log(result27);

  const result28 = mergeAllArrays(['a', 'b', 'c'], [4, 5, 6]);
  console.log(result28);

  const result29 = mergeAllArrays([true, true], [1, 2], ['a', 'b']);
  console.log(result29);
  
  /*
  Test cases:
  myFunction([1, 2, 3], [4, 5, 6]) Expected [1, 2, 3, 4, 5, 6]
  myFunction(['a', 'b', 'c'], [4, 5, 6]) Expected ['a', 'b', 'c', 4, 5, 6]
  myFunction([true, true], [1, 2], ['a', 'b']) Expected [true, true, 1, 2, 'a', 'b']
  */

  // Get the container
  const getNthCharacterInArrayContainer = document.getElementById('getNthCharacterInArrayResults');
  const removeFirstThreeElementsContainer = document.getElementById('removeFirstThreeElementsResults');
  const removeLastNElementsContainer = document.getElementById('removeLastNElementsResults');
  const countNumberOfElementsContainer = document.getElementById('countNumberOfElementsResults');
  const countNumberOfNegativeValuesContainer = document.getElementById('countNumberOfNegativeValuesResults');
  const calcSumOfArrayOfNumbersContainer = document.getElementById('calcSumOfArrayOfNumbersResults');
  const calcAvgOfArrayOfNumbersContainer = document.getElementById('calcAvgOfArrayOfNumbersResults');
  const getLongestStringFromArrayContainer = document.getElementById('getLongestStringFromArrayResults');
  const areAllEqualContainer = document.getElementById('areAllEqualResults');
  const mergeAllArraysContainer = document.getElementById('mergeAllArraysResults');

getNthCharacterInArrayContainer.innerHTML = `
  getNthCharacterInArray([1,2,3,4,5],3) = ${result}<br>
  getNthCharacterInArray([10, 9, 8, 7, 6],5) = ${result1}<br>
  getNthCharacterInArray([7, 2, 1, 6, 3],1) = ${result2}
`;

removeFirstThreeElementsContainer.innerHTML = `
removeFirstThreeElements([1,2,3,4]) = ${result3}<br>
removeFirstThreeElements([5,4,3,2,1,0]) = ${result4}<br>
removeFirstThreeElements([99,1,1]) = ${result5}
`;

removeLastNElementsContainer.innerHTML = `
removeLastNElements([1, 2, 3, 4, 5], 2) = ${result6}<br>
removeLastNElements([1, 2, 3], 6) = ${result7}<br>
removeLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3) = ${result8}
`;

countNumberOfElementsContainer.innerHTML = `
countNumberOfElements([1,2,2,4]) = ${result9}<br>
countNumberOfElements([9,9,9]) = ${result10}<br>
countNumberOfElements([4,3,2,1,0]) = ${result11}
`;

countNumberOfNegativeValuesContainer.innerHTML = `
countNumberOfNegativeValues([1,-2,2,-4]) = ${result12}<br>
countNumberOfNegativeValues([0,9,1]) = ${result13}<br>
countNumberOfNegativeValues([4,-3,2,1,0]) = ${result14}
`;

calcSumOfArrayOfNumbersContainer.innerHTML = `
calcSumOfArrayOfNumbers([10,100,40]) = ${result15}<br>
calcSumOfArrayOfNumbers([10,100,1000,1]) = ${result16}<br>
calcSumOfArrayOfNumbers([-50,0,50,200]) = ${result17}
`;

calcAvgOfArrayOfNumbersContainer.innerHTML = `
calcAvgOfArrayOfNumbers([10,100,40]) = ${result18}<br>
calcAvgOfArrayOfNumbers([10,100,1000]) = ${result19}<br>
calcAvgOfArrayOfNumbers([-50,0,50,200]) = ${result20}
`;

getLongestStringFromArrayContainer.innerHTML = `
getLongestStringFromArray(['help', 'me']) = ${result21}<br>
getLongestStringFromArray(['I', 'need', 'candy']) = ${result22}
`;

areAllEqualContainer.innerHTML = `
areAllEqual([true, true, true, true]) = ${result23}<br>
areAllEqual(['test', 'test', 'test']) = ${result24}<br>
areAllEqual([1,1,1,2]) = ${result25}<br>
areAllEqual(['10',10,10,10]) = ${result26}
`;

mergeAllArraysContainer.innerHTML = `
mergeAllArrays([1,2,3], [4,5,6]) = ${result27}<br>
mergeAllArrays(['a', 'b', 'c'], [4, 5, 6]) = ${result28}<br>
mergeAllArrays([true, true], [1, 2], ['a', 'b']) = ${result29}
`;
  