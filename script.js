window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

/* MENU */

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        document.querySelector('.bi-list').style.visibility = 'visible'; // Exibir o ícone do menu quando o menu for fechado
    } else {
        menu.style.display = 'block';
    }
}

document.querySelector('.bi-list').addEventListener('click', function() {
    this.style.visibility = 'hidden';
});



