export class Menu {
  insertText(json) {
    const data = json.zadatak.menu;
    Object.keys(data).forEach((key) => {
      const $elements = document.getElementsByClassName(`_js-menu--${key}`);
      Array.from($elements).forEach(($el) => {
        $el.innerHTML = data[key]._text;
      });
    });
  }
}

export class Toggle {
  insertText(json) {
    const data = json.zadatak.toggle;
    Object.keys(data).forEach((key) => {
      const $elements = document.getElementsByClassName(`_js-toggle--${key}`);
      Array.from($elements).forEach(($el) => {
        $el.innerHTML = data[key]._text;
      });
    });
  }
}

export class Heading {
  insertText(json) {
    const data = json.zadatak.heading;
    Object.keys(data).forEach((key) => {
      const $elements = document.getElementsByClassName(`_js-heading--${key}`);
      Array.from($elements).forEach(($el) => {
        $el.innerHTML = data[key]._text;
      });
    });
  }
}

export class HeadlineText {
  insertText(json) {
    const data = json.zadatak.headline_text;
    Object.keys(data).forEach((key) => {
      const $elements = document.getElementsByClassName(`_js-headline_text--${key}`);
      Array.from($elements).forEach(($el) => {
        $el.innerHTML = data[key]._text;
      });
    });
  }
}
