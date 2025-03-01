const btnMenu = document.getElementById('btnMenu')
const menu = document.getElementById('menu')

btnMenu.addEventListener('click', () =>{
    btnMenu.classList.toggle('abierto')
    menu.classList.toggle('activo')
    const main = document.querySelector('.main')
    main.classList.toggle('desplazamineto')
})
