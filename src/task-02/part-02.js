const INPUT_ERROR_MESSAGE = "number must be from 1 to 12";

const monthNames = {
    1: 'январь',
    2: 'февраль',
    3: 'март',
    4: 'апрель',
    5: 'май',
    6: 'июнь',
    7: 'июль',
    8: 'август',
    9: 'сентябрь',
    10: 'октябрь',
    11: 'ноябрь',
    12: 'декабрь',
};

function outputMonthName(a, b) {
    const monthNumber = Number(prompt('Input number from 1 to 12', null));

    if (isNaN(monthNumber) || !monthNames[monthNumber]) {
        throw new Error(INPUT_ERROR_MESSAGE)
    }

    console.log(monthNames[monthNumber]);
}

export {
    outputMonthName,
    INPUT_ERROR_MESSAGE,
};
