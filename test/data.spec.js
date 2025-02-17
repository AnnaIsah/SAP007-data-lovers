import {
    filterDataByDirector,
    filterDataByProducer,
    getPeopleByFilmTitleAndGender,
    sortDataFilms,
    calculateAverageScore,
  } from "../src/data.js";
  
  describe("filtraDataByDirector filtra diretor de acordo com o desejo do usuário", () => {
    it("Deve filtrar filmes por um diretor específico", () => {
      const semFiltro = [
        { director: "Hiromasa Yonebayashi" },
        { director: "Hayao Miyazaki" },
      ];
      const selecionada = "Hayao Miyazaki";
      const comFiltro = filterDataByDirector(semFiltro, selecionada);
  
      expect(comFiltro[0].director).toBe("Hayao Miyazaki");
    });
  });
  
  describe("filtraDataByProducer filtra produtor de acordo com o desejo do usuário", () => {
    it("Deve filtrar filmes por um produtor específico", () => {
      const semFiltro = [
        { producer: "Toshio Suzuki" },
        { producer: "Yoshiaki Nishimura" },
      ];
      const selecionada = "Yoshiaki Nishimura";
      const comFiltro = filterDataByProducer(semFiltro, selecionada);
  
      expect(comFiltro[0].producer).toBe("Yoshiaki Nishimura");
    });
  });

  describe("getPeopleByFilmTitleByGender deve filtrar os personagens por filtro e gênero", () => {
    const films = [
      {
          title: 'foo bar',
          people: [
              { name: 'Al', gender: 'Female' }
          ]
      },
      {
          title: 'asbc',
          people: [
              { name: 'Bk', gender: 'Male' }
          ]
      },
      {
          title: 'js',
          people: [
              { name: 'Thk', gender: 'Male' },
              { name: 'Kpl', gender: 'Male' },
              { name: 'Tha', gender: 'Female' },
          ]
      },
      {
          title: 'react',
          people: [
              { name: 'Lo', gender: 'Female' },
              { name: 'Mpo', gender: 'Female' }
          ]
      }
  ]
    it("Deve filtrar os personagens de acordo com o filme selecionado", () => {
        

        const filmSelected = "js"
        
        const result = getPeopleByFilmTitleAndGender(films, filmSelected)

        expect(result.length).toBe(3)
    })
    it("Deve mostrar todos os personagens quando não há filme selecionado", () => {
        

      const filmSelected = " "
      
      const result = getPeopleByFilmTitleAndGender(films, filmSelected)

      expect(result.length).toBe(7)
  })
  it("Deve filtrar os personagens masculinos do filme selecionado", () => {
        

    const genderSelected = "Male"
    
    const result = getPeopleByFilmTitleAndGender(films,filmSelected, genderSelected)

    expect(result.length).toBe(2)
})
it("Deve filtrar os personagens femininos do filme selecionado", () => {
        

  const genderSelected = "Female"
  
  const result = getPeopleByFilmTitleAndGender(films, filmSelected, genderSelected)

  expect(result.length).toBe(1)
})
})
  
  describe("sortDataFilms ordena os filmes de a-z de z-a", () => {
      it("Deve ordenar os títulos dos filmes por ordem alfabética de A-Z", () => {
          const semOrdenação = [
            {title:"Castle in the Sky"},
              { title: "Spirited Away" }, 
              { title: "Ponyo on the Cliff by the Sea" },
              
          ];
          const selecionada = "A - Z";
          const comOrdenação = sortDataFilms(semOrdenação, selecionada);
  
          expect(comOrdenação[0].title).toBe("Castle in the Sky");
             
          
        });
  
    it("Deve ordenar os títulos dos filmes por ordem alfabética de Z-A", () => {
      const semOrdenação = [
        { title: "Ponyo on the Cliff by the Sea" },
        { title: "My Neighbor Totoro" },
        {title:"Castle in the sky"}
      ];
      const selecionada = "Z-A";
      const comOrdenação = sortDataFilms(semOrdenação, selecionada);
  
      expect(comOrdenação[0].title).toBe("Ponyo on the Cliff by the Sea");
    });
    
  
  });
   
  describe("calculateAverageScore calcula a média de nota de avaliação dos filmes", () => {
    it("Deve somar as rt-score e depois dividir pela quantidade de filmes", () => {
      const objeto = [95, 93, 96, 100];
  
      const calculo = calculateAverageScore(objeto);
  
      expect(calculo).toBe(96);
    });
  });