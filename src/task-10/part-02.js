function isEmail() {
  // eslint-disable-next-line
  const reg = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
  const input = prompt("Input email", "");
  return reg.test(input);
}

export { isEmail };
