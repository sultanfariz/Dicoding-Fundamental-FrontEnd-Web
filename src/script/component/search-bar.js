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
        <div class="__search-bar __sticky" style="position:sticky !important; top:30px !important;">
            <input class="__input" type="search" placeholder="Type to search" id="searchText">
            <button class="__button" id="searchButton" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </div>`;

        this.querySelector('#searchButton').addEventListener("click", this._clickEvent);
        this.querySelector('#searchText').addEventListener("keyup", (event) => {
            if (event.keyCode == 13) document.getElementById("searchButton").click();
        });
    }
}

customElements.define("search-bar", SearchBar);