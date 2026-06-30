const full = document.querySelector('#full');

const h4 = full.querySelector('h4');

const menu = document.querySelector('#nav i');
const cross = document.querySelector('#full i');

var tl = gsap.timeline();


tl.to(full, {
    right: "0",
    duration: 0.5,
})

tl.from("#full h4", {
    x: 100,
    duration: 0.6,
    stagger: 0.25,
    opacity: 0,
})

tl.from("#full i", {
    opacity: 0,
})
// button.addEventListener('click', () => {
//     full.classList.toggle('active');
// });

tl.pause();
menu.addEventListener('click', () => {
    tl.timeScale(1);
    tl.play();
})

cross.addEventListener('click', () => {
    tl.timeScale(3);
    tl.reverse();
})
