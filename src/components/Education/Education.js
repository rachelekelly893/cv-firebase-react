import React from 'react';
import cvData from '../../cvData';

export default function Education() {
    return (
        <div id="education" className="Education">
            <h2>{cvData.education.title}</h2>
            <p>{cvData.education.line1}</p>
            <p>{cvData.education.line2}</p>
        </div>
    )
}