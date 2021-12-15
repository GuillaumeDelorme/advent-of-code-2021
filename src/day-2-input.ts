import { readInputFile } from "./utils";

export type Direction = "forward" | "down" | "up";

export type Command = {
  direction: Direction;
  units: number;
};

const inputContent = readInputFile(2);

export const input: Array<Command> = inputContent.split("\n").map((line) => {
  const split = line.split(" ");
  return {
    direction: split[0] as Direction,
    units: parseInt(split[1]),
  };
});
