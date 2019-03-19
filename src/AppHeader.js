import React, { Component } from 'react';
import logo from './images/loading_circle.png';
import './_css/AppHeader.css';

class AppHeader extends Component {
render() {
        return (

            <header className="Appheader">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p>
                    WELCOME TO MY FIRST APPLICATION IN REACT
                </p>
            </header>
        );
    }
}

export default AppHeader;
