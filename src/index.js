import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {ManagerComponent} from "./components/ManagerComponent";
import searchReducer from "./reducer/searchReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducers = combineReducers({ searchReducer })
const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <ManagerComponent />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
