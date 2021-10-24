function outputMultTableFor7() {
    const result = [];
    const num = 7;
    for (let i = 1; i < 10; i++) {
        result.push(`${num}x${i} = ${i * num}`);
    }

    console.log(result.join("\n"));
}

module.exports = outputMultTableFor7;
