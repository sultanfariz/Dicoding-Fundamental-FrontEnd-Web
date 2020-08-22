class SearchBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchText").value;
    }

    render() {
        this.innerHTML = `
        <div class="__search-bar">
            <input class="__input" type="search" placeholder="Type to search" id="searchText">
            <button class="__button" id="searchButton" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </div>`;

        this.querySelector('#searchButton').addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);