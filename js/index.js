const open = document.getElementById('open')
const close = document.getElementById('close');

function openNavbar(){
    document.querySelector('.header__navbar-center').style.top = '0%'
}

function closeNavbar(){
    document.querySelector('.header__navbar-center').style.top = '-100%'
}

open.addEventListener("click", () => {
    openNavbar()
})
close.addEventListener('click', () =>{
    closeNavbar()
})

document.querySelectorAll('.header__navbar-link').forEach(link =>{
    link.addEventListener('click', () => {
        closeNavbar()
    })
})
let backtop = document.getElementById("backtop");

window.addEventListener("scroll", function() {
    toggleBacktop();
});

function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backtop.style.bottom = "60px";
    }
    else {
        backtop.style.bottom = "-1000px";
    }
}