import { filterDataByDirector, filterDataByProducer, sortDataFilms} from '../src/data.js';

describe('filtraDataByDirector filtra diretor de acordo com o desejo do usuário', () => {
  it('Deve filtrar filmes por um diretor específico', () => {
    const semFiltro = [
      {director: "Hiromasa Yonebayashi"},
      {director: "Hayao Miyazaki"},
    ]
    const selecionada = "Hayao Miyazaki"
    const comFiltro = filterDataByDirector(semFiltro, selecionada);

    expect(comFiltro[0].director).toBe("Hayao Miyazaki");
  })
})

describe('filtraDataByProducer filtra produtor de acordo com o desejo do usuário', () => {
  it('Deve filtrar filmes por um produtor específico', () => {
    const semFiltro = [
      {producer: "Toshio Suzuki"},
      {producer: "Yoshiaki Nishimura"},
    ]
    const selecionada = "Yoshiaki Nishimura"
    const comFiltro = filterDataByProducer(semFiltro, selecionada);

    expect(comFiltro[0].producer).toBe("Yoshiaki Nishimura");
  })
})

describe('sortDataFilms ordena os filmes de a-z de z-a', () => {
  it('Deve ordenar os títulos dos filmes por ordem alfabética e vice-versa', () => {
    const semOrdenação = [
      {title:"Ponyo on the Cliff by the Sea"},
      {title:"My Neighbor Totoro"},
    ]
    const selecionada = "A-Z"
    const comOrdenação = sortDataFilms(semOrdenação, selecionada);

    expect(comOrdenação[0].title).toBe("My Neighbor Totoro");
  })
})