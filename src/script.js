const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav-ul');
const close = document.getElementById('close-toggle');

// botao de menu para telas menores//
if (toggle) {
    toggle.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



// Dar-mode //

const chk = document.getElementById('chk');

chk.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    document.querySelector('.painel').classList.toggle('dark');
    document.querySelector('.produtos').classList.toggle('dark');
    document.querySelector('.contato').classList.toggle('dark');
    document.querySelector('.form-contato').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
    document.querySelector('.copyright').classList.toggle('dark');
})