//export const filterData = (dataGhibli, condition) => {
 // if (condition == "filme 1") {
 //     return film.films[0].title
 // }
//}





export const filterData = (dataGhibli, prop, name) => {
const filterData = dataGhibli.filter(dataGhibli => dataGhibli[prop] === name)
  return filterData;
};