import React from 'react';
import cvData from '../../cvData';

export default function Education() {

    const eduText = cvData.education.data.map(item => <p key={item.id}>{item.text}</p>)
    
    return (
        <div id="education" className="Component">
            <h2>{cvData.education.title}</h2>
            {eduText}
        </div>
    )
}