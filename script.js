const menu = document.querySelector('.menu');
const navUL = document.querySelector('.navigation ul');
const navLinks = document.querySelectorAll('.navigation a');

function toggleMenu() {
    navUL.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('menu-open'); // trava a rolagem com o menu aberto
}

function closeMenu() {
    navUL.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('menu-open');
}

menu.addEventListener('click', toggleMenu);

// fecha o menu ao clicar em um link
navLinks.forEach(link => link.addEventListener('click', closeMenu));

// se a tela crescer para desktop com o menu aberto, fecha ele
window.matchMedia('(min-width: 701px)').addEventListener('change', e => {
    if (e.matches) closeMenu();
});
