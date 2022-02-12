import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import interceptors from "./services/http.interceptor.js";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter history={createBrowserHistory}>
            <Route render={props => (
              <App {...props}/> 
            )}
            />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

interceptors();
reportWebVitals();
