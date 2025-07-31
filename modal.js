document.addEventListener('DOMContentLoaded', () =>{
const toggle = document.getElementById('dropDownTorggle');
const menu =  document.getElementById('dropDownMenu');

toggle.addEventListener('click', (e) =>{
    e.preventDefault();
menu.classList.toggle('open');
});
});

