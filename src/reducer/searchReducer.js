const initialState = {
    movie: {},
    movieDetails: {}
}

const searchReducer = (state=initialState, action) => {
    console.log("Reducer Reach! ")
    switch(action.type) {
        case "UPDATE_SEARCH_MOVIE_ID":
            return {
                movie: action.movie
            }
        case "REDUCER_MOVIE_DETAILS":
            return {
                movieDetails: action.movieDetails
            }
        default:
            return state
    }

}

export default searchReducer
