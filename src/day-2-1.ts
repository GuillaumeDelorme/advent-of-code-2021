import { input } from "./day-2-input";

let horizontalPos = 0;
let depth = 0;
input.forEach((command) => {
  switch (command.direction) {
    case "down":
      depth += command.units;
      break;
    case "up":
      depth -= command.units;
      break;
    case "forward":
      horizontalPos += command.units;
      break;
  }
});

console.log(depth * horizontalPos);
