import logo from '../../logo.svg';
import React from 'react';

export default function ReactLogo() {
    return (
        <div className="React-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Made using React</p>
        </div>
    )
}