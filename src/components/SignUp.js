// Screen for a new user to register for account for our app
//should prompt with User account options
//Guest/Anonymous, Regular, Admin
//list of access for each (table)

import React from "react";
import {Link} from 'react-router-dom';
import popcornUnsplash from "../img/popcornUnsplash.jpg"
import {Card, Logo, Form, Input, Button} from './AuthForms';

/*
Will navigate to a User's Profile page once user credentials have been validated via cookies.
 */
export default class Signup extends React.Component {

    state = {
        user: {
            username: '',
            password: '',
            verifyPassword: ''
        }
    }

    //allows to programmatically navigate to specified profile pg, function allows for validation
    register = () => {
        //grab info and send to server
        //http://wbdv-generic-server.herokuapp.com/api/hicianoj/register
        fetch(`http://localhost:8080/register`, {
            method: 'POST',
            //embed in the body w/ the user that is trying to register
            body: JSON.stringify(this.state.user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(response => response.json())
            .then(user => this.props.history.push('./profile')) //new user added once verified
    }

    render() {
        return (
            <Card>
                <h1>Sign Up </h1>
                <Logo src={popcornUnsplash}/>
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

                            <Input onChange = {
                                (e) => {
                                    const validatedPassword = e.target.value  //copy from e.target
                                    //then use below
                                    this.setState(prevState => ({
                                            user: {...prevState.user, validatedPassword: validatedPassword
                                            }
                                        }))
                                }}
                            value={this.state.user.verifyPassword}
                            placeholder="verify password"/>

                            <Button onClick={this.register}>Sign Up</Button>
                        {/*    onClick={this.signIn}*/}
                            </Form>
                            <Link to="/login">Already have an account?</Link>
                            </Card>
                            );
                            }
                            }

                            // import React from "react-dom";
                            //
                            // const Register = () => {
                            //
                            //
                            //     return (
                            //         <h1>Register</h1>
                            // <div className="form-group container-lg">
                            //     <h1>Register<i id="regIcon" className="fas fa-user-plus"></i></h1>
                            //     <h6>Please fill in the form below to register for an account.</h6>
                            //
                            //     <div className="form-group row">
                            //
                            //         <label htmlFor="username" className="col-sm-2 col-form-label">
                            //             <b>Username:</b>
                            //         </label>
                            //         <div className="col-sm-10">
                            //             <input id="username" placeholder="Wax Ladrian"
                            //                    className="wbdv-field wbdv-username form-control"/>
                            //         </div>
                            //     </div>
                            //
                            //     <div className="form-group row">
                            //         <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                            //             <b>Password: </b>
                            //         </label>
                            //         <div className="col-sm-10">
                            //             <input placeholder="lawman76#2!" id="passwordFld"
                            //                    className="wbdv-field wbdv-password form-control"/>
                            //         </div>
                            //     </div>
                            //
                            //     <div className="form-group row">
                            //         <label htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label ">
                            //             <b>Verify Password:</b>
                            //         </label>
                            //         <div className="col-sm-10">
                            //             <input placeholder="lawman76#2!" id="verifyPasswordFld"
                            //                    className="wbdv-field wbdv-password-verify form-control"/>
                            //         </div>
                            //     </div>
                            //
                            //     <div className="form-group row">
                            //
                            //         <label htmlFor="registerBtn" className="col-sm-2 col-form-label "> </label>
                            //         <div className="col-sm-10">
                            //             <button type="submit" id="registerBtn"
                            //                     className="btn btn-primary  btn-block wbdv-button wbdv-register">
                            //                 Register
                            //             </button>
                            //         </div>
                            //     </div>
                            //
                            //     <div>
                            //         <p>Already have an account?
                            //             <a href="../login/login.template.client.html">
                            //                 Sign in
                            //             </a>
                            //         </p>
                            //     </div>
                            //
                            // </div>
                            //     )
                            // }
                            //
                            // export default Register