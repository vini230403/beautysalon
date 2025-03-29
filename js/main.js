/* abre e fecha */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")


for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* esconde menu ao clicar em link */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* mudar header scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})