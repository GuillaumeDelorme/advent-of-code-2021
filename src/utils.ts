import fs from "fs"

export const readInputFile = (day: string) => fs.readFileSync(`./input/day-${day}.txt`, 'utf8')