const navMobileIcon = document.querySelector('.nav-icon-mobile');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


navMobileIcon.addEventListener('click', () => {

    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })

});