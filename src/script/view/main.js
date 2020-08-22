import '../component/drink-list.js'
import '../component/search-bar.js'
import DataSource from "../data/data-source.js";

const main = function () {
    const searchElement = document.querySelector("search-bar");
    const drinkListElement = document.querySelector("drink-list");

    const onSearchClicked = () => {
        DataSource.search(searchElement.value)
            .then(renderResult).catch(fallbackResult);
    };
    var renderResult = (res) => {
        drinkListElement.drinks = res;
    };

    var fallbackResult = (message) => {
        drinkListElement.innerHTML = "";
        drinkListElement.innerHTML += `<h1 class="placeholder ">${message}</h1>`;
    };

    searchElement.clickEvent = onSearchClicked;
};

export default main;