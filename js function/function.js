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
// Remove Duplicates from Array:30
function removeDuplicates(arr) {
    return [...new Set(arr)];
}



//  RegExp:31
let regexp = new RegExp("\d\.\d");

alert( "Chapter 5.1".match(regexp) ); // null

// let regStr:32
let regStr = "\\d\\.\\d";
alert(regStr); // \d\.\d (correct now)

let regexp = new RegExp(regStr);

alert( "Chapter 5.1".match(regexp) ); // 5.1



// Binary data, files:33
let buffer = new ArrayBuffer(16); // create a buffer of length 16
alert(buffer.byteLength); // 16

// *
let buffer = new ArrayBuffer(16); // create a buffer of length 16

let view = new Uint32Array(buffer); // treat buffer as a sequence of 32-bit integers

alert(Uint32Array.BYTES_PER_ELEMENT); // 4 bytes per integer

alert(view.length); // 4, it stores that many integers
alert(view.byteLength); // 16, the size in bytes

// let's write a value
view[0] = 123456;

// iterate over values
for(let num of view) {
  alert(num); // 123456, then 0, 0, 0 (4 values total)
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

                                arujan
result = a || b;
<!-- In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false. -->
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
<!-- As we can see, the result is always true except for the case when both operands are false. -->






<!-- In JavaScript, the && operator is the logical AND operator. It evaluates expressions from left to right and returns the first falsy value it encounters. If all values are truthy, it returns the last value. -->
result = value1 && value2 && value3;






<!-- Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand. -->
alert( 1 && 2 && null && 3 ); // null






<!-- The “do…while” loop; -->
while (condition) {
    // code
    // so-called "loop body"
  }
  <!-- While the condition is truthy, the code from the loop body is executed. -->
  do {
    // loop body
  } while (condition);
  <!-- The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again. -->




  <!-- Continue to the next iteration -->
  let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );






alert('Hello'); alert('World');
<!-- here we split “Hello World” into two alerts -->





<!-- The "switch" statement -->
<!-- The switch has one or more case blocks and an optional default.
It looks like this: -->
switch(x) {
    case 'value1':  // if (x === 'value1')
      ...
      [break]
  
    case 'value2':  // if (x === 'value2')
      ...
      [break]
  
    default:
      ...
      [break]
  }
  <!-- The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
If no case is matched then the default code is executed (if it exists). -->






<!-- alert -->
alert("Hello");
<!-- The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”. -->






<!-- Function expressions -->
function sayHi() {
    alert( "Hello" );
  }
  <!-- There is another syntax for creating a function that is called a Function Expression.
  It allows us to create a new function in the middle of any expression. -->






  <!-- Comments -->
  <!-- This code will do this thing (...) and that thing (...)
...and who knows what else... -->
// Calculate the total price of items in a cart

let totalPrice = 0; // Initialize totalPrice to 0

for (let item of items) { // Loop through each item in the cart
    totalPrice += item.price; // Add the item's price to the totalPrice
}

console.log("Total Price: " + totalPrice);
<!-- But in good code, the amount of such “explanatory” comments should be minimal. Seriously, the code should be easy to understand without them.
There’s a great rule about that: “if the code is so unclear that it requires a comment, then maybe it should be rewritten instead”. -->





<!-- Development of “pow”: the spec -->
describe("pow", function() {

    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
    });
  
  });
  <!-- Let’s say we want to make a function pow(x, n) that raises x to an integer power n. We assume that n≥0.
That task is just an example: there’s the ** operator in JavaScript that can do that, but here we concentrate on the development flow that can be applied to more complex tasks as well.
Before creating the code of pow, we can imagine what the function should do and describe it.
Such description is called a specification or, in short, a spec, and contains descriptions of use cases together with tests for them, like this: -->




<!-- join()
Description: Joins all elements of an array into a string.
Example: ["Hello", "world"].join(" "); // returns "Hello world" -->
let words = ["Hello", "world"];
let sentence = words.join(" ");
console.log(sentence); // "Hello world"




<!-- reverse()
Description: Reverses the order of the elements in an array in place. -->
let numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]




<!-- sort()
Description: Sorts the elements of an array in place and returns the array. -->
let numbers = [3, 1, 2];
numbers.sort();
console.log(numbers); // [1, 2, 3]


<!-- includes()
Description: Determines whether an array includes a certain value among its entries -->
let numbers = [1, 2, 3];
let hasTwo = numbers.includes(2);
console.log(hasTwo); // true

<!-- findIndex()
Description: Returns the index of the first element in the array that satisfies the provided testing function. -->
let numbers = [1, 2, 3];
let index = numbers.findIndex(x => x > 1);
console.log(index); // 1





<!-- find()
Description: Returns the value of the first element in the array that satisfies the provided testing function. -->
let numbers = [1, 2, 3];
let found = numbers.find(x => x > 1);
console.log(found); // 2





<!-- every()
Description: Tests whether all elements in the array pass the test implemented by the provided function -->
let numbers = [1, 2, 3];
let allPositive = numbers.every(x => x > 0);
console.log(allPositive); // true




<!-- some()
Description: Tests whether at least one element in the array passes the test implemented by the provided function. -->
let numbers = [1, 2, 3];
let hasGreaterThanTwo = numbers.some(x => x > 2);
console.log(hasGreaterThanTwo); // true






<!-- forEach()
Description: Executes a provided function once for each array element. -->
let numbers = [1, 2, 3];
numbers.forEach(x => console.log(x));
// 1
// 2
// 3





<!-- reduce()
Description: Executes a reducer function on each element of the array, resulting in a single output value -->
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10






<!-- filter()
Description: Creates a new array with all elements that pass the test implemented by the provided function -->
let numbers = [1, 2, 3, 4];
let evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]






<!-- map()
Description: Creates a new array populated with the results of calling a provided function on every element in the calling array -->
let numbers = [1, 2, 3];
let doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6]






<!-- JSON.parse()
Description: Parses a JSON string, constructing the JavaScript value or object described by the string. -->
let jsonString = '{"name":"Alice","age":25}';
let obj = JSON.parse(jsonString);
console.log(obj.name); // "Alice"






<!-- JSON.stringify()
Description: Converts a JavaScript object or value to a JSON string. -->
let obj = { name: "Alice", age: 25 };
let jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Alice","age":25}'

