function calculateRomboshArea(){
    const d1=getInputValue("rombosh-d1");
    const d2=getInputValue("rombosh-d2");
    const area =0.5*d1*d2;
    setInnerText("rombosh-area",area);
 }
