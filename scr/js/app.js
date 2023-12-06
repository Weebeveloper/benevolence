const options = document.querySelector('.header .nav-bar .nav-list .options');
const menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

options.addEventListener('click', ()=> {
    options.classList.toggle('active');
    menu.classList.toggle('active');
})

document.addEventListener('scroll', ()=> {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#0a0a0a";
    } else {
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach(item=> {
    item.addEventListener('click', () => {
        options.classList.toggle('active');
    menu.classList.toggle('active');
    })
})