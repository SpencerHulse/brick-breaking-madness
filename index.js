import Game from "./src/game";

// Get the canvas element and apply the 2d conext
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d"); // ctx = context - Rendering context

// Width and height of the canvas, used in Paddle class
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;

// images

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  // Specify an area to clear on the canvas
  // This is the whole screen
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
