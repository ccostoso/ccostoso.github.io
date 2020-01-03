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

// const mainContainer = document.querySelector('#main-container');
// const headerBar = document.querySelector('#header-bar');
// mainContainer.style["margin-top"] = `${parseInt((getComputedStyle(headerBar).height).slice(0, (getComputedStyle(headerBar).height).length - 2)) * 1.25}px`;
// console.log(mainContainer.style["margin-top"]);