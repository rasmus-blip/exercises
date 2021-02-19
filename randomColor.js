"use strict";

document.querySelector("button").addEventListener("click", randomBackground);

function randomBackground() {
  //kontrol tårn CHEFEN
  const rgb = randomColor();
  const cssString = rgbToCSS(rgb);
  document.querySelector("body").style.backgroundColor = cssString;
  console.log(rgb);
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return { r, g, b };
}

function rgbToCSS(rgb) {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}
