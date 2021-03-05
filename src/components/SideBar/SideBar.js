import React from 'react';
import cvData from '../../cvData'

export default function SideBar() {

    // var emailurl = cvData.details.email; 
    // document.write('<a href="' + emailurl + '">{cvData.details.email}</a>');

    return (
        <div id="sidebar" className="sidenav">
            <img className="avatar"src="https://scontent.fman2-2.fna.fbcdn.net/v/t1.0-9/121070766_10221667926302263_5234394796371714165_o.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=q6L2OSUPG18AX8OtaRk&_nc_ht=scontent.fman2-2.fna&oh=02886f8aa0ac8b211ca9401cdd3d9634&oe=605EBAFC" alt="Me"/>
            <div className="text">
                <h1>&emsp;{cvData.details.name}</h1>
                <br/>
                <p><b>{cvData.details.role}</b></p>
                <br/>
                <p><a href={"mailto:" + cvData.details.email} target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i>&emsp;E-Mail</a></p>
                <br/>
                <p><a href={"tel:"+cvData.details.phone}><i className="fas fa-mobile-alt"></i>&emsp;{cvData.details.phone}</a></p>
                <br/>
                <p><a href={cvData.details.linkedIn} target="_blank" rel="noopener noreferrer"><i className="fas fa-address-book"></i>&emsp;Linked In</a></p>
            </div>
        </div>
    )

}