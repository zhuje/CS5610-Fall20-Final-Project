import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import movieFriends from "../img/movieFriends.jpg";
import { Card, Logo, Form, Input, Button, Error } from "./AuthForms";
import { useAuth } from "../auth.js";
import {AxiosInstance as axios} from "axios";
import '../style/style.css'

export default class Login extends React.Component {

    state = {
        user: {
            username: '',
            password: ''
        }
    }

    login = () =>
        fetch(`http://localhost:8080/login`, {
            method: 'POST',
            //embed in the body w/ the user that is trying to register
            body: JSON.stringify(this.state.user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(response => response.json())
            .then(user => this.props.history.push('./profile')) //new user added once verified
    //is user and password match to something already stored, if so, it should make current user


    render() {
        return (
            <Card>
                <h1>Login</h1>
                <Logo src={movieFriends}/>
                <Form>
                    <Input
                        onChange={
                            (e) => {
                                const username = e.target.value
                                this.setState(prevState => (
                                    {
                                        user: {
                                            ...prevState.user, username: username
                                        }
                                    }
                                ))
                            }}
                        value={this.state.user.username} placeholder="username"/>
                    <Input onChange={
                        (e) => {
                            const password = e.target.value
                            this.setState(prevState => (
                                {
                                    user: {
                                        ...prevState.user, password: password
                                    }
                                }))
                        }
                    }
                           value={this.state.user.password} type="password" placeholder="password"/>
                    {/*<Button onClick={postLogin}>Sign In</Button>*/}
                    <Button onClick={this.login}>Sign In</Button>
                </Form>
                <Link to="/signup">Don't have an account?</Link>
                {/*{isError && <Error>The username or password provided were incorrect!</Error>}*/}
            </Card>
        );
    }
}


//
// const Login = () => {
//     return (
//         <div class = "container container-fluid">
//             <h1>Login</h1>
//
//             <div className="form-group row">
//                 <label htmlFor="logUsername"
//                        className="col-sm-2 col-form-label">
//                     Username </label>
//                 <div className="col-sm-10">
//                     <input className="form-control" id="logUsername"
//                            placeholder=" Wax"/>
//                 </div>
//             </div>
//
//             <div className="form-group row">
//                 <label htmlFor="logPassword"
//                        className="col-sm-2 col-form-label">
//                     Password
//                 </label>
//                 <div className=" col-sm-10">
//                     <input type="password" className="form-control"
//                            id="logPassword" placeholder="123qwe#$%"/>
//                 </div>
//             </div>
//
//             <div className="form-group row">
//                 <label className="col-sm-2 col-form-label"></label>
//                 <div className="col-sm-10">
//
//                     <a>
//                         <button className="btn btn-primary btn-block">
//                             Sign in
//                         </button>
//                     </a>
//
//                     <a>
//                         <button id="cancelBtn" className="btn btn-primary btn-block">
//                             Cancel
//                         </button>
//                     </a>
//
//                     <div className="row">
//                         <div className="col-6">
//                             <a href="#" className="wbdv-link">Forgot
//                                 Password?</a>
//                         </div>
//                         <div className="col-6">
//                             {/*// clicking on login page should direct user to account options*/}
//                             <a href="../register/register.template.client.html"
//                                className="float-right">Sign up</a>
//                         </div>
//
//                     </div>
//
//                 </div>
//
//             </div>
//
//         </div>
//     )
// }



