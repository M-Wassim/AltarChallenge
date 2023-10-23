import { Request, Response } from "express";

export const getMatrix = (req: Request, res: Response) => {
  const inputchar = req.query.inputChar;
  if (typeof inputchar === "string") {
    res.json(generateMatrix(inputchar));
  } else {
    res.status(400).json({ error: "Invalid inputChar" });
  }
};

function generateMatrix(inputChar: string) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let inputCharCount = 0;

  if (inputChar == "") {
    inputCharCount = 0;
  } else {
    inputCharCount = Math.floor(0.2 * 100);
  }

  const matrix = [];

  for (let row = 0; row < 10; row++) {
    const rowArray = [];

    for (let col = 0; col < 10; col++) {
      if (inputCharCount > 0) {
        inputCharCount--;
        rowArray.push(inputChar);
      } else {
        const randomIndex = Math.floor(Math.random() * characters.length);
        rowArray.push(characters[randomIndex]);
      }
    }

    matrix.push(rowArray);
  }

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const i = Math.floor(Math.random() * 10);
      const j = Math.floor(Math.random() * 10);
      [matrix[row][col], matrix[i][j]] = [matrix[i][j], matrix[row][col]];
    }
  }

  let count = calculateCode(matrix);
  console.log(count);

  return { matrix, count };
}

function calculateCode(grid: any) {
  let now = new Date();
  let seconds = now.getSeconds();
  seconds.toString();

  let twoDigitSeconds = seconds < 10 ? "0" + seconds : seconds.toString();
  console.log("seconds:", twoDigitSeconds);

  let char1 =
    grid[twoDigitSeconds.toString()[0]][twoDigitSeconds.toString()[1]];
  let char2 =
    grid[twoDigitSeconds.toString()[1]][twoDigitSeconds.toString()[0]];

  console.log("char1", char1);
  console.log("char2", char2);

  let char1Count = countCharacter(grid, char1);
  let char2Count = countCharacter(grid, char2);

  char1Count = char1Count > 9 ? char1Count % 9 : char1Count;
  char2Count = char2Count > 9 ? char2Count % 9 : char2Count;

  console.log("char1Count", char1Count);
  console.log("char2Count", char2Count);

  let code = char1Count.toString() + char2Count.toString();

  return code;
}

function countCharacter(grid: any, character: any) {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === character) {
        count++;
      }
    }
  }
  return count;
}
