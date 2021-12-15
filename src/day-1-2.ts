import { input } from "./day-1-input";

let previousSum = Infinity;
let count = 0;
for (let i = 0; i < input.length - 2; i++) {
  const sum = input[i] + input[i + 1] + input[i + 2];

  if (sum > previousSum) {
    count++;
  }

  previousSum = sum;
}

console.log(count);
