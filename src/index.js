import "./styles/style.css";

import "./styles/menu.css";
import homeTabImage from './resources/website-home-tab.jpg'

import { Home } from "./modules/home"

const DOMHandler = (function () {
    const homeBtn = document.querySelector("#home-button");
    const menuBtn = document.querySelector("#menu-button");
    const reserveBtn = document.querySelector("#reserve-button");
    const mainContainer2 = document.querySelector("#main-container")

    function showHomeTab(){
        Home.removePrevious();
        Home.create();
        Home.changeStyles();
        mainContainer2.style.backgroundImage = homeTabImage;
    };

    function initialize(){
        homeBtn.addEventListener("click",showHomeTab);
    };
    return{
        initialize
    }
})();

DOMHandler.initialize();
console.log("hii");