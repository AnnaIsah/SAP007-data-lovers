import dataGhibli from "./data/ghibli/ghibli.js"
import { filterData } from "./data.js"

//PARA CHAMAR A ARRAY
const films = dataGhibli.films;


//PARA FILTRAR OS FILMES
films.map (films => films.id);
console.log(films);

//PARA PEGAR O VALOR DO INPUT DO SELETOR
director.addEventListener("change", () => {
  const optionsDirector = document.getElementById("director")
  const valueDirector = optionsDirector.options[optionsDirector.selectedIndex].text;

  console.log("oi");
});
 

for (let i = 0; i < films.length; i++) {

    const cardSection = document.createElement("div")
    const titleElement = document.createElement("h2")
    const posterElement = document.createElement("img")
    let primeiroItem = ""
    primeiroItem = films[i];
    posterElement.src = primeiroItem.poster
    titleElement.innerHTML = primeiroItem.title
    cardSection.appendChild(titleElement)
    cardSection.appendChild(posterElement)
    const card = document.getElementById("card")
    card.appendChild(cardSection)
}

//for (let i = 0; i <= films.length; i++) {
 //   let filtraDiretor = films[i].director;
  //  if(director.filterData){
 //       cardSection

 //   }
   // console.log(films[i]);
//}




// let resposta = document.getElementById("resposta");

//let film1 = dataGhibli.filterData(0, "filme 1");

//resposta.innerHTML = film1;


////////////////////////////////////////////////////////////////////


