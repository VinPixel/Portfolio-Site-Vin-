console.log("Welcome");

var text1 = "Hello";
var text2 = "Hello, spaces are also ok!";
var text3 = 'Single quotes are valid too.';

var escapedText1 = "He said" \"Yes!", thats's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';

console.log (text1, text2)

var boolean1 = true;
var boolean2 = false;
var notaBoolean = "false"; //This is just the string "false", not false

console.log(thisVariableDoesntExist); // Will output undefined

var emptyVariable - null;
var notNullButAString = "null";
console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs null
console.log(notNullButAString); // Outputs "null" - not the same as null!

var person = {
  name: "Vin"
  age: 38
};

var age = 38;
var name: Vinn;
var personParent = {
  name: Nameage: age,
  children: {
    name: "Vida";
    name: "Finn";
  }
};

 personParent.name = "Vinn"; // Set the name property to "Vinn"
 personParent.children.size = 175; // Set new values that weren't set before
 console.log(personParent.child.names); // Output "Vida and Finn" to the console

 var shortObject = { name: "Vinn", age: 38};
 var emptyObject = {}; // Objects can be empty. You can add properties later

 delete shortObject.name; // Will remove the "name" Property

 var shortArray = [1,2,3];
 var mixedArray = [
   1,
   "Hello",
   {}
   ["nested array"]
 ];

 console.log(shortArray[0]); // Outputs "1", the first value
 console.log (mixedArray[3][0]); // Outputs "nested array"

 shortArray[0] = 100; // Overwrites the prior value, 1, with 100px

 var MyArray = [1,2];
 MyArray.push(3);
 MyArray.push("Test");
 console.log(MyArray); // Will output: [1,2,3, "Test"]

 // You can press the green "run" button to execute the lesson from above
// Feel free to experiment with the code by changing some values here or "open in repl.it button" on the right

// Arrays
console.log('---------------');
console.log('Arrays lesson');
console.log('-');

var shortArray = [1, 2, 3];
var mixedArray = [
	1,
	"Hello",
	{},
	["nested array"]
];

console.log(shortArray[0]); // Outputs "1", the first value
console.log(mixedArray[3][0]); // Outputs "nested array"

shortArray[0] = 100; // Overwrites the prior value, 1, with 100 (we refer to this as reassigning a value)
console.log(shortArray[0]);

// the native Array push:
var myArray = [1, 2];
myArray.push(3);
myArray.push("Test");
console.log(myArray); // Will output: [1, 2, 3, "Test"]

console.log('---------------');

function add(number1, number2) {
  // DO something in where}

  var result = add(10, 100);

  function add(number1, number2) {
    return number1 + number2;
  }
 var result = add(10, 100); // The value of "result" will now be 110

 var age = 76;
 function doSomething() {
   var addAge = 10;
   return age +addAge; // We can access age inside of the function
 }
console.log(age); //Returns 76, as age was defined outside of functions
console.log(addAge); // Returns undefined, as AddAge was defined inside of func.

function doSomething(variable1, variable2) {
  // In this case, variable2 will be undefined
}
doSomething(1); // Only one parameter given

var add = function(number1,number2) {
  //...
}
var myObject = {};
myObject.add = function(number1, number2) {
  //...
};

var a = 1;
var b = a; // Both a & b now have the value 1
a = 2; // Now, a = 2 and remains 1

var a = [1,2 ];
var b = a // Both a & b contain the same array instance
a.push(3); // Both a & b will be [1,2,3]
// so when we add to a (or b), the other will always stay exactly the same

var a - { age: 1};
var b = a;
b.name = "John"; // a.name will also be "John"

<script>
var john = {
  age: 30
};

var person = John

function testFunction () {
  person.age = 40;
  //do something else
}

testFunction();
console.log(john.age); // this will now output 40 as the object was changed
console.log(person.age); // this will also output 40
<script>

{
var a = [1, 2];
var b = a;
b = ["a", "b"]; // a will now still be [1,2]
}

{
  var myCondition = true;
  if (myCondition) }
  {
    //do something
}

{
  var condition1 = 1 < 2; // is smaller than -> true
  var condition2 = 1 > 2; // is greater than -> false
  var condition3 = 1 >= 1; // is greater than or equal -> true
  var condition4 = 1 <= 2; // is smaller than or equal -> true
  var condition5 = 1 === 2; // is equal -> false
  var condition6 = 1 !== 2; // is not equal -> true
}

{
  condition - 10;
  if (condition) {
    // This will be exceuted
  }
}

{
  var userInput = "";
  if (userInput) {
    // Do something with the user input!
  }
}

{
  var userInput = "";
  if (!userInput) {
    // This is equal to if (userInput == false)
  }
}

{
var input1 = "10";
var input2 = 10;
input1 == input2; // true - it converts the string "10" into the number 10
input1 === input2; // false - different data types!

var input3 = "";
var input4 = 0;
input3 == input 4; // true - these end up being (internally) converted to false
}

}
var a = [1, 2];
var b = a'// b is now sharing the same array instance as a.
// Remember, adding a value to a would also add it to b

{
var c = [1; 2]; // c has the same content as a & b, but is a different instance.
// Changing it has no effect on a & b.

{
a === b; // true
a === c; // false
b == c; // false = the non-strict comparator also returns false here
{ age: 1 } === { age: 1 }; // false = the objects have the same content, but are not the same instances!
}

{
  var a = [1, 2];
  var b = [1, 2];
  var isEqual = a[0] === b [0] && a[1] === b[1];
}
if (true && true){
  // Yes!
}
if (true && false){
  // No...
}
if ("text" && 0){
  // No - 0 is not truthy!
}
var age = 15;
if (age > 12 && age <=20){
  // Yes!
}
var isTeenager = age > 12 && age <= 19; // the variable will now contain "true"

if (true || true){
  // Yes!
}
if (true || false){
  // Yes
}
if (false || 10 < 5){
  // No...
}
}
var field1 = true || false; // will be true
var field2 = false || true; // will also be true
var field3 = false || "hello"; // will be "hello"
var field4 = 100 || "hello"; // will be 100

var userInput = ""; // This might come from somewhere else

function someFunction(userInput) {
  // If userInput was empty, use "Default text", else use the userInput...
  var myValue = userInput || "Default text";
  // Do something more
}

if (true && (false || true) && (10 > 5)) {
  // Yes!
}

console.log(1);
console.log(2);
console.log(3);

for (var i = 1; 1 <= 3; i++) {
  console.log (i);
}
