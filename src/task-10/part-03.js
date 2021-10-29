function isPhone() {
    const reg = /\+\d[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0,1}\d{2}/;
    const input = prompt('Input phone with format like +7 999 999-99-99, separators are not required', '');

    return reg.test(input);
}


export {
    isPhone,
};
