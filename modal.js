document.addEventListener('DOMContentLoaded', () =>{
const toggle = document.getElementById('dropDownTorggle');
const menu =  document.getElementById('dropDownMenu');

toggle.addEventListener('click', (e) =>{
    e.preventDefault();
menu.classList.toggle('open');
});
});


alert("Рустамчик Привет!")

const name = prompt("Пойдем в МакПукинс?");
alert("ЯХААА БЛЯ!")