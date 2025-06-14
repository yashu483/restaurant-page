"use strict";
const Menu = (function () {
    //add required dom element for home tab
    const mainContainer = document.querySelector("#main-container")
    const header = document.querySelector("header");
    const content = document.querySelector("#content");


    function removePrevious() {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    };

    function create() {
        const menu = document.createElement("div");
        menu.setAttribute("id", "menu");

        const menuTagline = document.createElement("div");
        menuTagline.setAttribute("id", "menu-tagline");
        menuTagline.textContent = "What's on your Mind?";

        // card container
        const cardContainer = document.createElement("div");
        cardContainer.setAttribute("id", "menu-card-container");

        //cards
        for (let i = 0; i < 8; i++) {
            const menuCard = document.createElement("div");
            menuCard.classList.add("menu-card");

            const foodImage = document.createElement("div");
            foodImage.classList.add("food-image");

            const foodInfo = document.createElement("div");
            foodInfo.classList.add("food-info");

            const foodName = document.createElement("div");

            const orderButton = document.createElement("button");
            orderButton.textContent = "Order Now";
            foodInfo.appendChild(orderButton);

            switch (i) {
                case 0: foodImage.setAttribute("id", "burger");
                    foodImage.textContent = "ITEM AT $12";
                    foodName.textContent = "BURGER";
                    foodInfo.prepend(foodName);
                    menuCard.append(foodImage, foodInfo);
                    cardContainer.append(menuCard);
                    break;
                case 1: foodImage.setAttribute('id', 'pizza');
                    foodImage.textContent = "ITEM AT $19";
                    foodName.textContent = "PIZZA";
                    foodInfo.prepend(foodName);
                    menuCard.append(foodImage, foodInfo);
                    cardContainer.append(menuCard);
                    break;
                case 2: foodImage.setAttribute('id', 'chicken');
                    foodImage.textContent = "ITEM AT $15";
                    foodName.textContent = "FRIED CHICKEN";
                    foodInfo.prepend(foodName);
                    menuCard.append(foodImage, foodInfo);
                    cardContainer.append(menuCard);
                    break;
                case 3: foodImage.setAttribute('id', 'lobester');
                    foodImage.textContent = "ITEM AT $35";
                    foodName.textContent = "SPICY LOBSTER";
                    foodInfo.prepend(foodName);
                    menuCard.append(foodImage, foodInfo);
                    cardContainer.append(menuCard);
                    break;
                case 4: foodImage.setAttribute('id', 'noodle');
                    foodImage.textContent = "ITEM AT $2";
                    foodName.textContent = "YUMMY! NOODLE";
                    foodInfo.prepend(foodName);
                    menuCard.append(foodImage, foodInfo);
                    cardContainer.append(menuCard);
                    break;
                case 5: foodImage.setAttribute('id', 'ice-cream');
                    foodImage.textContent = "ITEM AT $2-$5";
                    foodName.textContent = "ICE CREAM";
                    foodInfo.prepend(foodName);
                    menuCard.append(foodImage, foodInfo);
                    cardContainer.append(menuCard);
                    break;
                case 6: foodImage.setAttribute('id', 'momo');
                    foodImage.textContent = "ITEM AT $7";
                    foodName.textContent = "WOW! MOMOS";
                    foodInfo.prepend(foodName);
                    menuCard.append(foodImage, foodInfo);
                    cardContainer.append(menuCard);
                    break;
                case 7: foodImage.setAttribute('id', 'salad');
                    foodImage.textContent = "ITEM AT $3";
                    foodName.textContent = "SALAD";
                    foodInfo.prepend(foodName);
                    menuCard.append(foodImage, foodInfo);
                    cardContainer.append(menuCard);
                    break;
            }
        };
        menu.append(menuTagline, cardContainer);
        content.appendChild(menu);

    };
    function changeStyles() {
        mainContainer.classList.remove("home-tab-open");
        mainContainer.classList.remove("reservation-tab-open");
        mainContainer.classList.add("menu-tab");
        mainContainer.style.padding = "0"
        header.style.padding = "5vh 6vw"
        header.classList.add("header-in-menu");
        const body = document.querySelector("body");
        body.style.backgroundColor = "rgb(248, 240, 226)"
    };

    return {
        removePrevious,
        create,
        changeStyles
    }
})();

export { Menu };