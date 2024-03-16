const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.header__wrapper-nav')

hamburger.addEventListener('click', function () {
    this.classList.toggle('active')
    nav.classList.toggle('open')
})