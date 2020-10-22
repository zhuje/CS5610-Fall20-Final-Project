import React from 'react';
import {connect} from "react-redux";

const SearchByIDComponent = ({ course={} }) =>

            <h1> Hello World!!! Pizza!  </h1>


const stateToPropertyMapper = (state) => ({
    course: state.searchReducer.course

})

export default connect
( stateToPropertyMapper)
(SearchByIDComponent)

