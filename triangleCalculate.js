function calculateTriangleArea() {
    const triangleBaseInput=document.getElementById("triangle-base");
    const triangleBaseText=triangleBaseInput.value;
    const triangleBaseNumber=parseFloat(triangleBaseText);
    const triangleHeightInput=document.getElementById("triangle-height");
    const triangleHeightText=triangleHeightInput.value;
    const traingleHeightNumber=parseFloat(triangleHeightText);
    const area =0.5*triangleBaseNumber*traingleHeightNumber;
    const triangleAreaSpan=document.getElementById("triangle-area");
    triangleAreaSpan.innerText=area;
    
}