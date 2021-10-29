const isStringWithOneWord = input => {
    input = input.trim();

    if (!input) {
        return false;
    }

    return input.split(' ').length === 1
};

export {
    isStringWithOneWord,
};
