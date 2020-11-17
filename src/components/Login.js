import React from "react";
import {Link} from "react-router-dom";

import movieFriends from "../img/movieFriends.jpg";
import {Card, Logo, Form, Input, Button, Error} from "./AuthForms";
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
            .then(user => this.props.history.push('./profile'))
    //if user and password match to one already stored, will create Current User

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
                    <Button onClick={this.login}>Sign In</Button>
                </Form>
                <Link to="/signup">Don't have an account?</Link>
                {/*can use Error auth when user credentials do not exist/match*/}
                {/*{isError && <Error>The username or password provided were incorrect!</Error>}*/}
            </Card>
        );
    }
}




