//question 1

let sentencee = "the quick brown fox";
let word = sentencee.split(" ");
let capsen = word.map(function (word) {
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
});
console.log(capsen.join(" "));

//question 2

function findMax(a, b, c) {
  return Math.max(a, b, c);
}
console.log(findMax(1, 0, 1));
console.log(findMax(0, -10, -20));
console.log(findMax(1000, 510, 440));

//question 3

function right(str) {
  return str.length <= 3 ? str : str.slice(-3) + str.slice(0, -3);
}

console.log(right("Python")); // honPyt
console.log(right("JavaScript")); // iptJavaScr
console.log(right("Hi")); // Hi

// question 4

function angleType(angle) {
  switch (true) {
    case angle > 0 && angle < 90:
      return "Acute angle";
    case angle === 90:
      return "Right angle";
    case angle > 90 && angle < 180:
      return "Obtuse angle";
    case angle === 180:
      return "Straight angle";
    default:
      return "Not a valid angle";
  }
}

console.log(angleType(47)); // Acute angle
console.log(angleType(90)); // Right angle
console.log(angleType(145)); // Obtuse angle
console.log(angleType(180)); // Straight angle

//question 5

function array_max_sum(arr, k) {
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
