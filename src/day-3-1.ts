import { input } from "./day-3-input";

const lineLength = input[0].length;

let gamma = "";
let epsilon = "";

for (let i = 0; i < lineLength; i++) {
  let zeroCount = 0;
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] === "0") {
      zeroCount++;
    }
  }

  const zeroMostCommon = zeroCount > input.length / 2;
  gamma += zeroMostCommon ? "0" : "1";
  epsilon += zeroMostCommon ? "1" : "0";
}

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
