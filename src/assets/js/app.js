import axios from "axios";
 var convert = require("xml-js");

import { Menu, Toggle, Heading, HeadlineText } from "./text";

import "bootstrap";

window.addEventListener("load", () => {
  axios.get("/assets/xml/zadatak.xml").then((response) => {
    const json = JSON.parse(
      convert.xml2json(response.data, { compact: true, spaces: 4 })
    );
    new Menu().insertText(json);
    new Toggle().insertText(json);
    new Heading().insertText(json);
    new HeadlineText().insertText(json);

  });
});
