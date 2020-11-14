import React from 'react';
import '../style/style.HomeComponent.css'

const HomeComponent = () =>
    <div>
        <section className={"jumbotron text-center"}>
            <div className={"container"}>
                <h1 className={"jumbotron-heading"}> Welcome to MovieMatch </h1>
                <p className={"lead text-muted"}> Let's get started finding a movie to watch with your friends! </p>
                <a href="/register"  className="btn btn-primary my-2 wbdv-home-jumbotron-btn"> Sign Up </a>
                <a href="/login" className="btn btn-secondary my-2 wbdv-home-jumbotron-btn"> Login </a>
            </div>
        </section>











    </div>

export default HomeComponent