export class Menu {
  insertText(json) {
    const data = json.menu;
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
    const data = json.toggle;
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
    const data = json.heading;
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
    const data = json.headline_text;
    Object.keys(data).forEach((key) => {
      const $elements = document.getElementsByClassName(`_js-headline_text--${key}`);
      Array.from($elements).forEach(($el) => {
        $el.innerHTML = data[key]._text;
      });
    });
  }
}

export class Table {
  insertTableHeadings(json) {
    const data = json.columns.table_head;
    Object.keys(data).forEach((key) => {
      const $elements = document.getElementsByClassName(`_js-table_head--${key}`)
      Array.from($elements).forEach(($el) => {
        $el.innerHTML = data[key]._text;
      })
    })
  }

  insertTableTotal(json) {
    const data = json.columns.table_total;
    Object.keys(data).forEach((key) => {
      const $elements = document.getElementsByClassName(`_js-table_total--${key}`)
      Array.from($elements).forEach(($el) => {
        $el.innerHTML = data[key]._text;
      })
    })
  }

  insertTableData(json) {
    const data = json.columns.table_content.rows.row;
    Object.keys(data).forEach((key) => {
        Object.keys(data[key]).forEach((el)=> {
          const $elements = document.getElementsByClassName(`_js-table_content--rows--row${key}--${el}`);
          Array.from($elements).forEach(($el) => {
            $el.innerHTML = data[key][el]._text;
          })
        })
    })   
  }
}
