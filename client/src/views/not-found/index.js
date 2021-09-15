import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.scss'

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div className="page-not-found">
                <h1>404</h1>
                <div class="cloak__wrapper">
                    <div class="cloak__container">
                        <div class="cloak"></div>
                    </div>
                </div>
                <div class="info">
                    <h2>Sorry, we can't find that page</h2>
                    <p>
                        May be the page used to be here, but seems
                        to have been removed. Check your URL again and try again.
                    </p>
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}

export default NotFound;
