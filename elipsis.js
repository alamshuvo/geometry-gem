function calculateElipsisArea(){
    const base=getInputValue("ellipse-a");
    const height=getInputValue("ellipse-b");
    const area =3.1416* base*height;
    setInnerText("ellipse-area",area);
 }
 