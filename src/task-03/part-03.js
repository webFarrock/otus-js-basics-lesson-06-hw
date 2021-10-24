const INPUT_ERROR_MESSAGE = "number must be greater than 0";

function outputAverage() {
    const num = Number(prompt('Input number greater than 0', null));
    let oddSum = 0;
    let oddCount = 0;

    if (isNaN(num) || num < 1) {
        throw new Error(INPUT_ERROR_MESSAGE)
    }

    for (let i = 1; i <= num; i++) {
        if (i % 2) {
            oddSum += i;
            oddCount++;
        }
    }

    console.log(oddSum / oddCount);
}

module.exports = {
    outputAverage,
    INPUT_ERROR_MESSAGE,
};
