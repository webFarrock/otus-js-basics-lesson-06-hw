function isCircleInSquare(circle, square) {
  return Math.sqrt(square) > 2 * Math.sqrt(circle / Math.PI);
}

export { isCircleInSquare };
