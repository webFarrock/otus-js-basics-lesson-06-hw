import {
  appendBtnId,
  initApp,
  inputId,
  textBlockId,
  textListMaxLength,
} from "./script";

describe("initApp", () => {
  let appEl;
  beforeEach(() => {
    appEl = document.createElement("app");
    initApp(appEl);
  });

  const addText = (text) => {
    appEl.querySelector(`#${inputId}`).value = text;
    appEl.querySelector(`#${appendBtnId}`).click();
  };

  it("creates basic markup", () => {
    expect(appEl.querySelector(`#${textBlockId}`)).toBeTruthy();
    expect(appEl.querySelector(`#${inputId}`)).toBeTruthy();
    expect(appEl.querySelector(`#${appendBtnId}`)).toBeTruthy();
  });

  it("add text", () => {
    const paragraphsBefore = appEl.querySelectorAll(`#${textBlockId} p`);
    const text = "some text";

    addText(text);

    const paragraphsAfter = appEl.querySelectorAll(`#${textBlockId} p`);
    const hasAddedText = [...paragraphsAfter].find(
      (item) => item.innerText === text
    );

    expect(paragraphsAfter.length).toBe(paragraphsBefore.length + 1);
    expect(hasAddedText).toBeTruthy();
  });

  it("text block overflow", () => {
    addText("one");
    addText("two");
    addText("three");
    addText("four");
    addText("five");

    const paragraphs = appEl.querySelectorAll(`#${textBlockId} p`);

    expect(paragraphs.length).toBe(textListMaxLength);
  });

  it("don't add empty paragraphs", () => {
    const paragraphsBefore = appEl.querySelectorAll(`#${textBlockId} p`);

    addText("");
    const paragraphsAfter = appEl.querySelectorAll(`#${textBlockId} p`);

    expect(paragraphsBefore.length).toBe(paragraphsAfter.length);
  });
});
