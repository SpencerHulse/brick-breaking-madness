export default class Ball {
  constructor(game) {
    this.image = document.getElementById("ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.speed = { x: 4, y: 2 };
    this.position = { x: 10, y: 10 };
    this.size = 16;
  }

  draw(ctx) {
    return ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // Wall on left or right of the screen
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    // Wall on the top or bottom of the screen
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // Check collision with paddle
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle = leftSideOfPaddle + this.game.paddle.width;

    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftSideOfPaddle &&
      this.position.x <= rightSideOfPaddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = topOfPaddle - this.size;
    }
  }
}
