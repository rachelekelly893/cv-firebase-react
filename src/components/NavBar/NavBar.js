import React from 'react';

export default function NavBar() {
    return (
        <div>
           <nav className="navbar navbar-inverse  navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href=".CV-content">My CV</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><a className="nav-item" href="#details">Details</a></li>
                        <li><a className="nav-item" href="#summary">Summary</a></li>
                        <li><a className="nav-item" href="#education">Education</a></li>
                        <li><a className="nav-item" href="#experience">Experience</a></li>
                        <li><a className="nav-item" href="#extra">Extra-Curricular</a></li>
                        <li><a className="nav-item" href="#technical">Technical Skills</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}