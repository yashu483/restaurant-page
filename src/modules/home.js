// import homeTabImage from "./../resources/website-home-tab.jpg";

const Home = (function () {
    const mainContainer = document.querySelector("#main-container")
    const content = document.querySelector("#content");
    const header = document.querySelector("header");

    function removePrevious() {
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }
    }
    function create() {
        const home = document.createElement("div");
        home.setAttribute("id", "home");

        const tagsContainer = document.createElement("div");
        tagsContainer.setAttribute("id", "tags-container");

        const eat = document.createElement("div");
        eat.textContent = "EAT";
        tagsContainer.appendChild(eat);

        const drink = document.createElement("div");
        drink.textContent = "DRINK";
        tagsContainer.appendChild(drink);

        const enjoy = document.createElement("div");
        enjoy.textContent = "ENJOY";
        tagsContainer.appendChild(enjoy);

        home.appendChild(tagsContainer);

        const homeAddress = document.createElement("div");
        homeAddress.setAttribute("id", "address-in-home-tab");
        homeAddress.textContent = "123-DEMO STREET - DEMO CITY, EARTH 42 - (922-000-000)"
        home.appendChild(homeAddress);
        home.style.display = "flex"
        mainContainer.classList.add("home-tab-open")
        content.appendChild(home);
    };
    function changeStyles() {
        mainContainer.classList.remove("menu-tab", "reservation-tab-open");
        mainContainer.style.padding = "5vh 6vh";
        mainContainer.style.width = "100vw";
        mainContainer.style.height = "100vh"
        header.style.padding = " 0 0 5rem 0";
        header.classList.remove("header-in-menu")
        const body = document.querySelector("body");
        body.style.backgroundColor = "white"
    };
    return {
        removePrevious,
        create,
        changeStyles
    }
})();

export { Home };