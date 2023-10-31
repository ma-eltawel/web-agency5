let nav = document.querySelector("nav"), menu = document.querySelector("#menu-but");

window.onscroll = () => {
    nav.classList.remove('active');
    menu.classList.remove('fa-times');
}

menu.onclick = () => {
    nav.classList.toggle('active');
    menu.classList.toggle('fa-times');
}