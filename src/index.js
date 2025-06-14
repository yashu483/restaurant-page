import "./styles/style.css";

import "./styles/menu.css";

import { Home } from "./modules/home";
import {Menu} from "./modules/menu"

const DOMHandler = (function () {
    const homeBtn = document.querySelector("#home-button");
    const menuBtn = document.querySelector("#menu-button");
    const reserveBtn = document.querySelector("#reserve-button");

    function showHomeTab(){
        Home.removePrevious();
        Home.create();
        Home.changeStyles();
    };

    function showMenuTab(){
        Menu.removePrevious();
        Menu.create();
        Menu.changeStyles()
    }

    function initialize(){
        homeBtn.addEventListener("click",showHomeTab);
        menuBtn.addEventListener("click",showMenuTab);
        // showHomeTab();
    };
    return{
        initialize
    }
})();

DOMHandler.initialize();
console.log("hii");