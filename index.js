import Paddle from "./src/paddle";
import InputHandler from "./src/input";
import Ball from "./src/ball";

// Get the canvas element and apply the 2d conext
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d"); // ctx = context - Rendering context

// Width and height of the canvas, used in Paddle class
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

paddle.draw(ctx);

let lastTime = 0;

// images
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  // Specify an area to clear on the canvas
  // This is the whole screen
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  ball.update(deltaTime);
  ball.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
