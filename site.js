$(document).ready(function hideElementsOnLoad() {
    // Is called when the document loads to hide the dropdown
    const container = document.getElementById("outputContainer");
    container.style.display = "none";
});

function generateColour() {
    const rgbObj = generateRGB();

    const rgb = rgbObj.r + ", " + rgbObj.g + ", " + rgbObj.b;

    const hex = "#" + calcHex(rgbObj.r, rgbObj.g, rgbObj.b);

    // Show the outputContainer
    const container = document.getElementById("outputContainer");
    container.style.display = "block";

    const hexElement = document.getElementById("hexText");
    const rgbElement = document.getElementById("rgbText");

    hexElement.innerHTML = hex.toString();
    rgbElement.innerHTML = rgb;

    // set the background colour
    document.body.style.backgroundColor = hex;
}

// Hover function to generate a random colour when the button is hovered
$("#btnGenerate").hover(function btnHoverIn() {
    const rgbObj = generateRGB();

    const hex = "#" + calcHex(rgbObj.r, rgbObj.g, rgbObj.b);

    const btn = document.getElementById("btnGenerate");
    btn.style.border = "solid 2px " + hex;
    btn.style.color = hex;

}, function btnHoverOut(){
    const btn = document.getElementById("btnGenerate");
    btn.style.border = "solid 2px white";
    btn.style.color = "black";
});

function generateRGB() {
    const r = randNum();
    const g = randNum();
    const b = randNum();

    const rgb = new RGB(r, g, b);

    return rgb;
}

function randNum() {
    const max = 255;
    const num = Math.floor((Math.random() * max));

    return num;
}

function calcHex(r,g,b) {
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);

    const hex = red + green + blue;
    return hex;
}

function rgbToHex(val) {
    let hex = Number(val).toString(16);
    if(hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function copyHexCode() {
    const hexText = document.getElementById("hexText");

    // Create a hidden input
    const element = document.createElement("input");
    // Set its value to the hex code
    element.setAttribute("value", hexText.innerHTML);
    document.body.appendChild(element);
    // Select the new input element and copy its text
    element.select();
    document.execCommand("copy");
    // Remove it from the DOM
    document.body.removeChild(element);

    // Change the Tooltip text to show copied for 3 seconds then change it back
    const tooltip = document.getElementById("hexTooltip");
    setTimeout(function() {
        tooltip.innerHTML = "Copy to clipboard";
    }, 3000);
    tooltip.innerHTML = "Copied hex code!";
}

function copyRGBCode() {
    const rgbText = document.getElementById("rgbText");

    // Create a hidden input
    const element = document.createElement("input");
    // Set its value to the hex code
    element.setAttribute("value", "rgb(" + rgbText.innerHTML + ")");
    document.body.appendChild(element);
    // Select the new input element and copy its text
    element.select();
    document.execCommand("copy");
    // Remove it from the DOM
    document.body.removeChild(element);

    // Change the Tooltip text to show copied for 3 seconds then change it back
    const tooltip = document.getElementById("rgbTooltip");
    setTimeout(function() {
        tooltip.innerHTML = "Copy to clipboard";
    }, 3000);
    tooltip.innerHTML = "Copied RGB!";
}

function RGB(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}