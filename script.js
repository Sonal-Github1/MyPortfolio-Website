function scrollToElements(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: "smooth" });
    }
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
const getStarted = document.getElementById('link6');
const themeToggle = document.querySelector('.themeToggle');
const body = document.body;
const darkIcon = document.querySelector('.icon-light')
const lightIcon = document.querySelector('.icon-dark')
const join = document.getElementById('join');


link1.addEventListener('click', () => {
    scrollToElements('.container', 0);
     // Scroll to the first element with class 'header'
});

link2.addEventListener('click', () => {
    scrollToElements('.header', 0);
     // Scroll to the second element with class 'header'
});

link3.addEventListener('click', () => {
    scrollToElements('.header', 1);
     // Scroll to the first element with class 'column'
});

link4.addEventListener('click', () => {
    scrollToElements('.column', 0);
     // Scroll to the third element with class 'header'
});

themeToggle.addEventListener('click', ()=> {
    body.classList.toggle('night-theme');
    darkIcon.style.display = (body.classList.contains('night-theme'))
    ? 'block': 'none';
    lightIcon.style.display = (body.classList.contains('night-theme'))
    ? 'none':'block';
});

getStarted.addEventListener('click',()=>{
    window.location.href = "page2.html";
});

join.addEventListener('click',()=>{
    wimdow.location.href = "page2.html";
});
