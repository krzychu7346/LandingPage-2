var nav = document.querySelector('nav');
var li = nav.querySelectorAll('li a');


li.forEach(function (element, index, array) {

    li[index].addEventListener("click", (e) => {
        let click = li[index];
        activeiconmenu(click);

        let href = li[index].getAttribute('href');
    navScrool(href, e);
    });

});

// Active Menu //

function activeiconmenu(click) {
    let current = nav.querySelector(".active");
    if (current) current.classList.remove('active');
    click.classList.add('active');
}


// Scrool smooth    //
function navScrool(href, e) {
    e.preventDefault();
    if (href[0] === '#') {
        let link = document.querySelector(href);
        link.scrollIntoView({
            behavior: 'smooth'
        });
    }
}


// Active menu scrool postion //

// let sectionPoints = document.querySelectorAll('section');

// sectionPoints.forEach(function (element, index, array) {
//     let sectionOffset = sectionPoints[index].offsetTop;
    
//     document.addEventListener('scroll', (e) => {
//         let currentPagePosition = window.pageYOffset;

//         if (sectionOffset <= currentPagePosition && (sectionOffset + sectionPoints[index].offsetHeight) > currentPagePosition) {
//             let click = li[index];
//             activeiconmenu(click);
//         }
//     });
// });



















