const isStringWithOneWord = (input) => {
  const value = input.trim();

  if (!value) {
    return false;
  }

  return value.split(' ').length === 1;
};

export {
  isStringWithOneWord,
};
