import React from 'react';
import cvData from '../../cvData';

export default function Summary() {
    return (
        <div id="summary" className="Summary">
            <h2>{cvData.summary.title}</h2>
            <ul>
                <li>{cvData.summary.line1}</li>
                <li>{cvData.summary.line2}</li>
                <li>{cvData.summary.line3}</li>
            </ul>
        </div>
    )
}