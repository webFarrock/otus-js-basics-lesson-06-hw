const INPUT_ERROR_MESSAGE = 'age must be a number greater than 0';

function makeAdmin() {
  const user = { name: 'John' };
  const ageInput = Number(prompt('Input user age', null));

  if (Number.isNaN(ageInput) || ageInput < 1) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }

  user.age = ageInput;

  const admin = { ...user };
  admin.role = 'admin';

  const { name, age, role } = admin;

  console.log([
    `name: ${name}`,
    `age: ${age}`,
    `role: ${role}`,
  ].join('\n'));

  return admin;
}

export {
  makeAdmin,
  INPUT_ERROR_MESSAGE,
};
