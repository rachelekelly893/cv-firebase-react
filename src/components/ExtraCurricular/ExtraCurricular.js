import React from 'react';
import cvData from '../../cvData';

export default function Summary() {

    const extraText = cvData.extraCurricular.data.map(item => <li key={item.id}>{item.text}</li>)

    return (
        <div id="extra" className="Component">
            <h2>{cvData.extraCurricular.title}:</h2>
            <ul>
                {extraText}
            </ul>
        </div>
    )
}