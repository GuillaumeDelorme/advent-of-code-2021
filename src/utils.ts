import fs from "fs";

export const readInputFile = (day: number) =>
  fs.readFileSync(`./input/day-${day}.txt`, "utf8");
