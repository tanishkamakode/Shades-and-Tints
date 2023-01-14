"use strict";

let shades = document.querySelectorAll(".shade");
let tints = document.querySelectorAll(".tint");

let shadeH = document.querySelectorAll(".shadeHex");
let tintH = document.querySelectorAll(".tintHex");

let button = document.querySelector(".btn");
button.addEventListener("click", generate);

function generate() {
  let hexString = document.querySelector(".input").value;
  console.log(hexString);

  hexToRgb(hexString);

  function hexToRgb(hexString) {
    // Split the string
    let hexArray = hexString.split("");
    console.log(hexArray);

    // Remove the #
    hexArray.splice(0, 1);
    console.log(hexArray);

    // Separate r, g, b values
    let red = hexArray.splice(0, 2).join("");
    let green = hexArray.splice(0, 2).join("");
    let blue = hexArray.splice(0, 2).join("");
    console.log(red, green, blue);

    // Covert r, g, b into decimal
    let redRGB = parseInt(red, 16);
    let greenRGB = parseInt(green, 16);
    let blueRGB = parseInt(blue, 16);
    console.log(redRGB, greenRGB, blueRGB);

    shade(redRGB, greenRGB, blueRGB);
    tint(redRGB, greenRGB, blueRGB);
  }

  function shade(redRGB, greenRGB, blueRGB) {
    console.log("Shades : ");

    // Assigned first

    shades[0].style.backgroundColor = hexString;
    shadeH[0].textContent = hexString;
    shades[9].style.backgroundColor = "#000000";
    shadeH[9].textContent = "#000000";

    let a = 1;
    for (let i = 0.9; i > 0.1; i = i - 0.1) {
      let redShade = Math.floor(redRGB * i);
      let greenShade = Math.floor(greenRGB * i);
      let blueShade = Math.floor(blueRGB * i);
      // console.log(redShade, greenShade, blueShade);
      let finalShadeHex = rgbToHex(redShade, greenShade, blueShade);
      console.log(finalShadeHex);

      shades[a].style.backgroundColor = finalShadeHex;
      shadeH[a].textContent = finalShadeHex;
      a++;
    }
  }

  function tint(redRGB, greenRGB, blueRGB) {
    console.log("Tints : ");

    tints[0].style.backgroundColor = hexString;
    tintH[0].textContent = hexString;
    tints[9].style.backgroundColor = "#ffffff";
    tintH[9].textContent = "#ffffff";

    let a = 1;
    for (let i = 0.1; i < 0.9; i = i + 0.1) {
      let redTint = Math.floor(redRGB + (255 - redRGB) * i);
      let greenTint = Math.floor(greenRGB + (255 - greenRGB) * i);
      let blueTint = Math.floor(blueRGB + (255 - blueRGB) * i);
      // console.log(redTint, greenTint, blueTint);
      let finalTintHex = rgbToHex(redTint, greenTint, blueTint);
      console.log(finalTintHex);

      tints[a].style.backgroundColor = finalTintHex;
      tintH[a].textContent = finalTintHex;
      a++;
    }
  }

  function rgbToHex(redRGB, greenRGB, blueRGB) {
    return (
      "#" +
      ((1 << 24) + (redRGB << 16) + (greenRGB << 8) + blueRGB)
        .toString(16)
        .slice(1)
    );
  }
}
