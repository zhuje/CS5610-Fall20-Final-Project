import React from "react";

//update as child of parent "Users" component

const Login = () => {
    return (
        <div>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                  rel="stylesheet"/>
            <h1>Login</h1>

            <div className="form-group row">
                <label htmlFor="logUsername"
                       className="col-sm-2 col-form-label">
                    Username </label>
                <div className="col-sm-10">
                    <input className="form-control" id="logUsername"
                           placeholder=" Wax"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="logPassword"
                       className="col-sm-2 col-form-label">
                    Password
                </label>
                <div className=" col-sm-10">
                    <input type="password" className="form-control"
                           id="logPassword" placeholder="123qwe#$%"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">

                    <a>
                        <button className="btn btn-primary btn-block">
                            Sign in
                        </button>
                    </a>

                    <a>
                        <button id="cancelBtn" className="btn btn-primary btn-block">
                            Cancel
                        </button>
                    </a>

                    <div className="row">
                        <div className="col-6">
                            <a href="#" className="wbdv-link">Forgot
                                Password?</a>
                        </div>
                        <div className="col-6">
                            {/*// clicking on login page should direct user to account options*/}
                            <a href="../register/register.template.client.html"
                               className="float-right">Sign up</a>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login

