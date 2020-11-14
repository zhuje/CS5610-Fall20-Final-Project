//User Profile page once they have logged in

//sub component of larger "User View" component?

import React from "react";

const Profile = () => {
    return(

    <div class="form-group container-lg">
        <h1>Profile</h1>
        <p id="profileAlert"></p>
        {/*form-group row will allow to adapt to screen sizes (ie. mobile) */}
        {/*label will take up 2, input field 10 (bootstrap divides pg in 12 equal parts)*/}
        <div class="form-group row">
            {/*sm refers to screen size, for sm and above 2 and 10 applies*/}
            <label for="usernameField" class="col-sm-2 col-form-label">
                Username:</label>
            <div class="col-sm-10">
                <input title="test" id="usernameField" class="form-control"
                       value="Profile successfully saved"/>
            </div>
        </div>


        <div class="form-group row">
            <label for="passwordField" class="col-sm-2 col-form-label">
                Password: </label>
            <div class="col-sm-10">
                <input id="passwordField" placeholder="coinshot11897&"
                       class="form-control"
                       title="Enter phone number with area code"/>
            </div>
        </div>

        <div class="form-group row">
            <label for="phoneField" class="col-sm-2 col-form-label">
                Phone: </label>
            <div class="col-sm-10">
                <input id="phoneField" placeholder="(###)###-####"
                       class="form-control"
                       title="Enter phone number with area code"/>
            </div>
        </div>

        <div class="form-group row">
            <label for="emailField" class="col-sm-2 col-form-label">
                Email: </label>
            <div class="col-sm-10">
                <input id="emailField" type="email" class="form-control"
                       placeholder="lawman@scradel.com"/>
            </div>
        </div>

        <div class="form-group row">
            <label for="dobField" class="col-sm-2 col-form-label">
                Date of Birth: </label>
            <div class="col-sm-10">
                <input value="1989-05-19" id="dobField" type="date"
                       class="form-control"/>
            </div>
        </div>


        <div class=" form-group row">
            <label for=" roleField" class=" col-sm-2 col-form-label">
                Role: </label>
            <div class=" col-sm-10">
                <select class=" form-control" id=" roleField">
                    <option value=" Faculty">Faculty</option>
                    <option value=" Student">Student</option>
                    <option value=" Admin">Admin</option>
                </select>
            </div>
        </div>


        <div class=" form-group row">
            <label for=" updateBtn" class=" col-sm-2 col-form-label"></label>
            <div class=" col-sm-10">
                <button id=" updateBtn" onclick=" myFunction()"
                        class="btn btn-warning btn-block">
                    Update
                </button>
            </div>
        </div>

        <div class="form-group row">
            <label for="logoutBtn" class="col-sm-2 col-form-label"></label>
            <div class="col-sm-10">
                {/*make whole button a link to home page for now */}
                <a>
                    <button id="logoutBtn" class="btn btn-primary btn-block">
                        Logout
                    </button>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Profile
