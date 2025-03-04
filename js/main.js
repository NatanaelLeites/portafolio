import './menu-movil.js';
const text = document.getElementById('myText');

gsap.to(text, {
    duration: 1.5,
    ease: "none",
    text: "Web Developer",
});
gsap.to(text, {
    delay: 3,
    duration: 1.5,
    text: "Desenvolvedor web",
    ease: "none",
});
gsap.to(text, {
    delay: 6,
    duration: 1.5,
    text: "Desarrollador Web",
    ease: "none",
});