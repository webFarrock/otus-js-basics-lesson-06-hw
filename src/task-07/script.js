const textBlockId = 'textList';
const inputId = 'inputText';
const appendBtnId = 'appendBtn';
const textListMaxLength = 5;
const textList = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'Eius officia quam suscipit vitae.',
    'Blanditiis corporis illo mollitia nam neque unde vel!',
];

const initApp = (appEl) => {

    const maxTextListLength = 5;

    const textBlockEl = createTextBlock(textBlockId);
    const inputEl = createInput(inputId);
    const appendBtnEl = createAppendBtn(appendBtnId);

    appEl.appendChild(textBlockEl);
    appEl.appendChild(inputEl);
    appEl.appendChild(appendBtnEl);

    renderTextList(textBlockEl, textList);

    appendBtnEl.addEventListener('click', () => updateTextBlock(appEl));
}

const updateTextBlock = (appEl) => {
    const inputEl = appEl.querySelector(`#${inputId}`);

    if (!inputEl.value) {
        return;
    }

    if (textList.length >= textListMaxLength) {
        textList.shift();
    }

    textList.push(inputEl.value);
    inputEl.value = '';

    const textBlockEl = appEl.querySelector(`#${textBlockId}`);

    renderTextList(textBlockEl, textList);
}

const createInput = (inputId) => {
    const el = document.createElement('input');
    el.id = inputId;
    el.type = 'text';
    return el;
}

const createTextBlock = (textBlockId) => {
    const el = document.createElement('div');
    el.id = textBlockId;
    return el;
}

const createAppendBtn = (appendBtnId) => {
    const el = document.createElement('button');
    el.id = appendBtnId;
    el.innerText = "Добавить";
    return el;
}

const createTextItem = (text) => {
    const el = document.createElement('p');
    el.innerText = text;
    return el;
}

const renderTextList = (textBlockEl, textList) => {
    textBlockEl.innerHTML = '';

    textList.forEach(item => {
        const el = document.createElement('p');
        el.innerText = item;
        textBlockEl.appendChild(el)
    });
}

module.exports = {
    initApp,
    textBlockId,
    inputId,
    appendBtnId,
    textListMaxLength,
}
