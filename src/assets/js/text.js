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
  createTable(json) {
    const $tableContainer = document.getElementById("table-container");
    const headData = json.table_head;
    const contentData = json.table_content;
    const totalData = json.table_total;
    const table = `
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th scope="col" rowspan="2">${headData.column_group1._text}</th>
        <th scope="col" rowspan="2">${headData.column_group2._text}</th>
        <th scope="col" rowspan="2">${headData.column_group3._text}</th>
        <th scope="col" colspan="3" class="border-bottom-0">${headData.column_group._text}</th>
      </tr>
      <tr>
        <th scope="col">${headData.column_group4._text}</th>
        <th scope="col">${headData.column_group5._text}</th>
        <th scope="col">${headData.column_group6._text}</th>
      </tr>
      </thead>
      <tbody>
        ${this.getTableContent(contentData)}
        ${this.getTableTotal(totalData)}
      </tbody>
    </table>`;
    $tableContainer.innerHTML = table;
  }
  getTableContent(data) {
    return data.rows.row.map(row => {
      return `
      <tr>
        <td>${row.value1._text}</td>
        <td>${row.value2._text}</td>
        <td>${row.value3._text}</td>
        <td>${row.value4._text}</td>
        <td>${row.value5._text}</td>
        <td>${row.value6._text}</td>
      </tr>
      `;
    }).join('');
  }
  getTableTotal(data) {
    return `
    <tr>
      <td colspan="3" class="font-weight-bold text-right">${data.total._text}</td>
      <td>${data.value1._text}</td>
      <td>${data.value2._text}</td>
      <td>${data.value3._text}</td>
    </tr>
    `;
  }
}
