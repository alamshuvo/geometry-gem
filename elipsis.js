function calculateElipsisArea(){
    const base=getInputValue("ellipse-a");
    const height=getInputValue("ellipse-b");
    const area =3.1416* base*height;
    setInnerText("ellipse-area",area);
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