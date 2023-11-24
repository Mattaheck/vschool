// const readlineSync = require('readline-sync');

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b === 0) {
//     console.log("Error: Division by zero is undefined.");
//     return undefined;
//   }
//   return a / b;
// }

// function calculator() {
//   console.log("Simple Calculator");

//   const num1 = parseFloat(readlineSync.question('Enter the first number: '));
//   const num2 = parseFloat(readlineSync.question('Enter the second number: '));

//   console.log('\nChoose operation:');
//   console.log('1. Addition (+)');
//   console.log('2. Subtraction (-)');
//   console.log('3. Multiplication (*)');
//   console.log('4. Division (/)');

//   const choice = readlineSync.question('Enter the operation (1-4): ');

//   let result;
//   switch (choice) {
//     case '1':
//       result = add(num1, num2);
//       break;
//     case '2':
//       result = subtract(num1, num2);
//       break;
//     case '3':
//       result = multiply(num1, num2);
//       break;
//     case '4':
//       result = divide(num1, num2);
//       break;
//     default:
//       console.log('Invalid choice');
//       return;
//   }

//   if (result !== undefined) {
//     console.log(`Result: ${result}`);
//   }
// }

// // Run the calculator function
// calculator();


var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer")
    count++;
}

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    const person = peopleWhoWantToSeeMadMaxFuryRoad[i];


    if (person.age >= 18) {
        console.log('${person.name} is old enough to see Mad Max Fury Road');
    } else {
        console.log('${person.name} is not old enough to see Mad Max Fury Road');
    }
  }

  //loop from 0-10
  for (let i = 0; i < 10; i--){
    console.log(i);
  }
  //loop from 10-0
  for (let i = 9; i >= 0; i--){
    console.log(i);
}

const fruit = ["banana", "orange", "apple", "kiwi"];
for (let i = 0; i < fruit.length; i++){
  console.log(fruit[i]);
}

//loop to push numbers to an array

const numbersArray = [];
for (let i = 0; i < 10; i++){
  numbersArray.push(i);
}
console.log(numbersArray);

for (let i = 0; i < 100; i += 2){
  console.log(i);
}

//loop to push every other fruit to an array 
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const everyOtherFruit = [];

for (var i=0; i < fruit.length; i += 2){
  everyOtherFruit.push(fruit[i]);
}
  console.log(everyOtherFruit);


  const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  for (let i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
  }
  
  //loop that puts names and occupations into an array 
  const namesArray = [];
  const occupationArray = [];

  for (let i = 0; i < peopleArray.length; i++){
    namesArray.push(peopleArray[i].name);
    occupationArray.push(peopleArray[i].occupation);
  }
  console.log(namesArray);
  console.log(occupationArray);

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log(vegetables);

var fruit = ["banana", "apple", "orange", "watermelon"];
// fruit.shift();
// console.log(fruit);

// var orangeIndex = fruit.indexOf("orange");
// console.log(orangeIndex);

fruit.push("2");
console.log(fruit);


var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// vegetables.indexOf();
// console.log(vegetables);

vegetables.push("4");
console.log(vegetables);

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var newArray = fruit.concat(vegetables);
console.log(newArray);

var sliceArray = newArray.slice(4,5)
console.log(sliceArray);


//loop through two arrays to combine them
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function combineNamesandAlaphabet(people, alphabet) {
  var resultArray = [];

  for (var i = 0; i < people.length; i++) {
      resultArray.push(people[i] + ":")
    
      for (var j = 0; j < alphabet.length; j++) {
      resultArray.push(alphabet[j])
    }
  }
    return resultArray;
}


var combinedArray = combineNamesandAlaphabet(people, alphabet);
console.log(combinedArray);

//
function capitalizeAndLowercase(inputString) {
  return inputString.toUpperCase() + inputString.toLowerCase();
}

var result = capitalizeAndLowercase("Hello");
console.log(result);

//
function halfStringLength(inputString){
  return Math.floor(inputString.length / 2);
}

var result = halfStringLength("hello, World!");
console.log(result);

//
function getFirstHalf(inputString){
  var endIndex = halfStringLength(inputString)
  return inputString.slice(0, endIndex);
}

var result = getFirstHalf("hello, world");
console.log(result);

//constructor functions

// Create an empty array named employees
var employees = [];

// Employee constructor function
function Employee(name, jobTitle, salary, status = "Full Time") {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;

  // Method to print employee information
  this.printEmployeeForm = function () {
    console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: $${this.salary}/hour, Status: ${this.status}`);
  };
}

// Instantiate three employees
var employee1 = new Employee("Bob", "V School Instructor", 3000);
var employee2 = new Employee("Alice", "Web Developer", 5000, "Part Time");
var employee3 = new Employee("Charlie", "Graphic Designer", 4000, "Contract");

// Call the printEmployeeForm method for each employee
employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

// Put the generated employees into the employees array
employees.push(employee1, employee2, employee3);

// You can now access the employees array
console.log(employees);

