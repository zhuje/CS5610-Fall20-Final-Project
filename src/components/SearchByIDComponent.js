import React from 'react';
import {connect} from "react-redux";
import searchService, {fetchMovieByID} from "../services/SearchService";
import '../style/style.SearchComponent.css'
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";


const SearchByIDComponent = ({ movie={}, movieDetails={}, fetchMovieByID  }) =>

    <div>


        <h1 className={"wdbv-searchByID-header"}> Movie Details </h1>

        <div className="row wdbv-searchByID-row">

            <div className="col-4">


                <Card className={"text-center"} style={{width: '20rem'}}>
                    <Card.Img className={"wbdv-searchByID-card-img-top"} variant="top"
                              src={movieDetails.Poster}/>
                    <Card.Body className={"d-flex flex-column "}>
                        <Card.Title> {movieDetails.Title} </Card.Title>
                        <Card.Text>
                            {movieDetails.Year}
                        </Card.Text>
                        <Button className={" align-self-end btn btn-lg btn-block btn-danger "}
                                variant="primary"> Add </Button>
                    </Card.Body>
                </Card>


            </div>
            <div className="col-8">
                <h1> {movieDetails.Title} </h1>
                <b> Plot : </b> {movieDetails.Plot} <br/>
                <b> Rated : </b> {movieDetails.Rated} <br/>
                <b> Released : </b>{movieDetails.Released} <br/>
                <b> Runtime : </b>{movieDetails.Runtime} <br/>
                <b> Genre : </b> {movieDetails.Genre} <br/>
                <b> Director : </b> {movieDetails.Director} <br/>
                <b> Writer : </b>{movieDetails.Writer} <br/>
                <b> Actors : </b> {movieDetails.Actors} <br/>
                <b> Production : </b> {movieDetails.Production} <br/>
                <b> imdbRating : </b> {movieDetails.imdbRating} <br/>
                <b> imdbVotes : </b> {movieDetails.imdbVotes} <br/>

            </div>
        </div>


    </div>




const stateToPropertyMapper = (state) => ({
    movie: state.searchReducer.movie,
    movieDetails: state.searchReducer.movieDetails

})

const dispatchToPropertyMapper = (dispatch) => ({
    fetchMovieByID: ( movieID ) =>
        searchService.fetchMovieByID( movieID )
            .then(actualMovie => dispatch({
                                               type: "REDUCER_MOVIE_DETAILS",
                                               movieDetails: actualMovie
                                           }))
})



export default connect
(stateToPropertyMapper, dispatchToPropertyMapper())
(SearchByIDComponent)

