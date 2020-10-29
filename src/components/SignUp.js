// Screen for a new user to register for account for our app
//should prompt with User account options
//Guest/Anonymous, Regular, Admin
//list of access for each (table)

import React from "react";
import { Link } from 'react-router-dom';
import logoImg from "../img/logo.jpg";
import popcornUnsplash from "../img/popcornUnsplash.jpg"
import { Card, Logo, Form, Input, Button } from './AuthForms';

function Signup() {

    // constructor(props) {
    //     super(props);
    //     this.signUp = this.signUp.bind(this);
    //     this.handleNameChange = this.handleNameChange.bind(this);
    //     this.handleEmailChange = this.handleEmailChange.bind(this);
    //     this.handlePasswordChange = this.handlePasswordChange.bind(this);
    //     this.state = {
    //         name:'',
    //         email:'',
    //         password:''
    //     };
    // }
    //
    // handleEmailChange(e){
    //     this.setState({email:e.target.value})
    // }
    // handlePasswordChange(e){
    //     this.setState({password:e.target.value})
    // }

    return (
        // <h1>Sign Up </h1>
        <Card>
            <Logo src={popcornUnsplash} />
            <Form >
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="password" />
                <Input type="password" placeholder="password again" />
                <Button  >Sign Up</Button>
            {/*    onClick={this.signIn}*/}
            </Form>
            <Link to="/login">Already have an account?</Link>
        </Card>
    );
}

export default Signup;








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