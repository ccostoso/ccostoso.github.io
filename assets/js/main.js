const menuToggler = document.querySelector('#menu-toggler');
const vertNav = document.querySelector('#vert-nav');
const vertNavWidth = 50;
vertNav.style.left = `-${vertNavWidth}%`;
vertNav.style.width = `${vertNavWidth}%`;
vertNav.style.display = "initial";

menuToggler.onclick = function() {
    if (vertNav.style.left !== "0%") {
        vertNav.style.left = "0%";
    } else {
        vertNav.style.left = `-${vertNavWidth}%`;
    }
};

const yearDisplay = document.getElementById('year-display');
const date = new Date();
yearDisplay.innerText = JSON.stringify(date.getFullYear());
console.log(currentYear);