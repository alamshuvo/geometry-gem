function calculateRomboshArea(){
    const d1=getInputValue("rombosh-d1");
    const d2=getInputValue("rombosh-d2");
    const area =0.5*d1*d2;
    setInnerText("rombosh-area",area);
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