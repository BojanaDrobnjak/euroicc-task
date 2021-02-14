import axios from "axios";
var convert = require("xml-js");

import { Menu, Toggle, Heading, HeadlineText, Table } from "./text";

import "bootstrap";

window.addEventListener("load", () => {
  axios.get("/assets/xml/zadatak.xml").then((response) => {
    const json = JSON.parse(
      convert.xml2json(response.data, { compact: true, spaces: 4 })
    );
    createTable();

    new Menu().insertText(json.zadatak);
    new Toggle().insertText(json.zadatak);
    new Heading().insertText(json.zadatak);
    new HeadlineText().insertText(json.zadatak);
    new Table().insertTableHeadings(json.zadatak);
    new Table().insertTableTotal(json.zadatak);
    new Table().insertTableData(json.zadatak);
  });
});

function createTable() {
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
    let text = document.createTextNode("Colunmn " + j);
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
        td.appendChild(document.createTextNode("Value " + i + "," + j));
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
