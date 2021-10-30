const INVALID_ARGUMENTS = 'Invalid arguments';

const isDateFormatCorrect = (dateStr) => /^\d{2}\.\d{2}\.\d{4}$/.test(dateStr);

function getYoungerDate(firstUserBirthDay, secondUserBirthDay) {
  if (
    !isDateFormatCorrect(firstUserBirthDay)
    || !isDateFormatCorrect(secondUserBirthDay)
  ) {
    throw new Error(INVALID_ARGUMENTS);
  }

  try {
    const [firstDay, firstMonth, firstYear] = firstUserBirthDay.split('.');
    const firstTs = Number((new Date(firstYear, firstMonth - 1, firstDay)));

    const [secondDay, secondMonth, secondtYear] = secondUserBirthDay.split('.');
    const secondTs = Number(new Date(secondtYear, secondMonth - 1, secondDay));

    return firstTs > secondTs ? firstUserBirthDay : secondUserBirthDay;
  } catch (e) {
    console.error(e);
    throw new Error(INVALID_ARGUMENTS);
  }
}

export {
  INVALID_ARGUMENTS,
  getYoungerDate,
};
