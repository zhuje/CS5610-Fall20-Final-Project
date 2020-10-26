import React, {useState} from "react";
import {Link, Redirect} from 'react-router-dom';
import logoImg from "./img/logo.jpg";
import {Card, Logo, Form, Input, Button, Error} from './components/AuthForms';
import {useAuth} from "./auth";
import {AxiosInstance as axios} from "axios";


//update as child of parent "Users" component
//double check bootstrap installed

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    // let  referer = props.location.state.referer || '/';

    function postLogin() {
        axios.post("https://www.somePlace.com/auth/login", {
            userName,
            password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isLoggedIn) {
        return <Redirect to={"/"}/>;

        // return <Redirect to={referer}/>;
    }

    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input
                    type="username"
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="email"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password"
                />
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <Link to="/signup">Don't have an account?</Link>
            { isError &&<Error>The username or password provided were incorrect!</Error> }
        </Card>
    );
}
export default Login

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



