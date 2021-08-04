const mobile = document.querySelector("#menu-hamburguer")


const navegation = document.querySelector("#nav")

const hamburguer = () =>  navegation.classList.toggle("checked")
mobile.addEventListener('click',hamburguer)