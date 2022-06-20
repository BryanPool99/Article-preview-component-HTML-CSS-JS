

const share_icon=document.querySelector(".share-icon");
const author=document.querySelector(".author");
const active=document.querySelector(".nav");
const share=document.querySelector(".share");

share_icon.addEventListener("click",()=>{
    active.classList.toggle("active");
    author.classList.toggle("active");
    share.classList.toggle("active");
    share_icon.classList.toggle("active");
});