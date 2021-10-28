//=============================================== Basic JS ===========================================


function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return 'Not Found';
  }
}

let obj = {
  1: 'eee',
  2: 'rrr',
  3: 'ttt'
};
console.log(checkObj(obj, 1));


// Manipulating Complex Objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

var album = {
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
    ],
   "gold": true 
}

myMusic.push(album);
console.log(myMusic);


// Accessing Nested Objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box'];


// Accessing Nested Arrays - доступ к вложенным массивам
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];


// Record Collection
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value;
  } else if (prop === 'tracks' && !records[id].hasOwnProperty('tracks') && value !== '') {
    records[id][prop] = [];
    records[id][prop] = [value];
  } else if (prop === 'tracks' && value) {
    records[id][prop].push(value);
  } else if (!value) {
    delete records[id][prop];
  }
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


// Iterate with JavaScript While Loops - цикл while
var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}


// Iterate with JavaScript For Loops - цикл for
// Setup
var myArray = [];

// Only change code below this line
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}


// Iterate Odd Numbers With a For Loop
// Setup
var myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray);

// Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}


// Nesting For Loops
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]; 
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);


// Iterate with JavaScript Do...While Loops
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}


// Replace Loops using Recursion
// let arr = [1, 2, 3, 4, 5, 6];
function sum(arr, n) {
  // Only change code below this line
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
  // Only change code above this line
}



let arr = [1, 2, 3, 4, 5, 6];
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return n;
  } else {
    return sum(arr, n - 1) + arr[n - 1] ;
  }
  // Only change code above this line
}
console.log(sum(arr, 3));


// Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || 'No such property';
    }
  }
  return 'No such contact';
  // Only change code above this line
}
console.log(lookUpProfile("Akira", "wow"));


// Generate Random Fractions with JavaScript - генерация случайных дробей с JS
// Generate Random Whole Numbers with JavaScript - генерация случайных целых чисел
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());


// Generate Random Whole Numbers within a Range - генератор случайных чисел в пределах диапозона
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}


// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");


// Use the parseInt Function with a Radix - использование parseInt с системой счисления
function convertToInteger(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger("10011"));


// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return  a == b ? 'Equal' : 'Not Equal';
}
console.log(checkEqual(1, 2));


// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}
console.log(checkSign(10));


// Use Recursion to Create a Countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    let countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5));


// Use Recursion to Create a Range of Numbers - рекурсия для создания диапозоначисел
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    let countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
}
console.log(rangeOfNumbers(1, 5));




// ============================================= ES6 ===============================================
// Compare Scopes of the var and let Keywords
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}


// Mutate an Array Declared with const





