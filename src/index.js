import "./styles/style.css";
import "./styles/menu.css";
import "./styles/reservation.css";

import { Home } from "./modules/home";
import { Menu } from "./modules/menu";
import { Reservation } from "./modules/reservation";

const DOMHandler = (function () {
    const homeBtn = document.querySelector("#home-button");
    const menuBtn = document.querySelector("#menu-button");
    const reserveBtn = document.querySelector("#reserve-button");

    function showHomeTab() {
        Home.removePrevious();
        Home.create();
        Home.changeStyles();
    };

    function showMenuTab() {
        Menu.removePrevious();
        Menu.create();
        Menu.changeStyles()
    }
    function showReservationTab() {
        Reservation.removePrevious();
        Reservation.create();
        Reservation.changeStyles();
    }

    function initialize() {
        homeBtn.addEventListener("click", showHomeTab);
        menuBtn.addEventListener("click", showMenuTab);
        reserveBtn.addEventListener("click", showReservationTab);
        showHomeTab();
    };
    return {
        initialize
    }
})();

DOMHandler.initialize();
console.log("hii");