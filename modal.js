document.addEventListener('DOMContentLoaded', () =>{
const toggle = document.getElementById('dropDownTorggle');
const menu =  document.getElementById('dropDownMenu');

toggle.addEventListener('click', (e) =>{
    e.preventDefault();
menu.classList.toggle('open');
});
});


const openBtn = document.getElementById("openTalk");
const modalOpen = document.getElementById("openTalk-modal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
 modalOpen.style.display = "block";
});

closeBtn.addEventListener("click", () => {
modalOpen.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modalOpen) {
        modalOpen.style.display = "none";
    }
});