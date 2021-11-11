function outputMinutesFromDayBeginning() {
  const now = new Date();
  const result = now.getHours() * 60 + now.getMinutes();
  console.log(result);
}

export { outputMinutesFromDayBeginning };
