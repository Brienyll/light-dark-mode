const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Dark or light iamges
function imageMode(color) {
    image1.src = `img/undraw_innovative_${color}.svg`;
    image2.src = `img/undraw_3d_modeling_${color}.svg`;
    image3.src = `img/undraw_monster_artist_${color}.svg`;
}


function toggleDarkLightMode(theme) {
    nav.style.backgroundColor = theme == 'light' ?'rgb(255 255 255 / 100%)' : 'rgb(0 0 0 / 100%)';
    textBox.style.backgroundColor = theme == 'light' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = theme == 'light' ? 'Light Mode' : 'Dark Mode';
    theme == 'light' ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    theme == 'light' ? imageMode('light') : imageMode('Dark');
}


// Switch Theme
function switchTheme(evt) {
    if (evt.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode('light');
    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode('dark');
    }
}