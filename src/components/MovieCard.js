import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class MovieCard extends React.Component {
    render() {
        return (

            <div className="card" styles="width=200rem">
                <img className="card-img-top"
                     //can render from movie API etc
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h6 className="card-title">  Will receive title from liked movies array </h6>
                    <p className="card-text">Description of movie etc.</p>
                </div>
            </div>
        )
    }
}