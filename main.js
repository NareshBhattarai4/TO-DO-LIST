


//to-do list

let a=document.getElementById("result");
let c=document.getElementById("b")
let n=document.getElementById("containerT");
const myFun=()=>{
  if(a.value !=""){
 let make=document.createElement("li");
 
  make.appendChild(document.createTextNode(a.value));
  
  c.appendChild(make);
  a.value="";
  n.style.display="none";
  
  make.onclick=function(){
    this.parentNode.removeChild(this);
  }
  
}else{
 n.style.display="block";
  
}


}


