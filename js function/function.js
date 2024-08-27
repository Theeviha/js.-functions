// Addition Function:1
    function add(a, b) {
    return a + b;
}

// Subtraction Function:2
function subtract(a, b) {
    return a - b;
}

// Multiplication Function:3
function multiply(a, b) {
    return a * b;
}

//Division Function:4
function divide(a, b) {
    return a / b;
}

//Check Even or Odd:5
function isEven(number) {
    return number % 2 === 0;
}

// Factorial Function:6
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Find Minimum:7
function findMin(a, b, c) {
    return Math.min(a, b, c);
}

// Convert Fahrenheit to Celsius:8
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Reverse a String:9
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Find Length of a String:10
function stringLength(str) {
    return str.length;
}


// Sum of Array Elements:11
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

// Convert to Uppercase:12
function toUpperCase(str) {
    return str.toUpperCase();
}

// Check if String Contains Substring:13
function containsSubstring(str, substring) {
    return str.includes(substring);
}


// Delete Key from Object:14
function deleteKey(obj, key) {
    delete obj[key];
    return obj;
}


// Merge Two Objects:15
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}


// Check if Key Exists in Object:16
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}

// Get Object Values:17
function getObjectValues(obj) {
    return Object.values(obj);
}

// export function18
export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }  // no ; at the end

//  export default function:19
export default function(user) { // no function name
    alert(`Hello, ${user}!`);
  }

//   Array forEach:20
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}

//  if, else, and else if:21
if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good day!";
  }

//   Switch Statement:22
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

// Loops:23
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;

// While Loop:24
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;

// module:25
<script type="module">
import message from "./message.js";

document.getElementById("demo").innerHTML = message();

</script>

// Delete Key from Object:26
function deleteKey(obj, key) {
    delete obj[key];
    return obj;
}


// Check if Key Exists in Object:27
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}

// Get Current Month:28
function getCurrentMonth() {
    return new Date().getMonth() + 1;
}

// Get Current Date:29
function getCurrentDate() {
    return new Date();
}

// Remove Duplicates from Array:30
function removeDuplicates(arr) {
    return [...new Set(arr)];
}


