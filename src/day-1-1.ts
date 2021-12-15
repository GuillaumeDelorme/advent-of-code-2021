import { readInputFile } from "./utils";

const content = readInputFile("1-1");
let previous = Infinity;
let count = 0;
content
  .split("\n")
  .map((val) => parseInt(val))
  .forEach((val) => {
    if (val > previous) {
      count++;
    }
    previous = val;
  });

console.log(count);
