const arrayElemSum = items => {
    const result = items.reduce((acc, item) => acc += item, 0);
    console.log(result);
};

module.exports = arrayElemSum;
