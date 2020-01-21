const menuToggler = document.querySelector('#menu-toggler');
const vertNav = document.querySelector('#vert-nav');

const menuLabel = document.getElementById('menu-label');
const menuLabelBefore = getComputedStyle(menuLabel, '::after');

let vertNavWidth = 0;

menuLabelBefore.content !== "none" ? vertNavWidth = 66 : vertNavWidth = 100;

function calcWidth() {
    if (menuLabelBefore.content !== "none") {
        vertNavWidth = 66;
        vertNav.style.width = `${vertNavWidth}%`;
        console.log(`in cW, vertNav.style.width = ${vertNav.style.width}`);
        return vertNavWidth;
    } else {
        vertNavWidth = 100;
        vertNav.style.width = `${vertNavWidth}%`;
        console.log(`in cW, vertNav.style.width = ${vertNav.style.width}`);
        return vertNavWidth;
    }
}

vertNav.style.left = `-${vertNavWidth}%`;
vertNav.style.width = `${vertNavWidth}%`;
vertNav.style.display = "initial";

menuToggler.onclick = function() {
    if (vertNav.style.left !== "0%") {
        calcWidth();
        vertNav.style.left = "0%";
        console.log(`in onC, vertNav.style.left = ${vertNav.style.left}`);
    } else {
        vertNav.style.left = `-${calcWidth()}%`;
        console.log(`in onC, vertNav.style.left = ${vertNav.style.left}`);
    }
};

const yearDisplay = document.getElementById('year-display');
const date = new Date();
yearDisplay.innerText = JSON.stringify(date.getFullYear());
console.log(currentYear);