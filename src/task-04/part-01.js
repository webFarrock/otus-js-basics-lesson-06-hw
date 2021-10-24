const INPUT_ERROR_MESSAGE = "age must be a number greater than 0";

function makeAdmin() {
    const user = {name: 'John'};
    const ageInput = Number(prompt('Input user age', null));

    if (isNaN(ageInput) || ageInput < 1) {
        throw new Error(INPUT_ERROR_MESSAGE)
    }

    user.age = ageInput;

    const admin = Object.assign({}, user);
    admin.role = 'admin';

    const {name, age, role} = admin;

    console.log([
        `name: ${name}`,
        `age: ${age}`,
        `role: ${role}`,
    ].join("\n"));

    return admin;
}

module.exports = {
    makeAdmin,
    INPUT_ERROR_MESSAGE,
};
