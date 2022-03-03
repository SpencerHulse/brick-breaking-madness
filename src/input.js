export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          break;

        default:
          return;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          // If it is in fact traveling left, it stops
          // Used to prevent clunky movement
          if (paddle.speed < 0) paddle.stop();
          break;

        case 39:
          // If it is in fact traveling right, it stops
          if (paddle.speed > 0) paddle.stop();
          break;

        default:
          return;
      }
    });
  }
}
