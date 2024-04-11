const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav-ul');
const close = document.getElementById('close-toggle');


if (toggle){
    toggle.addEventListener('click', () => {
        nav.classList.add('active');
    } )
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    } )
}

