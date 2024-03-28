// Write a function that takes two numbers (a and b) as argument
//  Sum a and b
// Return the result
const calcSum = (a, b) => {
    return a + b
  }

  console.log(calcSum(1,2))
    console.log(calcSum(1,10))
    console.log(calcSum(99,1))
  
  /*
  Test cases:
  calcSum(1,2) Expected 3
  calcSum(1,10) Expected 11
  calcSum(99,1) Expected 100
  */
  
  // ========================================
  
  // Write a function that takes two values, say a and b, as arguments
  // Return true if the two values are equal and of the same type
  const strictEquality = (a, b) => {
    return a === b
   }
  
    console.log(strictEquality(2,3))
    console.log(strictEquality(3,3))
    console.log(strictEquality(1,'1'))
    console.log(strictEquality('10','10'))
  /*
  Test cases:
  myFunction(2, 3) Expected false
  myFunction(3, 3) Expected true
  myFunction(1, '1') Expected false
  myFunction('10', '10') Expected true 
  */
  
  // ========================================
  
  // Write a function that takes a value as argument
  // Return the type of the value
  const getTypeOfValue = (a) => {
    return typeof a;
  }

    console.log(getTypeOfValue(1))
    console.log(getTypeOfValue(false))
    console.log(getTypeOfValue({}))
    console.log(getTypeOfValue(null))
    console.log(getTypeOfValue('string'))
    console.log(getTypeOfValue(['array']))
  
  /*
  Test cases:
  myFunction(1) Expected 'number'
  myFunction(false) Expected 'boolean'
  myFunction({}) Expected 'object'
  myFunction(null) Expected 'object'
  myFunction('string') Expected 'string'
  myFunction(['array']) Expected 'object'
  */
  
  // ========================================
  
  // Write a function that takes a string (a) as argument
  // Return the 1st character of the strgin a
  // Tip: look up the string prototype function slice() or split()
  const getFirstChar = (a, n) => {
    return a[0]
  }

    console.log(getFirstChar('abcd'))
    console.log(getFirstChar('zyxbwpl'))
    console.log(getFirstChar('gfedcba'))
  
  /*
  Test Cases:
  myFunction('abcd') Expected 'a'
  myFunction('zyxbwpl') Expected 'z'
  myFunction('gfedcba') Expected 'g'
  */
  
  // ========================================
  
  // Write a function that takes a string (a) and a number (n) as argument
  // Return the nth character of 'a'
  // Tip: look up the string prototype function slice() or split()
  const getNthChar = (a, n) => {
    return a[n-1]
  }

    console.log(getNthChar('abcd',1))
    console.log(getNthChar('zyxbwpl',5))
    console.log(getNthChar('gfedcba',3))
  
  /*
  Test Cases:
  myFunction('abcd',1) Expected 'a'
  myFunction('zyxbwpl',5) Expected 'w'
  myFunction('gfedcba',3) Expected 'e'
  */
  
  // ========================================
  
  // Write a function that takes a string (a) as argument
  // Extract the first half a
  // Return the result
  // Tip: look up the string prototype function slice() or split()
  const extractFirstHalfOfString = (a) => {
    return a.slice(0, a.length/2)
  }

    console.log(extractFirstHalfOfString('abcdefgh'))
    console.log(extractFirstHalfOfString('1234'))
    console.log(extractFirstHalfOfString('gedcba'))
  
  /*
  Test Cases:
  myFunction('abcdefgh') Expected 'abcd'
  myFunction('1234') Expected '12'
  myFunction('gedcba') Expected 'ged'
  */
  
  // ========================================
  
  // Write a function that takes a string (a) as argument
  // Remove the last 3 characters of a
  // Return the result
  const removeLastNChractersOfString = (a) => {
    return a.slice(0, a.length-3)
  }

    console.log(removeLastNChractersOfString('abcdefg'))
    console.log(removeLastNChractersOfString('1234'))
    console.log(removeLastNChractersOfString('fgedcba'))
  
  /*
  Test cases:
  myFunction('abcdefg') Expected 'abcd'
  myFunction('1234') Expected '1'
  myFunction('fgedcba') Expected 'fged'
  */
  
  // ========================================
  
  // Write a function that takes a number as argument
  // If the number is even, return true
  // Otherwise, return false
  // Tip: How does the % operator work?
  const checkIfNumberIsEven = (a) => {
    return a % 2 === 0
  }

    console.log(checkIfNumberIsEven(10))
    console.log(checkIfNumberIsEven(-4))
    console.log(checkIfNumberIsEven(5))
    console.log(checkIfNumberIsEven(-111))
  
  /*
  Test Cases:
  myFunction(10) Expected true
  myFunction(-4) Expected true
  myFunction(5) Expected false
  myFunction(-111) Expected false
  */
  
  // ========================================
  
  // Write a function that takes two numbers (a and b) as argument
  // Return b percent of a
  const getPercentageOfNumber = (a, b) => {
    return (a * b) / 100
  }

    console.log(getPercentageOfNumber(100,50))
    console.log(getPercentageOfNumber(10,1))
    console.log(getPercentageOfNumber(500,25))
  
  /*
  Test cases:
  myFunction(100,50) Expected 50
  myFunction(10,1) Expected 0.1
  myFunction(500,25) Expected 125
  */
  
  // ========================================
  
  // Write a function that takes 6 values (a,b,c,d,e,f) as arguments
  // Sum a and b
  // Then substract by c
  // Then multiply by d and divide by e
  // Finally raise to the power of f and return the result
  // Tip:
  // - Mind the order
  // - Power operator is either Math.pow or **
  //   - e.g. 2**2 = 4
  const useAllTheOperators = (a, b, c, d, e, f) => {
    return (((a + b) - c) * d / e) ** f
  }

    console.log(useAllTheOperators(6,5,4,3,2,1))
    console.log(useAllTheOperators(6,2,1,4,2,3))
    console.log(useAllTheOperators(2,3,6,4,2,3))
  
  /*
  Test cases:
  myFunction(6,5,4,3,2,1) Expected 10.5
  myFunction(6,2,1,4,2,3) Expected 2744
  myFunction(2,3,6,4,2,3) Expected -8
  */
  
  // ========================================
  
  // basics.js

// ... your function definitions ...

// Get the containers
const calcSumContainer = document.getElementById('calcSumResults');
const strictEqualityContainer = document.getElementById('strictEqualityResults');
const getTypeOfValueContainer = document.getElementById('getTypeOfValueResults');
const getFirstCharContainer = document.getElementById('getFirstCharResults');
const getNthCharContainer = document.getElementById('getNthCharResults');
const extractFirstHalfOfStringContainer = document.getElementById('extractFirstHalfOfStringResults');
const removeLastNChractersOfStringContainer = document.getElementById('removeLastNChractersOfStringResults');
const checkIfNumberIsEvenContainer = document.getElementById('checkIfNumberIsEvenResults');
const getPercentageOfNumberContainer = document.getElementById('getPercentageOfNumberResults');
const useAllTheOperatorsContainer = document.getElementById('useAllTheOperatorsResults');


// Insert the results into the containers
calcSumContainer.innerHTML = `
  calcSum(1,2) = ${calcSum(1,2)}<br>
  calcSum(1,10) = ${calcSum(1,10)}<br>
  calcSum(99,1) = ${calcSum(99,1)}
`;

strictEqualityContainer.innerHTML = `
  strictEquality(2,3) = ${strictEquality(2,3)}<br>
  strictEquality(3,3) = ${strictEquality(3,3)}<br>
  strictEquality(1,'1') = ${strictEquality(1,'1')}<br>
  strictEquality('10','10') = ${strictEquality('10','10')}
`;

getTypeOfValueContainer.innerHTML = `
  getTypeOfValue(1) = ${getTypeOfValue(1)}<br>
  getTypeOfValue(false) = ${getTypeOfValue(false)}<br>
  getTypeOfValue({}) = ${getTypeOfValue({})}<br>
  getTypeOfValue(null) = ${getTypeOfValue(null)}<br>
  getTypeOfValue('string') = ${getTypeOfValue('string')}<br>
  getTypeOfValue(['array']) = ${getTypeOfValue(['array'])}
`;

getFirstCharContainer.innerHTML = `
  getFirstChar('abcd') = ${getFirstChar('abcd')}<br>
  getFirstChar('zyxbwpl') = ${getFirstChar('zyxbwpl')}<br>
  getFirstChar('gfedcba') = ${getFirstChar('gfedcba')}
`;

getNthCharContainer.innerHTML = `
  getNthChar('abcd',1) = ${getNthChar('abcd',1)}<br>
  getNthChar('zyxbwpl',5) = ${getNthChar('zyxbwpl',5)}<br>
  getNthChar('gfedcba',3) = ${getNthChar('gfedcba',3)}
`;

extractFirstHalfOfStringContainer.innerHTML = `
  extractFirstHalfOfString('abcdefgh') = ${extractFirstHalfOfString('abcdefgh')}<br>
  extractFirstHalfOfString('1234') = ${extractFirstHalfOfString('1234')}<br>
  extractFirstHalfOfString('gedcba') = ${extractFirstHalfOfString('gedcba')}
`;

removeLastNChractersOfStringContainer.innerHTML = `
  removeLastNChractersOfString('abcdefg') = ${removeLastNChractersOfString('abcdefg')}<br>
  removeLastNChractersOfString('1234') = ${removeLastNChractersOfString('1234')}<br>
  removeLastNChractersOfString('fgedcba') = ${removeLastNChractersOfString('fgedcba')}
`;

checkIfNumberIsEvenContainer.innerHTML = `
  checkIfNumberIsEven(10) = ${checkIfNumberIsEven(10)}<br>
  checkIfNumberIsEven(-4) = ${checkIfNumberIsEven(-4)}<br>
  checkIfNumberIsEven(5) = ${checkIfNumberIsEven(5)}<br>
  checkIfNumberIsEven(-111) = ${checkIfNumberIsEven(-111)}
`;

getPercentageOfNumberContainer.innerHTML = `
  getPercentageOfNumber(100,50) = ${getPercentageOfNumber(100,50)}<br>
  getPercentageOfNumber(10,1) = ${getPercentageOfNumber(10,1)}<br>
  getPercentageOfNumber(500,25) = ${getPercentageOfNumber(500,25)}
`;

useAllTheOperatorsContainer.innerHTML = `
  useAllTheOperators(6,5,4,3,2,1) = ${useAllTheOperators(6,5,4,3,2,1)}<br>
  useAllTheOperators(6,2,1,4,2,3) = ${useAllTheOperators(6,2,1,4,2,3)}<br>
  useAllTheOperators(2,3,6,4,2,3) = ${useAllTheOperators(2,3,6,4,2,3)}
`;