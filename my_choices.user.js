// ==UserScript==
// @name         My Choices
// @namespace    https://github.com/iCross
// @version      0.1
// @description  Replace default select menus with Choices.js
// @author       https://github.com/iCross
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @require      https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js
// @require      https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut
// ==/UserScript==

(function () {
  "use strict";

  console.log("Userscript is running.");

  // Add Choices.js CSS to the document
  function addChoicesCSS() {
    const choicesCSSLink = document.createElement("link");
    choicesCSSLink.href = "https://cdn.jsdelivr.net/npm/choices.js@9.0.1/public/assets/styles/choices.min.css";
    choicesCSSLink.rel = "stylesheet";
    console.log("Adding Choices.js CSS");
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


  // Register a menu command to trigger the same function
  GM_registerMenuCommand("Apply Choices.js", () => {
    addChoicesCSS();
    applyChoices();
    console.log("Choices.js applied via menu command.");
  });
})();
