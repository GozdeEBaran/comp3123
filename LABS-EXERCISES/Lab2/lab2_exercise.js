// exercise 1
console.log("Exercise 1:");
const numbers = [1, 2, 3, 4, 5];

const square = (n) => n * n;

for (const n of numbers) {
  console.log(`${n} → ${square(n)}`);
}

// exercise 2

console.log("\nExercise 2:");
const capitalize = (str = "") => {
  const [first = "", ...rest] = [...str];
  return `${first.toUpperCase()}${rest.join("")}`;
};
console.log(capitalize("gozde")); // "Gozde"

// exercise 3

console.log("\nExercise 3:");
const colors = ["red", "green", "blue", "cyan", "magenta", "yellow", "black"];

const cappedColors = colors.map(capitalize);
console.log(cappedColors);

// exercise 4

console.log("\nExercise 4:");
const values = [3, 9, 12, 20, 27, 5, 42, 19, 21];

const twentyAndUp = values.filter((v) => v >= 20);
console.log(twentyAndUp);
// [20, 27, 42, 21]

// exercise 5
console.log("\nExercise 5:");
const data = [1, 2, 3, 4, 5];
const sum = data.reduce((acc, v) => acc + v, 0); // 15
const product = data.reduce((acc, v) => acc * v, 1); // 120

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  info() {
    return `${this.model} (${this.year})`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance = 0) {
    super(model, year);
    this.balance = balance;
  }
  pay(amount) {
    this.balance -= amount;
    return this.balance;
  }
  details() {
    return `${this.info()} — balance: $${this.balance}`;
  }
}

const s = new Sedan("Accord", 2020, 15000);
s.pay(1000);
console.log(s.details());
