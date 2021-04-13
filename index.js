const hamburger = document.querySelector('.hamburger--menu')
const navlist = document.querySelector('.nav--list')


hamburger.addEventListener('click', function() {

    console.log('test')

    navlist.classList.toggle('nav--list-afterclick')



})