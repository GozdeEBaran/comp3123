let add = (a, b) => a + b;
let multiply = (a, b) => a * b;

let calculator = (num1, num2, operation) => {
  const ans = operation(num1, num2);
  return ans;
};

console.log(calculator(5, 10, add));
console.log(calculator(5, 10, multiply));
console.log(
  calculator(5, 10, (a, b) => {
    return a - b;
  })
);

// Callback function example
// setInterval(() => {
//     console.log(new Date().toLocaleTimeString());
// }, 1000);

// setTimeout(() => {
//     console.log("This message is shown after 2 seconds");
// }, 2000);
