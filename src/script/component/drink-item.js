class DrinkItem extends HTMLElement {

    constructor() {
        super();
    }

    set drinks(drinks) {
        this._drink = drinks;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="col m4 offset-m1 s10 offset-s1 card __card-box-shadow __nav-color __mt-40px">
            <div class="card-image waves-effect waves-block waves-light">
                   <img class="activator" src="${this._drink.strDrinkThumb}">
            </div>
            <div class="card-content __nav-color">
                <span class="card-title activator white-text">${this._drink.strDrink}<i
                        class="material-icons right">more_vert</i></span>
                
            </div>
            <div class="card-reveal __nav-color">
                <span class="card-title white-text ">${this._drink.strDrink}<i
                        class="material-icons right">close</i></span>
                <p class="white-text ">${this._drink.strInstructions}</p>
                <div class="__order __mt-50px">ORDER</div>
            </div>
        </div>`;
    }

}

customElements.define("drink-item", DrinkItem);