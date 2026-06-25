const modal=document.getElementById("modal");

document.getElementById("openModal").onclick=()=>{
modal.style.display="block";
}

document.getElementById("closeModal").onclick=()=>{
modal.style.display="none";
}

window.onclick=(e)=>{
if(e.target==modal){
modal.style.display="none";
}
}

document.addEventListener("keydown",(e)=>{
if(e.key==="Escape"){
modal.style.display="none";
}
});

const accordion=document.querySelector(".accordion-btn");

accordion.addEventListener("click",()=>{
const panel=accordion.nextElementSibling;
panel.style.display=panel.style.display==="block"?"none":"block";
});

document.getElementById("toastBtn").onclick=()=>{
const toast=document.getElementById("toast");
toast.className="show";
setTimeout(()=>{
toast.className="";
},3000);
}