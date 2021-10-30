const INPUT_ERROR_MESSAGE = 'incorrect date';

const weekDayNames = {
  0: 'воскресенье',
  1: 'понедельник',
  2: 'вторник',
  3: 'среда',
  4: 'четверг',
  5: 'пятница',
  6: 'суббота',
};

const isDateFormatCorrect = (dateStr) => /^\d{2}\.\d{2}\.\d{4}$/.test(dateStr);

function outputWeekDayName() {
  const dateStr = prompt('Input date with format "DD.MM.YYYY"', '');
  if (!isDateFormatCorrect(dateStr)) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }

  const [day, month, year] = dateStr.split('.');

  try {
    const weekDay = (new Date(year, month - 1, day)).getDay();
    console.log(weekDayNames[weekDay]);
  } catch (e) {
    console.error(e);
    throw new Error(INPUT_ERROR_MESSAGE);
  }
}

export {
  INPUT_ERROR_MESSAGE,
  outputWeekDayName,
};
