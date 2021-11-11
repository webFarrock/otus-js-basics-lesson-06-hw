const textBlockId = "textList";
const inputId = "inputText";
const appendBtnId = "appendBtn";
const textListMaxLength = 5;
const textList = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "Eius officia quam suscipit vitae.",
  "Blanditiis corporis illo mollitia nam neque unde vel!",
];

const createInput = (elId) => {
  const el = document.createElement("input");
  el.id = elId;
  el.type = "text";
  return el;
};

const createTextBlock = (elId) => {
  const el = document.createElement("div");
  el.id = elId;
  return el;
};

const createAppendBtn = (elId) => {
  const el = document.createElement("button");
  el.id = elId;
  el.innerText = "Добавить";
  el.hidden = true;
  return el;
};

const renderTextList = (textBlockEl, textListAr) => {
  const textBlock = textBlockEl;
  textBlock.innerHTML = "";

  textListAr.forEach((item) => {
    const el = document.createElement("p");
    el.innerText = item;
    textBlock.appendChild(el);
  });
};

const updateTextBlock = (appEl) => {
  const inputEl = appEl.querySelector(`#${inputId}`);

  if (!inputEl.value) {
    return;
  }

  if (textList.length >= textListMaxLength) {
    textList.shift();
  }

  textList.push(inputEl.value);
  inputEl.value = "";

  const textBlockEl = appEl.querySelector(`#${textBlockId}`);

  renderTextList(textBlockEl, textList);
};

const initApp = (appEl) => {
  const textBlockEl = createTextBlock(textBlockId);
  const inputEl = createInput(inputId);
  const appendBtnEl = createAppendBtn(appendBtnId);

  inputEl.addEventListener("input", function (e) {
    appendBtnEl.hidden = !this.value.trim();
  });

  appEl.appendChild(textBlockEl);
  appEl.appendChild(inputEl);
  appEl.appendChild(appendBtnEl);

  renderTextList(textBlockEl, textList);

  appendBtnEl.addEventListener("click", function () {
    updateTextBlock(appEl);
    this.hidden = true;
  });
};

export { initApp, textBlockId, inputId, appendBtnId, textListMaxLength };
