import React from "react";
import {NavLink} from "react-router-dom";

function Home(props) {

    return <div className={"container container-fluid"}>
        <h1>Home Page</h1>
        <span>
    <p>Already have an account? </p>
    <button className={"btn btn-success"}>
        <NavLink to={"/login"}>Login </NavLink> </button>
    </span>

    </div>;
}

export default Home;