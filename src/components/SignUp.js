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

//this function is called when button is clicked. Saves User info etc (done in Server)
    register = () => {
        //grab info and send to server
        fetch(`http://localhost:8080/register`, {
            method: 'POST',
            //embed in the body w/ the user that is trying to register
            body: JSON.stringify(this.state.user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(response => response.json())
            .then(user => this.props.history.push('./profile'))
        //allows to programmatically navigate to specified location, allows for validation
        //https://reactrouter.com/web/api/history
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
                                //copy text from input, then use to assign to user property
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

                    <Input onChange={
                        (e) => {
                            const validatedPassword = e.target.value
                            this.setState(prevState => ({
                                user: {
                                    ...prevState.user, validatedPassword: validatedPassword
                                }
                            }))
                        }}
                           value={this.state.user.verifyPassword}
                           placeholder="verify password"/>

                    <Button onClick={this.register}>Sign Up</Button>
                </Form>
                <Link to="/login">Already have an account?</Link>
            </Card>
        );
    }
}