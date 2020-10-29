import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
// import Login from "./Login";
// import Register from "./Register";
// import Profile from "./Profile";
// import CourseListComponent from "./CourseListComponent";
// import CourseEditorComponent from "./CourseEditorComponent";
// import CourseGrid from "./CourseGrid";

import SearchComponent from "./SearchComponent";
import SearchByIDComponent from "./SearchByIDComponent"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import HomeComponent from "./HomeComponent";

export class ManagerComponent extends React.Component {
    state = {
        courses: []
    }
    render() {
        return (

            <div>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home"> Movie Match </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home"> Home </Nav.Link>
                    <Nav.Link href="/login"> Login </Nav.Link>
                    <Nav.Link href="/register"> Register </Nav.Link>
                    <Nav.Link href="/profile"> Profile </Nav.Link>
                    <Nav.Link href="/search"> Search </Nav.Link>

                </Nav>

            </Navbar>
            <br />

            <BrowserRouter>
                <div className="container">

                    {/*<Link to="/login"> Login </Link> |*/}
                    {/*<Link to="/register"> Register </Link> |*/}
                    {/*<Link to="/profile"> Profile </Link> |*/}
                    {/*<Link to="/table"> Courses </Link> |*/}
                    {/*<Link to="/grid"> Grid </Link> |*/}
                    {/*<Link to="/edit"> Editor </Link> |*/}
                    {/*<Link to={"/search"}> Search </Link>*/}

                    {/*<Route path="/login" exact component={Login}/>*/}
                    {/*<Route path="/register" exact component={Register}/>*/}
                    {/*<Route path="/profile" exact component={Profile}/>*/}

                    <Route path={"/home"} exact component={HomeComponent}/>

                    <Route path={"/search"} exact component={SearchComponent}/>
                    <Route path={"/searchByID/:movieID"}
                           exact component={SearchByIDComponent} />


                    {/*<Route path="/table" exact>*/}
                    {/*    <CourseListComponent courses={this.state.courses} instructor="Jose"/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/grid" component={CourseGrid}/>*/}
                    {/*<Route*/}
                    {/*    path={[*/}
                    {/*        "/edit/:courseId",*/}
                    {/*        "/edit/:courseId/modules/:moduleId",*/}
                    {/*        "/edit/:courseId/modules/:moduleId/lessons/:lessonId"*/}
                    {/*    ]}*/}
                    {/*    exact*/}
                    {/*    component={CourseEditorComponent}/>*/}
                </div>
            </BrowserRouter>



            </div>
        );
    }
}
