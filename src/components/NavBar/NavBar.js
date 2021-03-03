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
                    <ul class="nav navbar-nav navbar-right">
                        <div class="theme-switch-wrapper">
                            <label class="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div class="slider round"></div>
                            </label>
                            <em>Dark Mode</em>
                        </div>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

window.onload=function(){

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
}