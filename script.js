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



// Dar-mode //

const chk = document.getElementById('chk');

chk.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})