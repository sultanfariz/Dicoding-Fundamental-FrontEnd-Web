import "./drink-item.js"

class DrinkList extends HTMLElement {

    constructor() {
        super();
    }

    set drinks(drinks) {
        this._drinks = drinks;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._drinks.forEach(drinks => {
            const drinkItemElement = document.createElement("drink-item");
            drinkItemElement.drinks = drinks;
            this.appendChild(drinkItemElement);
        });
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: #FFFFFF;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
            <h2 class="placeholder">${message}</h2>
        `;
    }
}

customElements.define("drink-list", DrinkList);