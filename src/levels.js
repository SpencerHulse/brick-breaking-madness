import Brick from "./brick";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          // Each brick is 80 pixels in size (1/10th of the game screen)
          x: 80 * brickIndex,
          // Distance from top
          y: 75 + 24 * rowIndex
        };

        bricks.push(new Brick(game, position));
      }
    });
  });

  return bricks;
}

// 1 = brick, 0 = space
export const level1 = [
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
