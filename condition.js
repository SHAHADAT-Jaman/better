// 1.  the maximum between two numbers

const max = Math.max(10, 5);
console.log(max);


// 2. a number is negative, positive or zero

const num = 12;
if (num > 0) {
    console.log(num + " is positive");
  } else if (num < 0) {
    console.log(num + " is negative");
  } else {
    console.log(num + " is zero");
  }

// 3.  a number is divisible by 10 or not:
const number1 = 50;

if(number1 % 10 == 0) {
    console.log("The number is divisible.");
}else {
    console.log("The number is not divisible.");
}

  //4.  even or odd

const number = 5;

if(number % 2 == 0) {
    console.log("The number is even.");
}else {
    console.log("The number is odd.");
}

//5. a character is in the alphabet or not:

// const characterAlphabet = A ;

// if(characterAlphabet) {
//   console.log("correct or success.. ✅")
// }else {
//   console.log("incorrect! .. ❌")
// }

// 6.  the temperature is hot, cold or normal:

const temp = 27;

if (temp >= 30) {
  console.log("temp is hot!")
} else if (temp >= 26) {
  console.log("temp is normal.")
}else {
  console.log("temp is cold!")
}

// 7.

const number2 = 95;

if (number2 >= 100) {
  console.log("number2 is maximum")
} else if (number2 >= 1) {
  console.log("number2 is middle")
}else {
  console.log("number2 is low")
}

// 8.  even or odd

const number3 = 5;

if(number3 % 2 == 0) {
    console.log("The number3 is even.");
}else {
    console.log("The number3 is odd.");
}

// 9. numOne and numTwo, are both greater than 30:

const numOne = 40;
const numTwo = 50;

if (numOne) {
  console.log("true");
}else {
  console.log("false")
}

//10. Teenager:

const age = 18;

if (age <= 12 && age > 0) {
  console.log("You are a children or a baby.");
} else if (age <= 19 && age > 12) {  
  console.log("You are a teenger.");
} else if (age < 130 && age > 19) {
  console.log("You are a man.");
} else {
  console.log("You are not a human.");
}

console.log("Git Explained");
