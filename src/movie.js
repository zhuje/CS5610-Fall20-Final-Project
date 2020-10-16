import React from 'react';
import {fetchMovieByID, fetchSearchText} from './services'


class HelloWorld extends React.Component {



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
                   }



                   )

                //   {
                // console.log(response)
                // const arr = [];
                // Object.keys(response).forEach(key => arr.push({name: key, value: response[key]}))
                // console.log("after foreach " + arr[0].name, arr[0].value)
                // })

                // {
                // this.setState({
                //                   movie: response.Search
                //               })
                // })

    }

    //  movieSelected = (id) =>  {
    //     sessionStorage.setItem('movieId', id);
    //         return false;
    // }

    getMovieByID  = (movieID) => {
        // let movieId = sessionStorage.getItem('movieId');
        fetchMovieByID(movieID)
            . then(response => {
                console.log(response)
                let selectedMovie = response;
                sessionStorage.setItem('movieID', movieID );

                // TODO rerender on empty body like course editor with movie details
                console.log(selectedMovie.Title)
                console.log(selectedMovie.Year)


            })
    }




    render() {
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
                        // 1) this.state.course -- means we're applying state to the array 'courses' so
                        // that once the array is changed we'll rerender the array 'courses' to reflect
                        // the changes on the browser
                        // 2) .map() just means we're going to take the elements being pass in and
                        // manipulate them with some other functions
                        // Here we're applying the function to each the of the components in the
                        // 3) <CourseRowComponent
                        //     courseBeingEdited={this.state.courseBeingEdited}
                        //     editCourse={this.editCourse}
                        //     deleteCourse={this.deleteCourse}
                        //     course={course}/>
                        // Here we're telling the class 'CourseRowComponent' that you can expect a
                        // property called 'deleteCourse' which will pass in a parameter called
                        // 'this.deleteCourse' which is a reference to our function that will
                        // setState and request the browser to rerender the an 'courses' array
                        // without the deleted course.

                        this.state.movie.map(   m =>

                                                   <div className="col-md-3" key={m.imdbID}  onClick={() => this.getMovieByID(m.imdbID)}>
                                                       <div className={"well text-center"}>
                                                       <img src = { m.Poster }/>
                                                       <h5> {m.Title} </h5>
                                                       </div>
                                                   </div>
                            )
                    }
                </div>
            </div>


        </div>

    )
    }
}
export default HelloWorld;