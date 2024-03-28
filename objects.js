// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
const checkIfPropertyExistsAndTruthy = (a, b) => {
  return Boolean(a[b]);
};

  const result27 = checkIfPropertyExistsAndTruthy({a:1,b:2,c:3},'b');
  console.log(result27);

  const result28 = checkIfPropertyExistsAndTruthy({x:'a',y:null,z:'c'},'y');
  console.log(result28);

  const result29 = checkIfPropertyExistsAndTruthy({x:'a',b:'b',z:undefined},'z');
  console.log(result29);

  /*
  Test cases:
  myFunction({a:1,b:2,c:3},'b') Expected true
  myFunction({x:'a',y:null,z:'c'},'y') Expected false
  myFunction({x:'a',b:'b',z:undefined},'z') Expected false
  */
  
  // ========================================
  
  // Write a function that takes an object with two properties as argument
  // It should return the value of the property with key country
  const getCountry = (obj) => {
    return obj.country;
  };

  const result30 = getCountry({ continent: 'Asia', country: 'Japan' });
  console.log(result30);

  const result31 = getCountry({ country: 'Sweden', continent: 'Europe' });
  console.log(result31);
  
  /*
  Test cases:
  myFunction({ continent: 'Asia', country: 'Japan' }) Expected 'Japan'
  myFunction({ country: 'Sweden', continent: 'Europe' }) Expected 'Sweden'
  */
  
  // ========================================
  
  // Write a function that takes an object with two properties as argument
  // It should return the value of the property with key 'prop-2'
  // Tip: you might want to use the square brackets to access the property
  const getWeirdKeyValue = (obj) => {
    return obj['prop-2'];
  };

  const result32 = getWeirdKeyValue({ one: 1, 'prop-2': 2 });
  console.log(result32);

  const result33 = getWeirdKeyValue({ 'prop-2': 'two', prop: 'test' });
  console.log(result33);
  
  /*
  Test cases:
  myFunction({  one: 1,  'prop-2': 2}) Expected 2
  myFunction({  'prop-2': 'two',  prop: 'test'}) Expected 'two'
  */
  
  // ========================================
  
  // Write a function that takes an object with two properties and a string as arguments
  // It should return the value of the property with key equal to the value of the string
  const getPropertyByString = (obj, key) => {
    return obj[key];
  };

  const result34 = getPropertyByString({continent: 'Asia', country: 'Japan'}, 'continent');
  console.log(result34);

  const result35 = getPropertyByString({country: 'Sweden', continent: 'Europe'}, 'country');
  console.log(result35);
  
  /*
  Test cases:
  myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent') Expected 'Asia'
  myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country') Expected 'Sweden'
  */
  
  // ========================================
  
  // Write a function that takes an object (a) and a string (b) as argument
  // Return true if the object has a property with key 'b'
  // Return false otherwise
  // NOTE: Test case 3 is a bit tricky because the value of property 'z' is undefined, but the property itself exists
  const checkIfPropertyExists = (a, b) => {
    return a.hasOwnProperty(b);
  };

  const result36 = checkIfPropertyExists({a:1,b:2,c:3},'b');
  console.log(result36);

  const result37 = checkIfPropertyExists({x:'a',y:'b',z:'c'},'a');
  console.log(result37);

  const result38 = checkIfPropertyExists({x:'a',y:'b',z:undefined},'z');
  console.log(result38);
  
  /*
  Test cases:
  myFunction({a:1,b:2,c:3},'b') Expected true
  myFunction({x:'a',y:'b',z:'c'},'a') Expected false
  myFunction({x:'a',y:'b',z:undefined},'z') Expected true
  */
  
  // ========================================
  
  // Write a function that takes a string as argument
  // Create an object that has a property with key 'key' and a value equal to the string
  // Return the object
  const createObjectWithKeyValue = (a) => {
    return { key: a };
  };

  const result39 = createObjectWithKeyValue('a');
  console.log(result39);

  const result40 = createObjectWithKeyValue('z');
  console.log(result40);

  const result41 = createObjectWithKeyValue('b');
  console.log(result41);
  
  /*
  Test cases:
  myFunction('a') Expected {key:'a'}
  myFunction('z') Expected {key:'z'}
  myFunction('b') Expected {key:'b'}
  */
  
  // ========================================
  
  // Write a function that takes two strings (a and b) as arguments
  // Create an object that has a property with key 'a' and a value of 'b'
  // Return the object
  const createObjectWithKeyAndValue = (a, b) => {
    return { [a]: b };
  };

  const result42 = createObjectWithKeyAndValue('a','b');
  console.log(result42);

  const result43 = createObjectWithKeyAndValue('z','x');
  console.log(result43);

  const result44 = createObjectWithKeyAndValue('b','w');
  console.log(result44);
  
  /*
  Test cases:
  myFunction('a','b') Expected {a:'b'}
  myFunction('z','x') Expected {z:'x'}
  myFunction('b','w') Expected {b:'w'}
  */
  
  // ========================================
  
  // Write a function that takes two arrays (a and b) as arguments
  // Create an object that has properties with keys 'a' and corresponding values 'b'
  // Return the object
  const createObjectFromArrays = (a, b) => {
    return a.reduce((acc, val, i) => {
      acc[val] = b[i];
      return acc;
    }, {});
  };

  const result45 = createObjectFromArrays(['a','b','c'],[1,2,3]);
  console.log(result45);

  const result46 = createObjectFromArrays(['w','x','y','z'],[10,9,5,2]);
  console.log(result46);

  const result47 = createObjectFromArrays([1,'b'],['a',2]);
  console.log(result47);
  
  /*
  Test cases:
  myFunction(['a','b','c'],[1,2,3]) Expected {a:1,b:2,c:3}
  myFunction(['w','x','y','z'],[10,9,5,2]) Expected {w:10,x:9,y:5,z:2}
  myFunction([1,'b'],['a',2]) Expected {1:'a',b:2}
  */
  
  // ========================================
  // Write a function that takes an object (a) as argument
  // Return an array with all object keys
  // Tip: Object.keys()
  const extractKeysFromObject = (a) => {
    return Object.keys(a);
  };

  const result48 = extractKeysFromObject({a:1,b:2,c:3});
  console.log(result48);

  const result49 = extractKeysFromObject({j:9,i:2,x:3,z:4});
  console.log(result49);

  const result50 = extractKeysFromObject({w:15,x:22,y:13});
  console.log(result50);
  
  /*
  Test cases:
  myFunction({a:1,b:2,c:3}) Expected ['a','b','c']
  myFunction({j:9,i:2,x:3,z:4}) Expected ['j','i','x','z']
  myFunction({w:15,x:22,y:13}) Expected ['w','x','y']
  */
  
  // ========================================
  // Write a function that takes an object as argument
  // In some cases the object contains other objects with some deeply nested properties
  // Return the property 'b' of object 'a' inside the original object if it exists
  // If not, return undefined
  const getNestedProperty = (obj) => {
    return obj.a?.b;
  };

  const result51 = getNestedProperty({a:1});
  console.log(result51);

  const result52 = getNestedProperty({a:{b:{c:3}}});
  console.log(result52);

  const result53 = getNestedProperty({b:{a:1}});
  console.log(result53);

  const result54 = getNestedProperty({a:{b:2}});
  console.log(result54);
  
  /*
  Test cases:
  myFunction({a:1}) Expected undefined
  myFunction({a:{b:{c:3}}}) Expected {c:3}
  myFunction({b:{a:1}}) Expected undefined
  myFunction({a:{b:2}}) Expected 2
  */
  
  // ========================================
  // Write a function that takes an object (a) as argument
  // Return the sum of all object values
  // Tip: Object.values()
  const calcSumOfAllObjectValues = (a) => {
    return Object.values(a).reduce((acc, val) => acc + val, 0);
  };

  const result55 = calcSumOfAllObjectValues({a:1,b:2,c:3});
  console.log(result55);

  const result56 = calcSumOfAllObjectValues({j:9,i:2,x:3,z:4});
  console.log(result56);

  const result57 = calcSumOfAllObjectValues({w:15,x:22,y:13});
  console.log(result57);

  /*
  Test cases:
  myFunction({a:1,b:2,c:3}) Expected 6
  myFunction({j:9,i:2,x:3,z:4}) Expected 18
  myFunction({w:15,x:22,y:13}) Expected 50
  */
  // ========================================
  
  // Write a function that takes an object as argument
  // It should return an object with all original object properties
  // except for the property with key 'b'
  // Tip: Spread syntax
  const removePropertyB = (obj) => {
    return Object.entries(obj).reduce((acc, [key, val]) => {
      if (key !== 'b') {
        acc[key] = val;
      }
      return acc;
    }, {});
  };

  const result58 = removePropertyB({a:1,b:2,c:3});
  console.log(result58);

  const result59 = removePropertyB({b:0,a:7,d:8});
  console.log(result59);

  const result60 = removePropertyB({e:6,f:4,b:5,a:3});
  console.log(result60);
  
  /*
  Test cases:
  myFunction({ a: 1, b: 7, c: 3 }) Expected { a: 1, c: 3 }
  myFunction({ b: 0, a: 7, d: 8 }) Expected { a: 7, d: 8 }
  myFunction({ e: 6, f: 4, b: 5, a: 3 }) Expected { e: 6, f: 4, a: 3 }
  */
  
  // ========================================
  
  // Write a function that takes two objects as arguments
  // Unfortunately, the property 'b' in the second object has the wrong key
  // It should be named 'd' instead
  // Merge both objects and correct the wrong property name
  // Return the resulting object
  // It should have the properties 'a', 'b', 'c', 'd', and 'e'
  // Tip: Spread syntax
  const mergeAndFixObjects = (x, {b, ...rest}) => {
    return { ...x, ...rest, d: b };
  };

  const result61 = mergeAndFixObjects({a:1,b:2},{c:3,b:4,e:5});
  console.log(result61);

  const result62 = mergeAndFixObjects({a:5,b:4},{c:3,b:1,e:2});
  console.log(result62);

  /*
  Test cases:
  myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }) Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
  myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }) Expected { a: 5, b: 4, c: 3, e: 2, d: 1}
  */
  
  // ========================================
  
  // Write a function that takes an object (a) and a number (b) as arguments
  // Multiply all values of 'a' by 'b'
  // Return the resulting object
  const multipyAllValuesByB = (a, b) => {
    return Object.entries(a).reduce((acc, [key, val]) => {
      acc[key] = val * b;
      return acc;
    }, {});
  };

  const result63 = multipyAllValuesByB({a:1,b:2,c:3},3);
  console.log(result63);

  const result64 = multipyAllValuesByB({j:9,i:2,x:3,z:4},10);
  console.log(result64);

  const result65 = multipyAllValuesByB({w:15,x:22,y:13},6);
  console.log(result65);
  
  /*
  Test cases:
  myFunction({a:1,b:2,c:3},3) Expected {a:3,b:6,c:9}
  myFunction({j:9,i:2,x:3,z:4},10) Expected {j:90,i:20,x:30,z:40}
  myFunction({w:15,x:22,y:13},6) Expected {w:90,x:132,y:78}
  */

  // objects.js

// ... your function definitions ...

// Get the container
const checkIfPropertyExistsAndTruthyContainer = document.getElementById('checkIfPropertyExistsAndTruthyResults');
const getCountryContainer = document.getElementById('getCountryResults');
const getWeirdKeyValueContainer = document.getElementById('getWeirdKeyValueResults');
const getPropertyByStringContainer = document.getElementById('getPropertyByStringResults');
const checkIfPropertyExistsContainer = document.getElementById('checkIfPropertyExistsResults');
const createObjectWithKeyValueContainer = document.getElementById('createObjectWithKeyValueResults');
const createObjectWithKeyAndValueContainer = document.getElementById('createObjectWithKeyAndValueResults');
const createObjectFromArraysContainer = document.getElementById('createObjectFromArraysResults');
const extractKeysFromObjectContainer = document.getElementById('extractKeysFromObjectResults');
const getNestedPropertyContainer = document.getElementById('getNestedPropertyResults');
const calcSumOfAllObjectValuesContainer = document.getElementById('calcSumOfAllObjectValuesResults');
const removePropertyBContainer = document.getElementById('removePropertyBResults');
const mergeAndFixObjectsContainer = document.getElementById('mergeAndFixObjectsResults');
const multipyAllValuesByBContainer = document.getElementById('multipyAllValuesByBResults');


// Insert the results into the container
checkIfPropertyExistsAndTruthyContainer.innerHTML = `
  checkIfPropertyExistsAndTruthy({a:1,b:2,c:3},'b') = ${result27}<br>
  checkIfPropertyExistsAndTruthy({x:'a',y:null,z:'c'},'y') = ${result28}<br>
  checkIfPropertyExistsAndTruthy({x:'a',b:'b',z:undefined},'z') = ${result29}
`;

getCountryContainer.innerHTML = `
  getCountry({ continent: 'Asia', country: 'Japan' }) = ${result30}<br>
  getCountry({ country: 'Sweden', continent: 'Europe' }) = ${result31}
`;

getWeirdKeyValueContainer.innerHTML = `
  getWeirdKeyValue({ one: 1, 'prop-2': 2 }) = ${result32}<br>
  getWeirdKeyValue({ 'prop-2': 'two', prop: 'test' }) = ${result33}
`;

getPropertyByStringContainer.innerHTML = `
  getPropertyByString({ continent: 'Asia', country: 'Japan' }, 'continent') = ${result34}<br>
  getPropertyByString({ country: 'Sweden', continent: 'Europe' }, 'country') = ${result35}
`;

checkIfPropertyExistsContainer.innerHTML = `
  checkIfPropertyExists({a:1,b:2,c:3},'b') = ${result36}<br>
  checkIfPropertyExists({x:'a',y:'b',z:'c'},'a') = ${result37}<br>
  checkIfPropertyExists({x:'a',y:'b',z:undefined},'z') = ${result38}
`;

createObjectWithKeyValueContainer.innerHTML = `
  createObjectWithKeyValue('a') = ${JSON.stringify(result39)}<br>
  createObjectWithKeyValue('z') = ${JSON.stringify(result40)}<br>
  createObjectWithKeyValue('b') = ${JSON.stringify(result41)}
`;

createObjectWithKeyAndValueContainer.innerHTML = `
  createObjectWithKeyAndValue('a','b') = ${JSON.stringify(result42)}<br>
  createObjectWithKeyAndValue('z','x') = ${JSON.stringify(result43)}<br>
  createObjectWithKeyAndValue('b','w') = ${JSON.stringify(result44)}
`;

createObjectFromArraysContainer.innerHTML = `
  createObjectFromArrays(['a','b','c'],[1,2,3]) = ${JSON.stringify(result45)}<br>
  createObjectFromArrays(['w','x','y','z'],[10,9,5,2]) = ${JSON.stringify(result46)}<br>
  createObjectFromArrays([1,'b'],['a',2]) = ${JSON.stringify(result47)}
`;

extractKeysFromObjectContainer.innerHTML = `
  extractKeysFromObject({a:1,b:2,c:3}) = ${JSON.stringify(result48)}<br>
  extractKeysFromObject({j:9,i:2,x:3,z:4}) = ${JSON.stringify(result49)}<br>
  extractKeysFromObject({w:15,x:22,y:13}) = ${JSON.stringify(result50)}
`;

getNestedPropertyContainer.innerHTML = `
  getNestedProperty({a:1}) = ${result51}<br>
  getNestedProperty({a:{b:{c:3}}}) = ${JSON.stringify(result52)}<br>
  getNestedProperty({b:{a:1}}) = ${result53}<br>
  getNestedProperty({a:{b:2}}) = ${result54}
`;

calcSumOfAllObjectValuesContainer.innerHTML = `
  calcSumOfAllObjectValues({a:1,b:2,c:3}) = ${result55}<br>
  calcSumOfAllObjectValues({j:9,i:2,x:3,z:4}) = ${result56}<br>
  calcSumOfAllObjectValues({w:15,x:22,y:13}) = ${result57}
`;

removePropertyBContainer.innerHTML = `
  removePropertyB({ a: 1, b: 7, c: 3 }) = ${JSON.stringify(result58)}<br>
  removePropertyB({ b: 0, a: 7, d: 8 }) = ${JSON.stringify(result59)}<br>
  removePropertyB({ e: 6, f: 4, b: 5, a: 3 }) = ${JSON.stringify(result60)}
`;

mergeAndFixObjectsContainer.innerHTML = `
  mergeAndFixObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }) = ${JSON.stringify(result61)}<br>
  mergeAndFixObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }) = ${JSON.stringify(result62)}
`;

multipyAllValuesByBContainer.innerHTML = `
  multipyAllValuesByB({a:1,b:2,c:3},3) = ${JSON.stringify(result63)}<br>
  multipyAllValuesByB({j:9,i:2,x:3,z:4},10) = ${JSON.stringify(result64)}<br>
  multipyAllValuesByB({w:15,x:22,y:13},6) = ${JSON.stringify(result65)}
`;