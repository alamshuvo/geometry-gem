function calculatePentagonArea(){
    const base=getInputValue("Pentagon-b");
    const height=getInputValue("Pentagon-p");
    const area =0.5* base*height;
    setInnerText("Pentagon-area",area);
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