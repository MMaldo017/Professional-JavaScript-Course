//=====================================================
//              JAVASCRIPT FUNDAMENTALS
//=====================================================

//=====================================================
// COMMENTS
//=====================================================

// Single-line comment

/*
    Multi-line comment

    Useful for:
    - Explaining code
    - Writing notes
    - Temporarily disabling code
*/


//=====================================================
// WHAT IS JAVASCRIPT?
//=====================================================

/*
JavaScript is a programming language that adds
behavior and interactivity to web pages.

Examples:
- Responding to button clicks
- Validating forms
- Changing HTML and CSS
- Creating animations
- Fetching data from APIs
- Building full web applications

The browser downloads your JavaScript, parses it
(reads and understands it), and then executes it.
*/


//=====================================================
// VARIABLES
//=====================================================

/*
Variables store information so it can be used later.

There are three ways to declare variables:

let
const
var
*/


//------------------------------
// let
//------------------------------

/*
- Can be reassigned
- Block scoped
- Preferred when the value will change
*/

let firstName = "Martin";

firstName = "Felix";

console.log(firstName);


//------------------------------
// const
//------------------------------

/*
- Cannot be reassigned
- Block scoped
- Preferred by default
- The variable reference cannot change
*/

const isTeacher = true;

// isTeacher = false; // Error


//------------------------------
// var
//------------------------------

/*
- Older way of declaring variables
- Function scoped
- Can be redeclared
- Can lead to bugs because it ignores block scope

Generally avoid using var in modern JavaScript.
*/

var city = "San Diego";


//=====================================================
// BLOCK SCOPE
//=====================================================

/*
Variables declared with let and const only exist
inside the block they were created in.
*/

if (true) {
    let age = 34;
    const job = "Instructor";

    console.log(age);
    console.log(job);
}

// console.log(age); // Error
// console.log(job); // Error


//=====================================================
// DATA TYPES
//=====================================================

/*
JavaScript has 7 primitive data types.

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

Primitive data types are immutable,
meaning their values cannot be changed directly.
*/


//=====================================================
// STRING
//=====================================================

/*
Stores text.

Can use:
"double quotes"
'single quotes'
`backticks`
*/

let name = "Martin";
let greeting = 'Hello';
let message = `Welcome!`;


//=====================================================
// NUMBER
//=====================================================

/*
Stores whole numbers and decimal numbers.
*/

let age = 34;
let price = 19.99;
let temperature = -12;


//=====================================================
// BOOLEAN
//=====================================================

/*
Represents one of two values:

true
false
*/

let isLoggedIn = true;
let hasPaid = false;


//=====================================================
// UNDEFINED
//=====================================================

/*
A variable has been declared,
but no value has been assigned yet.
*/

let favoriteFood;

console.log(favoriteFood); // undefined


//=====================================================
// NULL
//=====================================================

/*
Represents the intentional absence of a value.

Think of it as saying:

"There is no value here on purpose."
*/

let selectedUser = null;


//=====================================================
// BIGINT
//=====================================================

/*
Used for integers larger than
Number.MAX_SAFE_INTEGER.

Must end with the letter "n".
*/

let hugeNumber = 9007199254740993n;

console.log(Number.MAX_SAFE_INTEGER);


//=====================================================
// SYMBOL
//=====================================================

/*
Creates a unique identifier.

Even if two Symbols have the same description,
they are never equal.
*/

const id1 = Symbol("userId");
const id2 = Symbol("userId");

console.log(id1 === id2); // false


//=====================================================
// typeof
//=====================================================

/*
Returns the data type of a value.
*/

console.log(typeof "Hello");      // string
console.log(typeof 34);           // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (JavaScript bug)
console.log(typeof 34n);          // bigint
console.log(typeof Symbol());     // symbol


/*
IMPORTANT

This is one of JavaScript's oldest bugs.

typeof null returns "object"

Even though null is NOT actually an object.
*/

console.log(typeof null); // object


//=====================================================
// TYPE CONVERSION (TYPE CASTING)
//=====================================================

/*
Converting one data type into another.
*/


//------------------------------
// Number()
//------------------------------

let userAge = "17";

let convertedAge = Number(userAge);

console.log(convertedAge);
console.log(typeof convertedAge);


//------------------------------
// String()
//------------------------------

let score = 100;

let scoreText = String(score);

console.log(scoreText);
console.log(typeof scoreText);


//------------------------------
// Boolean()
//------------------------------

console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean("Hello"));    // true
console.log(Boolean(""));         // false


//------------------------------
// parseInt()
//------------------------------

let wholeNumber = parseInt("42.8");

console.log(wholeNumber); // 42


//------------------------------
// parseFloat()
//------------------------------

let decimalNumber = parseFloat("42.8");

console.log(decimalNumber); // 42.8


//=====================================================
// TRUTHY & FALSY VALUES
//=====================================================

/*
Whenever JavaScript expects a boolean,
it automatically converts values to
either true or false.

There are only 8 falsy values.
*/


// Falsy Values

false
0
-0
0n
""
null
undefined
NaN


// Everything else is truthy.

console.log(Boolean("Martin"));   // true
console.log(Boolean(100));        // true
console.log(Boolean(-25));        // true

console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false


//=====================================================
// NaN (Not a Number)
//=====================================================

/*
Represents an invalid mathematical result.

Even though it means "Not a Number",
its data type is still "number".
*/

console.log(0 / 0);             // NaN
console.log(Number("hello"));   // NaN

console.log(typeof NaN);        // number


//=====================================================
// BEST PRACTICES
//=====================================================

/*
✓ Use const whenever possible.

✓ Use let when the value needs to change.

✓ Avoid var in modern JavaScript.

✓ Use descriptive variable names.

Examples:

firstName
studentAge
totalPrice
isLoggedIn

✓ Use camelCase for variables.

✓ Write comments that explain WHY
something is happening instead of
simply describing WHAT the code does.
*/