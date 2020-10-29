const url = "http://www.omdbapi.com/?i=tt3896198&apikey=b01479c3";


// GET all courses
// '?'  -- query this
// 'apikey' -- given registered API Key
// '&' -- and
// 't=Sharknado' -- search text Sharknado
export const fetchSearchText = (searchText) =>
    fetch(`http://www.omdbapi.com/?apikey=b01479c3&s=` + searchText)
        .then(response => response.json());



export const fetchMovieByID = (movieID) =>
    fetch(`http://www.omdbapi.com/?apikey=b01479c3&i=` + movieID)
        .then(response => response.json());


export default {
    fetchSearchText,
    fetchMovieByID
}