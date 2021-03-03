import React from 'react';
import cvData from '../../cvData';

export default function Summary() {

    const extraText = cvData.extraCurricular.text.map(item => <li>{item}</li>)

    return (
        <div id="extra" className="Extra">
            <h2>{cvData.extraCurricular.title}:</h2>
            <ul>
                {extraText}
            </ul>
        </div>
    )
}