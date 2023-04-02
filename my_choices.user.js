// ==UserScript==
// @name         My Choices
// @namespace    https://github.com/iCross
// @version      0.1
// @description  Replace default select menus with Choices.js
// @author       https://github.com/iCross
// @match        *://*/*
// @require      https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js
// @require      https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut
// ==/UserScript==

(function () {
  "use strict";

  console.log("Userscript is running.");

  // Add Choices.js CSS to the document
  function addChoicesCSS() {
    const choicesCSSLink = document.createElement("link");
    choicesCSSLink.href =
      "https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/base.min.css";
    choicesCSSLink.rel = "stylesheet";
    document.head.appendChild(choicesCSSLink);
  }

  // Replace default select menus with Choices.js
  function applyChoices() {
    console.log("Applying Choices.js.");

    document.querySelectorAll("select").forEach(function (select) {
      if (!select._choicesInstance) {
        new Choices(select);
      }
    });
  }

  const { register } = VM.shortcut;

  register("c-e", () => {
    console.log("You just pressed Shortcut in violetmonkey.");

    // Add Choices.js CSS when the keyboard shortcut is pressed
    addChoicesCSS();

    // Run once when the script is loaded
    applyChoices();
  });
})();

