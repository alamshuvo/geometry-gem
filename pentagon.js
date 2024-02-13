function calculatePentagonArea(){
    const base=getInputValue("Pentagon-b");
    const height=getInputValue("Pentagon-p");
    const area =0.5* base*height;
    setInnerText("Pentagon-area",area);
 }
 