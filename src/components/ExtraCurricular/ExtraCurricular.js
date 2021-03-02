import React from 'react';
import cvData from '../../cvData';

export default function Summary() {
    return (
        <div id="extra" className="Extra">
            <h2>{cvData.extraCurricular.title}:</h2>
            <ul>
                <li>{cvData.extraCurricular.line1}</li>
                <li>{cvData.extraCurricular.line2}</li>
                <li>{cvData.extraCurricular.line3}</li>
                <li>{cvData.extraCurricular.line4}</li>
                <li>{cvData.extraCurricular.line5}</li>
            </ul>
        </div>
    )
}