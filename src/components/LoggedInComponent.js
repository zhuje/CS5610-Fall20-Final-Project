import React from 'react'

/*
This page was used to test rendering loggedIn vs. loggedOut (this still works,
so I'd like to keep the mapping together for now. Will delete.
 */
class LoggedInComponent extends React.Component {
    render() {
        return (

            <div>

                <h1> User Profile</h1>
                <h3> This Logged In User's view</h3>
            </div>

        )
    }
}

export default LoggedInComponent