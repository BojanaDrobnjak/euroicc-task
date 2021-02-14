import axios from "axios";
var convert = require("xml-js");

import { Table, Main } from "./text";

import "bootstrap";

window.addEventListener("load", () => {
  axios.get("/assets/xml/zadatak.xml").then((response) => {
    const json = JSON.parse(
      convert.xml2json(response.data, { compact: true, spaces: 4 })
    );
    new Main().insertText({
      menu: json.zadatak.menu,
      toggle: json.zadatak.toggle,
      heading: json.zadatak.heading,
      headline_text: json.zadatak.headline_text
    });
    new Table().createTable(json.zadatak.columns);
  });
});
