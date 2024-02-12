function calculateparallelogramArea(){
   const base=getInputValue("parallelogram-base");
   const height=getInputValue("parallelogram-height");
   const area =base*height;
   setInnerText("parallelogram-area",area);
}
function getInputValue(inputFieldId) {
    const base=document.getElementById(inputFieldId);
    const inputValueText=base.value;
    const inputValueNumber=parseFloat(inputValueText);
    return inputValueNumber;
}
function setInnerText(innerTaxt,area) {
    const pArea=document.getElementById(innerTaxt);
    pArea.innerText=area;
}