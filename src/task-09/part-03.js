const INPUT_ERROR_MESSAGE = 'a, b, c must be are nubmers';
const NO_SOLUTION = 'There is no solution';

function quadraticEquation() {
  const input = prompt('Input numbers a, b, c separated with whitespace', '');
  const inputArr = input.split(' ')
    .map((item) => {
      if (!/^-?\d+$/.test(item)) {
        return false;
      }
      return Number(item);
    })
    .filter((item) => !Number.isNaN(item));

  if (inputArr.length !== 3) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }

  const [a, b, c] = inputArr;

  if (a === 0) {
    console.log(NO_SOLUTION);
    return;
  }

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    console.log(NO_SOLUTION);
    return;
  }

  const quadraticRoots = [];

  if (discriminant === 0) {
    quadraticRoots.push((-b + Math.sqrt(discriminant)) / (2 * a));
  } else if (discriminant > 0) {
    quadraticRoots.push((-b + Math.sqrt(discriminant)) / (2 * a));
    quadraticRoots.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  // eslint-disable-next-line
  console.log(`discriminant: ${discriminant}, quadraticRoots: ${quadraticRoots.join(', ')}`);
}

export {
  INPUT_ERROR_MESSAGE,
  NO_SOLUTION,
  quadraticEquation,
};
