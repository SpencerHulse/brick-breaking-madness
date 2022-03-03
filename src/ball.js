export default class Ball {
  constructor() {
    this.image = document.getElementById("ball");
  }

  draw(ctx) {
    return ctx.drawImage(this.image, 10, 10, 16, 16);
  }

  update() {}
}
