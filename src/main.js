import dataGhibli from "./data/ghibli/ghibli.js"
import { filterDataByDirector, filterDataByProducer, sortDataFilms } from "./data.js"

//PARA CHAMAR A ARRAY
const films = dataGhibli.films;

//PARA IMPRIMIR NA TELA O POSTER COM O TÍTULO DO FILME
function cardSection(items) {
    const card = document.getElementById("card")
    card.innerHTML = " "
    for (let i = 0; i < items.length; i++) {
        const cardSection = document.createElement("div");
        cardSection.setAttribute("class", "card-section");
        const titleElement = document.createElement("h2");
        const posterElement = document.createElement("img");
        let primeiroItem = items[i];
        posterElement.src = primeiroItem.poster;
        titleElement.innerHTML = primeiroItem.title;
        cardSection.appendChild(titleElement);
        cardSection.appendChild(posterElement);
        card.appendChild(cardSection);
    }
}
cardSection(films);

//PARA PEGAR O VALOR DO INPUT DO SELETOR
document.addEventListener("change", () => {
    const optionsDirector = document.getElementById("director")
    const directorIndex = optionsDirector.selectedIndex;
    const directorSelected = optionsDirector[directorIndex].text;
    const directorFiltered = filterDataByDirector(films, directorSelected);

    cardSection(directorFiltered)

});

document.addEventListener("change", () => {
    const optionsProducer = document.getElementById("producer")
    const producerIndex = optionsProducer.selectedIndex;
    const producerSelected = optionsProducer[producerIndex].text;
    const producerFiltered = filterDataByProducer(films, producerSelected);

    cardSection(producerFiltered)

});

document.addEventListener("change",() => {
    const optionsOrder = document.getElementById("order")
    const orderIndex = optionsOrder.selectedIndex;
    const orderSelected = optionsOrder[orderIndex].text;
    const orderFiltered = sortDataFilms(films, orderSelected);

    cardSection(orderFiltered)
});
