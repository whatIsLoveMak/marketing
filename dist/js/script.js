const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            if (iconMenu.classList.contains('active')) {
                document.body.classList.remove('.lock')
                iconMenu.classList.remove('active');
                menuBody.classList.remove('active');
            };
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {

    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('.lock')
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    })

}
let inputs = document.querySelectorAll('.form input');

inputs.forEach(item => item.addEventListener('input', function() {
    item.previousElementSibling.style.opacity = 1;
}));
inputs.forEach(item => item.addEventListener('focusout', function() {
    item.previousElementSibling.style.opacity = 0;
}))

let aboutImagine = document.querySelector('.about-us__imagine');
let shownImagine = document.querySelector('.show-imagine');
aboutImagine.addEventListener('click', function(event) {
    event.preventDefault();
    shownImagine.classList.add('show');
});
shownImagine.addEventListener('click', function() {
    this.classList.remove('show');

})