import axios from "axios";
 var convert = require("xml-js");

import Menu from "./menu";

import "bootstrap";

// alert()

window.addEventListener("load", () => {
  axios.get("/assets/xml/zadatak.xml").then((response) => {
    const json = JSON.parse(
      convert.xml2json(response.data, { compact: true, spaces: 4 })
    );
    console.log(json, " JSON");
    new Menu().insertText(json);
  });
});
