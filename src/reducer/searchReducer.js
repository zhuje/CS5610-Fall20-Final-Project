const initialState = {
    imdbID: {}
}

const searchReducer = (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_SEARCH_MOVIE_ID":
            return {
                imdbID: action.imdbID
            }
        default:
            return state
    }

}

export default searchReducer
