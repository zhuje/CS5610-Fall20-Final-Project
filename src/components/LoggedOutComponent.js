import React from "react";


class LoggedOutComponent extends React.Component {

    render() {
        return (
            <div className={"container container-fluid"}>
                <h1> Public Home Page / Dashboard</h1>
                <h3> This is a Guest User's view of the page (or public user)</h3>
            </div>

        )

    }

}

export default LoggedOutComponent