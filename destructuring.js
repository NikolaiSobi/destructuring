//Object Destructuring 1
let facts = {numPlanets0: 8, yearNeptuneDiscovered0: 1846};
let {numPlanets0, yearNeptuneDiscovered0} = facts;

console.log(numPlanets0); // 8
console.log(yearNeptuneDiscovered0); // 1846

//Object Destructuring 2
let planetFacts = {
    numPlanets1: 8,
    yearNeptuneDiscovered1: 1846,
    yearMarsDiscovered1: 1659
  };
  
  let {numPlanets1, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // {yearNeptuneDiscovered1: 1846,
                               //  yearMarsDiscovered1: 1659}

//Object Destructuring 3
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"})) // "Your name is Alejandro and you like purple
  console.log(getUserData({firstName: "Melissa"})) // "Your name is Melissa and you like green"
  console.log(getUserData({})) // "Your name is undefined and you like green"

//Array Destructuring 1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"

//Array Destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Array Destructuring 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

/*
ES2015 Refactoring
ES5 Assigning Variables to Object Properties
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

/* Write an ES2015 Version */
const obj = {
    numbers: {
        a:1, 
        b:2
    }
}

const {numbers: {a}, numbers: {b}} = obj

/*
ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

/* Write an ES2015 Version */
const arr = [1, 2];
[arr[1], arr[0]] = [arr[0], arr[1]]

/*
raceResults()
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
function raceResults([first, second, third, ...rest]){
    return {first, second, third, rest}
}

// OR
const raceResults2 = ([first, second, third, ...rest]) => ({first, second, third, rest})
