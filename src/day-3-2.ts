import { input } from "./day-3-input";

const readSensor = (mostCommon: boolean) => {
  let filteredInput = input;
  let sensor = "";

  while (filteredInput.length > 1) {
    let zeroCount = 0;
    for (let i = 0; i < filteredInput.length; i++) {
      if (filteredInput[i][sensor.length] === "0") {
        zeroCount++;
      }
    }

    const zeroMostCommon = zeroCount > filteredInput.length / 2;
    sensor +=
      (zeroMostCommon && mostCommon) || (!zeroMostCommon && !mostCommon)
        ? "0"
        : "1";

    filteredInput = filteredInput.filter((val) => val.startsWith(sensor));
  }

  return filteredInput[0];
};

const oxygen = readSensor(true);
const co2 = readSensor(false);

console.log(parseInt(oxygen, 2) * parseInt(co2, 2));
