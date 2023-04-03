const anchors = document.querySelectorAll('.anchor');
const navbar = document.querySelector('header');
const inputq1 = document.querySelectorAll('.q1'),
inputq2 = document.querySelectorAll('.q2'),
inputq3 = document.querySelectorAll('.q3'),
inputq4 = document.querySelectorAll('.q4'),
inputq5 = document.querySelectorAll('.q5'),
res1 = document.querySelector('.res1'),
res2 = document.querySelector('.res2'),
res3 = document.querySelector('.res3'),
res4 = document.querySelector('.res4'),
res5 = document.querySelector('.res5');


let lastScrollTop = 0;
window.onscroll = () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100%';
        navbar.style.opacity = '0';
    } else {
        navbar.style.top = '0';
        navbar.style.opacity = '1';
    }
    lastScrollTop = scrollTop;
}}
function submit1() {
    res1.style.display = 'initial'
}
function submit2() {
    res2.style.display = 'initial'
}
function submit3() {
    res3.style.display = 'initial'
}
function submit4() {
    res4.style.display = 'initial'
}