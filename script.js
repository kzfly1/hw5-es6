let name = "Alice";
if (true) {
  let name = "Bob";
  console.log(name);
}
console.log(name);

//let is block-scoped, ensuring the declaration inside a scope does not pollute the outer scope.

//Arrow Functions

const add = (a, b) => a + b;
/*
箭头函数如何与常规函数不同地处理this：
  常规函数：this的值在函数调用时确定，可能会改变。（看调用）
  箭头函数：this的值在定义时确定，保持不变。 （看定义环境）
*/

//Template Literals
let greeting = `Hello, ${name}! Welcome to the course`;
console.log(greeting);

//Destructuring 使用解构赋值从 person 对象中提取 name 和 age 属性。然后编写一个函数，在参数列表中解构对象的属性。
const person = {
  name: "Alice",
  age: 25,
  city: "Sydney",
};

const { name: personName, age: personAge } = person;

const printPersonInfo = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};
printPersonInfo(person);

//作业5. 默认参数（Default Parameters）
//任务：编写一个计算机行面积的函数。如果没有提供高度，假设它是一个正方形。使用默认参数为高度设置默认值。
function calculateArea(width, height = width) {
  return width * height;
}
console.log(calculateArea(5));
console.log(calculateArea(5, 10));

//作业6. Rest/Spread 运算符
//任务: 使用 Rest 运算符创建一个函数，能够将任意数量的参数相加。然后使用 Spread 运算符合并两个数组。
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4));

let arr1 = [1, 2];
let arr2 = [3, 4];

let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);
