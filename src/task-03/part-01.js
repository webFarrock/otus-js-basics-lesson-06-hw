function outputNumbersSumFrom50To100() {
  let result = 0;

  for (let i = 50; i <= 100; i += 1) {
    result += i;
  }

  console.log(result);
}

export {
  outputNumbersSumFrom50To100,
};
