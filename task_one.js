const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");


const toggleMenu = () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>"
    } else {
        menu.classList.add("active");

        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>"
    }
}

toggle.addEventListener('click', toggleMenu, false);



const items = document.querySelectorAll(".item");
const toggleItem = () => {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}

function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}

/* Event listener */
document.addEventListener("click", closeSubmenu, false);