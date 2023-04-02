// This is a JavaScript snippet that can be executed directly in the developer console for quick and convenient use.
// Load Choices.js CSS
const choicesCSSLink = document.createElement('link');
choicesCSSLink.href = 'https://cdn.jsdelivr.net/npm/choices.js@9.0.1/public/assets/styles/choices.min.css';
choicesCSSLink.rel = 'stylesheet';
document.head.appendChild(choicesCSSLink);

// Load custom CSS
const customStyle = document.createElement('style');
customStyle.textContent = `
  .choices__list--dropdown,
  .choices__list[aria-expanded] {
    word-break: break-word;
    width: max-content;
  }
`;
document.head.appendChild(customStyle);

// Load Choices.js script
const choicesScript = document.createElement('script');
choicesScript.src = 'https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js';
document.body.appendChild(choicesScript);

// Wait for the Choices.js script to load
choicesScript.onload = () => {
  // Replace default select menus with Choices.js
  document.querySelectorAll('select').forEach(select => {
    if (!select._choicesInstance) {
      new Choices(select, { itemSelectText: '' });
    }
  });
};

