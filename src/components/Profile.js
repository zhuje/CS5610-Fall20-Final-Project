import React from "react";
import '../style/style.css'

export default class Profile extends React.Component {

    logout = () =>
        //go out to server to log out
        fetch(`http://localhost:8080/logout`,{
            method: 'POST',
            credentials: "include"
        }).then(response => this.props.history.push('./home')) //no need to have json body
    //just logs user w/ cookies out of HttpSession

    state = {
        currentUser: {
            username: '',
            firstName: '',
            lastName: ''
        }
        //TODO: user's friends & movies list:
        //movies: []  // user's liked movies
        //friends, array of other User obj?
    }

//on load, fetch the user via cookies
    componentDidMount() {
        fetch(`http://localhost:8080/currentUser`, {
            method: 'GET',
            credentials: "include"  //must pass cookie
        }).then(response => response.json())
            .then(currentUser => this.setState({
                                                   currentUser: currentUser

                                               }))
    }

    render() {
        return (
            <div className={"container"}>
                <h1> Profile </h1>
                <h2 id = "loggedUser">Currently logged in as: {this.state.currentUser.username} </h2>
                {/*map through liked movies array, generate movie grid, like course grid*/}
                <br/>
                <button className="btn btn-primary" onClick={this.logout}>
                    Logout
                </button>
            </div>
        )
    }

    //success when rendered, hi selena, when we register, goes out to server, stores as
    // currentUser, navigated to the Profile, then profile goes out to get currentUser cookeis),

}