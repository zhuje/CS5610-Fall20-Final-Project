import React from "react";
import {useAuth} from "./auth";
import {Button} from "./components/AuthForms";

function Admin(props) {
    const { setAuthTokens } = useAuth();

    function logOut() {
        setAuthTokens();
    }

    return (
        <div>
            <div>Admin Page</div>
            <Button onClick={logOut}>Log out</Button>
        </div>
    );
}


export default Admin;