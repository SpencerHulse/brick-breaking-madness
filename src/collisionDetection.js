export function detectCollision(ball, gameObject) {
  // Check collision with object
  let topOfBall = ball.position.y;
  let bottomOfBall = ball.position.y + ball.size;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;

  // Accounts for the ball hitting any side of the object
  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    // Maybe the positions should have half the ball subtracted/added respectively?
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
  ) {
    // Simply states where the ball is colliding with an object
    return true;
  } else {
    return false;
  }
}
