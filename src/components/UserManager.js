import React from "react";
import LoggedInComponent from "./LoggedInComponent";
import LoggedOutComponent from "./LoggedOutComponent"
import "bootstrap/dist/css/bootstrap.min.css"

/*
This page was used to test rendering loggedIn vs. loggedOut (this still works,
so I'd like to keep the mapping together for now. Will delete!
 */
//Parent component of LoggedIn and LoggedOut components. Renders child pages respectively via flag
class UserManager extends React.Component {
    state = {
        loggedIn: false

    }

    /*
    toggle function switches loggedIn flag.
     */
    toggle = () =>
        this.setState(prevState => {
            if (prevState.loggedIn === false) {
                return ({
                    loggedIn: true //return obj w/ layout set as grid
                })
            } else {
                return ({
                    loggedIn: false //will render diff
                })
            }
        })

    render() {
        return (
            <div className="container container-fluid">
                <h1>User view</h1>
                {/*Tentative button to toggle between loggedIn View & LoggedOut view. */}
                <span><button className="float-right btn btn-lg btn-info" onClick={this.toggle}>
                    <i className="fa fa-plus-circle"/>Toggle to Other view</button></span>

                {
                    !this.state.loggedIn && <LoggedOutComponent/>
                    // this.currentUser.role === 'admin' && AdminUserComp
                }

                {
                    this.state.loggedIn && <LoggedInComponent/>
                }
            </div>

        )

    }

}

export default UserManager
