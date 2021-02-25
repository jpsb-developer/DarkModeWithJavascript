const html = document.querySelector("html");
const checkbox = document.querySelector('input[name="theme"]');

const getStyles = (element, styles) =>
  window.getComputedStyle(element).getPropertyValue(styles);

const initialColors = {
  bg: getStyles(html, "--bg"),
  bgPanel: getStyles(html, "--bg-panel"),
  colorHeadings: getStyles(html, "--color-headings"),
  colorText: getStyles(html, "--color-text"),
};

const darkMode = {
  bg: "#333333",
  bgPanel: "#434343",
  colorHeadings: "#3664FF",
  colorText: "#B5B5B5",
};

const tranformKey = (key) => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) => {
    html.style.setProperty(tranformKey(key), colors[key]);
  });
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
