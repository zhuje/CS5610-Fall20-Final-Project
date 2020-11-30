import React from 'react'

/*
This page was used to test rendering loggedIn vs. loggedOut.
UserView will become Profile page for when user is logged in.
 */
class UserView extends React.Component {

    state = {
        currentUser: {
            username: '',
            firstName: '',
            lastName: '',
            password: ''
        }
    }

//when component is loaded, fetch the specific User.
    //state of currentUser has associated cookies & a current Http session
    componentDidMount() {
        fetch(`http://localhost:8080/currentUser`, {
            method: 'GET',
            credentials: "include"
        }).then(response => response.json())
            .then(currentUser => this.setState({
                                                   currentUser: currentUser
                                               }))
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>UserView page</h1>
                <div className="card" id="userView-card">
                    <div className="card-header">
                        <h4>Profile information for user:
                            <span id="userView-userName">
                            {this.state.currentUser.username}
                    </span></h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            First Name: {this.state.currentUser.firstName}
                            <button className="btn btn-warning edit-button">edit</button>
                        </li>
                        <li className="list-group-item">
                            Last name: {this.state.currentUser.lastName}
                            <button className="btn btn-warning edit-button">edit</button>
                        </li>
                        <li className="list-group-item">
                            Email: {this.state.currentUser.email}
                            <button className="btn btn-warning edit-button">edit</button>
                        </li>
                        <li className="list-group-item">
                            current password: {this.state.currentUser.password}
                            <button className="btn btn-warning edit-button">edit</button>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default UserView
