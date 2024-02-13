// Q-6
console.log(" There is no exercise better for the heart than reaching down and lifting people up.");

// Q-7
let a = "10";
let b = 10;
a = parseInt(a);
if (a === b && a == b) {
  console.log("its Equal");
} else {
  console.log("its not Equal");
}

// Q.8 Write a JavaScript Program to find the area of a triangle?
// formual 1/2 base*height
let base = 2;
let height = 10;
let areaOfTriangle = 0.5 * (base * height);
console.log(areaOfTriangle);

// Q.11 Find circumference of Rectangle formula : C = 4 * a ?
function circumference(a) {
  return 4 * a;
}
a = 5;
console.log("circumference of a is " + circumference(a));

// Q.12 WAP to convert years into days and days into years?

// Q.13 Convert temperature Fahrenheit to Celsius?

// formual c=(f-32)*5/9;
// let f = parseInt(prompt("enter value", "10"));
let f = 10;

function calsius(f) {
  return (parseInt(f - 32) * 5) / 9;
}
console.log(f + " fahrenheit is equal to " + calsius(f));

// Q.14 Write a JavaScript exercise to get the extension of a filename.?
let filename = "index.html";
console.log(filename.split(".").pop());
filename = "main.js";
console.log(filename.split(".").pop());

// Q.15 What is the result of the expression (5 > 3 && 2 < 4)?
if (5 > 3 && 2 < 4) {
  console.log("true");
} else {
  console.log("false");
}

// Q.16 What is the result of the expression (true && 1 && "hello")?
if (true && 1 && "hello") {
  console.log(true, "16");
} else {
  console.log(false, "16");
}

// Q.17 What is the result of the expression true && false || false && true?
if ((true && false) || (false && true)) {
  console.log("true");
} else {
  console.log("false");
}

// Q.22 Check Number Is Positive or Negative in JavaScript?
let value = 20;
if (value > 0) {
  console.log("it is positive");
} else {
  console.log("it is negetive");
}

// Q.23 Find the Character Is Vowel or Not ?
let result;
let n = "O";
function vowel(n) {
  if (n == "A" || n == "E" || n == "I" || n == "O" || n == "U") {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(vowel(n));

// Q.24 Write to check whether a number is negative, positive or zero?

let num = -20;
if (num > 0) {
  console.log("positive");
} else if (num == 0) {
  console.log("zero");
} else {
  console.log("negetive");
}

// Q.25 Write to find number is even or odd using ternary operator in JS?
let number = 10;
number % 2 == 0 ? console.log("even") : console.log("odd");

// Q.26 Write find maximum number among 3 numbers using ternary operator in JS?
let num1 = 10;
let num2 = 9;
let num3 = 20;

num1 >= num2 && num1 >= num3 ? console.log(num1 + " is largest") : num2 >= num1 && num2 >= num3 ? console.log(num2 + " is largest ") : console.log(num3 + " is largest ");

// Q.27 Write to find minimum number among 3 numbers using ternary operator in JS?
// let num1 = 10;
// let num2 = 9;
// let num3 = 20;

num1 <= num2 && num1 <= num3 ? console.log(num1 + " is smallest") : num2 <= num1 && num2 <= num3 ? console.log(num2 + " is smallest ") : console.log(num3 + " is smallest ");

// cdondition ? log : condition ? log : log ---------> syntax of ternary operator

//  Q.29 Write to show
// i. Monday to Sunday using switch case in JS?

// let day = Number(prompt("enter a day number", "0"));
let day = 6;
switch (day) {
  case 0:
    day = "sunday";
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
  case 6:
    day = "Saturday";
}
console.log("today is " + day);
console.log(new Date().getDay());

// ii. Vowel or Consonant using switch case in JS?
let choice = "L";
switch (choice) {
  case "A":
    choice = "A is vowel";
    // console.log(choice + " is vowel");
    break;
  case "E":
    choice = "E is vowel";
    break;
  case "I":
    choice = "I is vowel";
    break;
  case "O":
    choice = "O is vowel";
    break;
  case "U":
    choice = "U is vowel";
    break;
  default:
    console.log(choice + " is a constant");
    break;
}
console.log(choice);

// Q.31 Write a print 972 to 897 using for loop in JS?
let z;
for (z = 972; z >= 897; z--) {
  console.log(z);
}
// Q.32 Write to print factorial of given number?
let factNum;
function factorial(factNum) {
  for (i = 1; i <= factNum; i++) {
    console.log(factorial(5));
  }
  return factNum * (factNum - 1);
}
//   console.log(factorial(5), "is");
//
// Q.33 Write to print Fibonacci series up to given numbers?

// let fibonum1 = 1;
// let fibonum2 = 2;
// let fibonacci;
// let i;
// for (i = 1; i <=  i++) {
//   fibonacci = fibonum1 + fibonum2;
//   fibonum1 = fibonum2;
//   fibonum2 = fibonacci;
//   console.log(fibonacci);
// }
// Q.37 Use console.log() and escape characters to print the following pattern in JS?
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j == 1) {
      document.write(i + " ");
    }
    if (j == 2) {
      document.write(1 + " ");
    }
    if (j == 3) {
      document.write(i + " ");
    }
    if (j == 4) {
      document.write(i * i + " ");
    }
  }
  document.write(i * i * i + " ");
  document.write("<br>");
}
// Q.38 Use pattern in console.log in JS?
// 1) 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
for (let x = 1; x <= 5; x++) {
  for (let y = 5; y < x; y--) {
    document.write("1 j");
  }
  document.write("0 i");
  document.write("<br>");
}
