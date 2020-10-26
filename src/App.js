import React, {useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import {AuthContext} from "./auth";
import Login from "./Login";
import {Nav} from "react-bootstrap";
import Signup from "./SignUp";
import UserManager from "./components/UserManager"



//App is wrapped in BrowserRouter in index.js
    function App(props) {
        //tokens to use for authentication
        const [authTokens, setAuthTokens] = useState();

        //setting new state for <AuthContext.Provider, using state allows synamic context data
        //and can change depending on user input
        const setTokens = (data) => {
            localStorage.setItem("tokens", JSON.stringify(data));
            setAuthTokens(data);
        }
        return (
//set to false for now, use Auth hook will return false when checking authentication
            //so all PrivateRoutes are inaccessible
            <AuthContext.Provider value={false}>
            <Router>
                <div>
                    <Nav  activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                        <Nav.Item className={"nav-item"}>
                            <NavLink to="/">Home Page</NavLink>
                        </Nav.Item>
                        <Nav.Item className={"nav-item"}>
                            <NavLink  to="/admin">Admin Page</NavLink>
                        </Nav.Item>
                        <Nav.Item className={"nav-item"}>
                            <NavLink to="/login">Login Page</NavLink>
                        </Nav.Item>
                        <Nav.Item className={"nav-item"}>
                            <NavLink to="/users">User Views</NavLink>
                        </Nav.Item>
                    </Nav>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute path="/admin" component={Admin} />
                    <Route exact path="/login" component={Login}/>
                    <Route path="/signup" component={Signup} />
                    <Route path = "/users" component={UserManager} />
                </div>
            </Router>
            </AuthContext.Provider> //in order to use context
        );
    }

export default App;
