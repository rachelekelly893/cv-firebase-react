import React from 'react';

export default function NavBar() {
    return (
         <div id="nav-container">
            <nav className="nav">
                    <a className="nav-item" href="#details">Details</a>
                    <a className="nav-item" href="#summary">Summary</a>
                    <a className="nav-item" href="#education">Education</a>
                    <a className="nav-item" href="#experience">Experience</a>
                    <a className="nav-item" href="#extra">Extra-Curricular</a>
                    <a className="nav-item" href="#technical">Technical Skills</a>
            </nav>
        </div>

    )
}
