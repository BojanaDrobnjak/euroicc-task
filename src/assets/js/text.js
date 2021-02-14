export class Main {
  insertText(json) {
    Object.keys(json).forEach((key) => {
      Object.keys(json[key]).forEach((el) => {
        const $elements = document.getElementsByClassName(`_js-${key}--${el}`);
        Array.from($elements).forEach(($el) => {
          $el.innerHTML = json[key][el]._text;
        });
      });
    });
  }
}

export class Table {
  insertTableData(json) {
    const data = json.columns.table_content.rows.row;
    Object.keys(data).forEach((key) => {
      Object.keys(data[key]).forEach((el) => {
        const $elements = document.getElementsByClassName(
          `_js-table_content--rows--row${key}--${el}`
        );
        Array.from($elements).forEach(($el) => {
          $el.innerHTML = data[key][el]._text;
        });
      });
    });
  }

  createTable() {
    let tableDiv = document.getElementById("table-container");

    let table = document.createElement("table");
    table.classList.add("table", "table-striped", "table-bordered");

    let tableHead = document.createElement("thead");
    table.appendChild(tableHead);

    let headRowFirst = document.createElement("tr");
    var counter = 0;
    for (let i = 0; i < 4; i++) {
      let th = document.createElement("th");
      let text = document.createTextNode("...");
      th.appendChild(text);
      th.scope = "col";
      if (i < 3) {
        th.rowSpan = "2";
        th.className = `_js-table_head--column_group${++counter}`;
      } else {
        th.colSpan = "3";
        th.className = `_js-table_head--column_group`;
        th.classList.add("border-bottom-0");
      }
      headRowFirst.appendChild(th);
    }
    let headRowSecond = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      let th = document.createElement("th");
      th.className = `_js-table_head--column_group${++counter}`;
      let text = document.createTextNode("...");
      th.appendChild(text);
      th.scope = "col";
      headRowSecond.appendChild(th);
    }
    tableHead.appendChild(headRowFirst);
    tableHead.appendChild(headRowSecond);

    counter = 0;

    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    for (let i = 0; i < 9; i++) {
      let tr = document.createElement("tr");
      tableBody.appendChild(tr);
      if (i < 8) {
        for (let j = 0; j < 6; j++) {
          let td = document.createElement("td");
          td.className = `_js-table_content--rows--row${i}--value${++counter}`;
          td.appendChild(document.createTextNode("... "));
          tr.appendChild(td);
        }
      } else {
        counter = 0;
        let td = document.createElement("td");
        td.colSpan = "3";
        td.classList.add(
          "font-weight-bold",
          "text-right",
          "_js-table_total--total"
        );
        td.appendChild(document.createTextNode("..."));
        tr.appendChild(td);
        for (let k = 1; k < 4; k++) {
          let td = document.createElement("td");
          td.className = `_js-table_total--value${++counter}`;
          td.appendChild(document.createTextNode("..."));
          tr.appendChild(td);
        }
      }
      counter = 0;
    }
    tableDiv.appendChild(table);
  }
}
