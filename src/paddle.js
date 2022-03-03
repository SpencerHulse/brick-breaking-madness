// Paddle class that is exported by default
export default class Paddle {
  // Constructor takes canvas width and height
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;

    this.width = 150;
    this.height = 20;

    this.maxSpeed = 7;
    this.speed = 0;

    // The position affects where the paddle is on the canvas
    // Starts in the center near the bottom
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  // Draw is used to adjust the position of the paddle
  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // deltaTime can be dt
  update(deltaTime) {
    // An if/else to avoid a blank screen before the first deltaTime is declared
    if (!deltaTime) return;
    // The addition of deltaTime allows it to work the same on multiple frame rates
    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x > this.gameWidth - this.width)
      this.position.x = this.gameWidth - this.width;
  }
}