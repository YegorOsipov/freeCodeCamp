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
  if (prop != 'tracks' && value != '') {

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
for (let i = 0; i < 10; i += 1) {
  myArray.push(i);
}
console.log(myArray);