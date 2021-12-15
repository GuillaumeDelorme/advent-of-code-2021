import { readInputFile } from "./utils";

export const input = readInputFile(1)
  .split("\n")
  .map((val) => parseInt(val));
