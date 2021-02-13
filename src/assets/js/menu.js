export default class Menu {
    insertText(json) {
      const data = json.zadatak.menu;
      console.log(data);
      Object.keys(data).forEach(key => {
          const $elements = document.getElementsByClassName(`_js-menu--${key}`);
          console.log($elements);
          Array.from($elements).forEach($el => {
            $el.innerHTML = data[key]._text;
          })
      });
    }
  }

