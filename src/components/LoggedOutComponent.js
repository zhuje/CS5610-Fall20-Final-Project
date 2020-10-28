import React from "react";


class LoggedOutComponent extends React.Component {

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

export default LoggedOutComponent