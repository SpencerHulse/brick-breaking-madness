import Paddle from "./src/paddle";
import InputHandler from "./src/input";

// Get the canvas element and apply the 2d conext
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d"); // ctx = context - Rendering context

// Width and height of the canvas, used in Paddle class
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// Specify an area to clear on the canvas
// This is the whole screen
ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

paddle.draw(ctx);

let lastTime = 0;

// images
let ball = document.getElementById("ball");

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  ctx.drawImage(ball, 10, 10, 16, 16);

  requestAnimationFrame(gameLoop);
}

gameLoop();
