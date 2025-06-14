
const Reservation = (function () {
    const mainContainer = document.querySelector("#main-container")
    const content = document.querySelector("#content");
    const header = document.querySelector("header");

    function removePrevious() {
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }
    };

    function create() {
        const container = document.createElement("div");
        container.setAttribute("id", "reservation-container");

        const reserveForm = document.createElement("div");
        reserveForm.setAttribute("id", "reservation-form");

        const headline = document.createElement("div");
        headline.setAttribute("id", "reservation-headline");
        headline.textContent = "MAKE A RESERVATION";

        const info = document.createElement("div");
        info.setAttribute("id", "reservation-info");
        info.textContent = `Dive into a world of rich flavors 🍷, warm ambiance,
                        and unforgettable moments. Whether it’s a date night or a family dinner — we’ve got your table
                        ready`;
        const span = document.createElement('span');
        span.setAttribute("id", "wine-emoji");
        span.textContent = "🥂";
        info.appendChild(span);


        reserveForm.append(headline, info);

        const formContainer = document.createElement("div");
        formContainer.setAttribute("id", "form-container");
        const form = document.createElement("form");

        const formControl = document.createElement("div");
        formControl.setAttribute("id", "form-control");

        for (let i = 0; i < 3; i++) {
            const div = document.createElement("div");
            const label = document.createElement("label");
            const input = document.createElement("input");

            switch (i) {
                case 0: label.textContent = "Party Size";
                    const select = document.createElement("select");
                    for (let j = 0; j < 8; j++) {
                        const option = document.createElement("option");
                        option.textContent = `${i + 1} guests`;
                        select.appendChild(option);
                    };
                    div.append(label, select);
                    formControl.appendChild(div);
                    break;
                case 1: label.textContent = "Date";
                    input.setAttribute("type", "date");
                    div.append(label, input);
                    formControl.appendChild(div);
                    break;
                case 2: label.textContent = "Time";
                    input.setAttribute("type", "time");
                    div.append(label, input);
                    formControl.appendChild(div);
            }
        };

        const buttons = document.createElement("div");
        buttons.setAttribute("id", "buttons");
        const button = document.createElement("button");
        button.textContent = "BOOK NOW";
        buttons.appendChild(button);
        form.append(formControl, buttons);
        formContainer.append(form);
        reserveForm.append(formContainer);


        const hallImage = document.createElement("div");
        hallImage.setAttribute("id", "hall-image");

        container.append(reserveForm, hallImage);
        content.append(container);
    }
    function changeStyles() {
        mainContainer.classList.remove("home-tab-open");
        mainContainer.classList.remove("menu-tab");
        mainContainer.classList.add("reservation-tab-open");
        mainContainer.style.padding = "0"
        header.style.padding = "5vh 6vw"
        header.classList.add("header-in-menu");
        const body = document.querySelector("body");
        body.style.backgroundColor = "white";
    }
    return {
        removePrevious,
        create,
        changeStyles
    }
})();

export { Reservation };