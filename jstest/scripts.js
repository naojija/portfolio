var myVar=3;
let myLet=5;
const myConst=7;

const el= document.querySelector("span");
el.addEventListener("mouseover",makeBlue);
el.addEventListener("mouseout",makeYellow);
el.addEventListener("mouseover",makeTextDark);
el.addEventListener("mouseout",makeTextWhite);

function makeBlue(){ 
  el.style.background="blue";
}

function makeYellow(){    
  el.style.background="yellow";
}

function makeTextDark(){
    el.style.color="black";
}

function makeTextWhite(){
    el.style.color="white";
}