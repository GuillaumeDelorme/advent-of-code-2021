import { input } from "./day-1-input";

let previous = Infinity;
let count = 0;
input.forEach((val) => {
  if (val > previous) {
    count++;
  }

  previous = val;
});

console.log(count);
