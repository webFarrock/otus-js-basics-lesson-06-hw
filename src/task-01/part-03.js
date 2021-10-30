const INPUT_ERROR_MESSAGE = 'number must be with three digits';
function digitsSumOutput() {
  const num = Math.abs(prompt('Input three - digit number', null));

  if (num < 100 || num > 999) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }

  const digitsSum = String(num).split('')
    .reduce((acc, i) => acc + Number(i), 0);
  console.log(digitsSum);
}

export {
  digitsSumOutput,
  INPUT_ERROR_MESSAGE,
};
