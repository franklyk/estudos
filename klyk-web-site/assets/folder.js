const btnMenu = document.getElementById('btn-menu');


function animarMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}




btnMenu.addEventListener('click', animarMenu)




