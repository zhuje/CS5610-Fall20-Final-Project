import React from "react";

/*
This page was used to test rendering loggedIn vs. loggedOut (this still works,
so I'd like to keep the mapping together for now. Will delete!
 */
class AnonymousView extends React.Component {

    //Thought - general table to inform Users of each user type access...
    render() {
        return (
            <div className={"container container-fluid"}>
                <h1> Public Home Page / Dashboard</h1>
                <h3> You are currently viewing as a Guest User.</h3>

                {/*general table for */}
                <table className={"table"}>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Guest user</th>
                            <th> </th>
                            <th>Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> Review Movies </td>
                            <td> Full Database access</td>
                            <td> Friend  </td>
                            <td>Feature 4</td>
                        </tr>

                    </tbody>


                </table>
            </div>

        )

    }

}

export default AnonymousView
