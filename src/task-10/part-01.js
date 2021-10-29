function isDate(){
    const reg = /\d{2}[\.\/]\d{2}[\.\/]\d{4}/;
    const input = prompt('Input date with format DD.MM.YYYY', '');
    return reg.test(input);
}


export {
    isDate,
};
