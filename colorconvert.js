"use strict";

init();

function init() {
  hexToRGB("#facade");

  const css = "rgb(271, 23, 22)";
  cssToRGB(css);
}

function hexToRGB(hex) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  let rgb = `rgb(${r}, ${g}, ${b})`;
  document.querySelector("#rgb").textContent = rgb;
  return { r, g, b };
}

const something = hexToRGB("#facade");

function rgbToHex(color) {
  let hexR = color.r.toString(16);
  let hexG = color.g.toString(16);
  let hexB = color.b.toString(16);

  if (color.r.toString(16).length == 1) {
    hexR = `0${r.toString(16)};`;
  }
  if (color.g.toString(16).length == 1) {
    hexG = `0${g.toString(16)};`;
  }
  if (color.b.toString(16).length == 1) {
    hexB = `0${b.toString(16)};`;
  }

  const hex = `#${hexR}${hexG}${hexB}`;
  document.querySelector("#hex").textContent = `#${hexR}${hexG}${hexB}`;

  return { hex };
}

const somethingelse = rgbToHex(something);
console.log(somethingelse);

function cssToRGB(css) {
  const firstParen = css.indexOf("(");
  const lastParen = css.indexOf(")");

  const firstComma = css.indexOf(",");
  const lastComma = css.lastIndexOf(",");

  const strR = css.substring(firstParen + 1, firstComma);
  const strG = css.substring(firstComma + 2, lastComma);
  const strB = css.substring(lastComma + 2, lastParen);

  const r = Number(strR);
  const g = Number(strG);
  const b = Number(strB);

  const rgb = `rgb: ${r} ${g} ${b}`;
}

function program() {
  const color = "#facade";
}
