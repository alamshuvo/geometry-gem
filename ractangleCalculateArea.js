function calculateRactangleArea() {
    const rectangleWidth=document.getElementById("rectangle-width");
    const rectangleWidthText=rectangleWidth.value;
    const rectangleWidthNumber=parseFloat(rectangleWidthText);
    const rectangleLength=document.getElementById("ractangle-length");
    const rectengleLenghtText=rectangleLength.value;
    const rectengleLengthNumber=parseFloat(rectengleLenghtText);
    const area=rectangleWidthNumber*rectengleLengthNumber;
    const rectangleAreaSpan=document.getElementById("rectangle-area");
    rectangleAreaSpan.innerText=area;
}