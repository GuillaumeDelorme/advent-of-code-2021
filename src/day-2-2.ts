import { input } from "./day-2-input";

let horizontalPos = 0;
let depth = 0;
let aim = 0;
input.forEach((command) => {
  switch (command.direction) {
    case "down":
      aim += command.units;
      break;
    case "up":
      aim -= command.units;
      break;
    case "forward":
      horizontalPos += command.units;
      depth += aim * command.units;
      break;
  }
});

console.log(depth * horizontalPos);
