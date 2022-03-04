export const filterDataByDirector = (films, condition) => {
    return films.filter(film => film.director.includes(condition))
}


export const filterDataByProducer = (films, condition) => {
    return films.filter(film => (film.producer.includes(condition)))
}

export const sortDataFilms = (films, order) => {
    if (order === "A > Z") {
        return films.sort((a, b) => a.title > b.title ? 1 : -1)
    } else {  
        return films.sort((a, b) => a.title > b.title ? -1 : 1)
        }
}

// export const filterByPeople = (films, condition) => {
//     return films.filter (film => (film.people.includes(condition)))
// }

