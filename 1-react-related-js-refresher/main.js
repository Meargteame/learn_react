// // Javascript refresher for react related staff
// // normal function
// function getReactangleArea(width, height) {
//   return width * height;
// }

// console.log(getReactangleArea(10, 20));

// const getReactangleArea2 = (width, height) => {
//   return width * height;
// };

// const result = getReactangleArea2(10, 30);
// console.log(result);

// // implicit reuturn
// const getReactangleArea3 = (w, h) => w * h;
// const sayHello = () => console.log("Hello");

// console.log(getReactangleArea2(10, 40));
// sayHello();

// // using arrow functions as a callback function

// const numbers = [1, 2, 3, 4, 5];
// const quadraple = numbers.map(function (number) {
//   return number * 4;
// });

// const quadras = numbers.map((number) => number * 4);
// console.log(quadraple);
// console.log(quadras);

// const nums = [1, 2, 3, 4];
// const double = nums.map(function (num) {
//   return num * 2;
// });

// const numss = nums.map((num) => num * 2);
// console.log(numss);

// // arrow can not call arrow functions before initializing them
// function sayRegular() {
//   console.log("Regular");
// }
// function sayArrow() {
//   console.log("Arrow");
// }

// sayRegular();
// sayArrow();

// // this keyword

const person = {
  name: "Brad",
  sayHelloRegular: function () {
    console.log(this);
  },
  sayHelloArrow: () => {
    console.log(this);
  },
};

person.sayHelloRegular();
person.sayHelloArrow();

// Template literals
const age = 32;
const name = "John";
const greetings = "Hello my name is " + name + "age is :" + age;

const greeting = `Hello my name is ${name} and I'm ${age} years old `;
console.log(greeting);

// ternary operators

const number = 2;
let message;

if (number % 2 == 0) {
  message = "even number";
} else {
  message = "odd number";
}
console.log(message);
