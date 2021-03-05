import React from 'react';
import cvData from '../../cvData';

export default function Summary() {

    const sumText = cvData.summary.data.map(item => <li key={item.id}>{item.text}</li>)

    return (
        <div id="summary" className="Component">
            <h2>{cvData.summary.title}</h2>
            <ul>
                {sumText}
            </ul>
        </div>
    )
}