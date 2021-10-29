const INPUT_ERROR_MESSAGE = "Radius must be a positive number";

function outputCircleLengthAndArea() {
    const radiusInput = prompt('Input circle radius', null);

    if (!/^\d+$/.test(radiusInput)) {
        throw new Error(INPUT_ERROR_MESSAGE);
    }

    const radius = Number(radiusInput);

    if (isNaN(radius) || radius < 0) {
        throw new Error(INPUT_ERROR_MESSAGE);
    }

    const length = Math.PI * (radius * 2);
    const area = (radius ** 2) * Math.PI / 4;
    const result = [
        `length: ${length}`,
        `area: ${area}`,
    ];

    console.log(result.join(', '));
}

export {
    outputCircleLengthAndArea,
    INPUT_ERROR_MESSAGE,
};
