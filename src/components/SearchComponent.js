import React from 'react';
import searchService, {fetchMovieByID, fetchSearchText} from '../services/SearchService'
import '../style/style.SearchComponent.css'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import SearchCardComponent from './SearchCardComponent'




class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            movie: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        fetchSearchText(this.state.value)
            .then( response =>
                   {
                   this.setState({
                           movie: response.Search
                    })
                    console.log(this.state.movie)
                   })
    }


    // getMovieByID  = (movieID) => {
    //     // let movieId = sessionStorage.getItem('movieId');
    //     fetchMovieByID(movieID)
    //         . then(response => {
    //             console.log(response)
    //             let selectedMovie = response;
    //             sessionStorage.setItem('movieID', movieID );
    //
    //             // TODO rerender on empty body like course editor with movie details
    //             console.log(selectedMovie.Title)
    //             console.log(selectedMovie.Year)
    //
    //         })
    // }




    render(  ) {
        return(

        <div>

            {/* Header */}
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html"> MovieMatch </a>
                    </div>
                </div>
            </nav>

            {/* Search bar */}
            <div className="container">
                <div className="jumbotron">
                    <h3 className="text-center">Search For a Movie :  </h3>

                    <form onSubmit={this.handleSubmit} id="searchForm">
                        <input
                            type="text"
                            className="form-control"
                            id="searchText"
                            placeholder="Search Movies..."
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="Submit" />
                    </form>

                </div>
            </div>

            <div className="container">
                <div id="movies" className="row"></div>
            </div>

            <div className={"container"} >
                <div className={"row"} >
                    {
                        // Search Cards --  display response from JSON 'Search' array
                        this.state.movie.map( m =>

                                                  <Card className={"wbdv-search-card text-center"} style={{ width: '18rem' }}>
                                                      <Card.Img className={"wbdv-search-card-img-top"} variant="top" src= {m.Poster} />
                                                      <Card.Body className={"d-flex flex-column "}>
                                                          <Card.Title> {m.Title} </Card.Title>
                                                          <Card.Text>
                                                              {m.Year}
                                                          </Card.Text>
                                                          <Link className={"mt-auto"}  to={`/searchByID/${m.imdbID}`}>
                                                                <Button  onClick={()=> this.props.fetchMovieByID(m.imdbID)}  className={"  btn btn-lg btn-block btn-primary wbdv-search-details-btn"} variant="primary"> Details </Button>
                                                          </Link>

                                                          <Button className={" align-self-end btn btn-lg btn-block btn-danger "} variant="primary"> Add </Button>
                                                      </Card.Body>
                                                  </Card>



                            )
                    }

                </div>
            </div>
        </div>

    )
    }
}


const stateToPropertyMapper = (state) => ({
   movie: state.searchReducer.movie

})


const propertyToDispatchMapper = (dispatch) => ({
    dispatchSearchByMovieID: (movie) =>
        dispatch({
                   type: "UPDATE_SEARCH_MOVIE_ID",
                   movie: movie
               }),
    fetchMovieByID: ( movieID ) =>
        searchService.fetchMovieByID( movieID )
            .then(actualMovie => dispatch({
                                              type: "REDUCER_MOVIE_DETAILS",
                                              movieDetails: actualMovie
                                          }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(SearchComponent) ;