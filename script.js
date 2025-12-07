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
// Removed unused link5 variable
const getStarted = document.getElementById('link6');
const themeToggle = document.querySelector('.themeToggle');
const body = document.body;
const darkIcon = document.querySelector('.icon-light')
const lightIcon = document.querySelector('.icon-dark')
// Changed to select all pricing buttons by their new class 'join-btn'
const joinBtns = document.querySelectorAll('.join-btn'); 


link1.addEventListener('click', () => {
    scrollToElements('.container', 0);
});

link2.addEventListener('click', () => {
    // Scrolls to the h2 in the Features section
    scrollToElements('.header', 0); 
});

link3.addEventListener('click', () => {
    // Scrolls to the h2 in the Pricing section
    scrollToElements('.header', 1); 
});

link4.addEventListener('click', () => {
    // Scrolls to the first column in the footer (About section)
    scrollToElements('.column', 0); 
});

themeToggle.addEventListener('click', ()=> {
    body.classList.toggle('night-theme');
    // Logic to switch the sun/moon icon visibility
    darkIcon.style.display = (body.classList.contains('night-theme'))
    ? 'block': 'none';
    lightIcon.style.display = (body.classList.contains('night-theme'))
    ? 'none':'block';
});

getStarted.addEventListener('click',()=>{
    window.location.href = "page2.html";
});

// Fixed 'wimdow' typo and attached listener to all 'join-btn' elements
joinBtns.forEach(button => {
    button.addEventListener('click',()=>{
        window.location.href = "page2.html";
    });
});