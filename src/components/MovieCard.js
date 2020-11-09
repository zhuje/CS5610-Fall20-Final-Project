import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

/*
A MovieCard represents an added/liked movie of a User movies 'array/list.'
Thought: use similar method we used to courses.map, each course is rendered as a CourseCard =
each movie is rendered as a MovieCard.
 */
export default class MovieCard extends React.Component {
    render() {
        return (
            <div className="card" styles="width=200rem">
                <img className="card-img-top"
                    //we can insert movie info (title, id etc) from API
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h6 className="card-title"> Will receive title from liked movies array </h6>
                    <p className="card-text">Description of movie etc.</p>
                </div>
            </div>
        )
    }
}