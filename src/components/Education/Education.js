import React from 'react';
import cvData from '../../cvData';

export default function Education() {

    const eduText = cvData.education.text.map(item => <p>{item}</p>)
    
    return (
        <div id="education" className="Component">
            <h2>{cvData.education.title}</h2>
            {eduText}
        </div>
    )
}