import React from 'react';
import cvData from '../../cvData';

export default function TechnicalSkills() {
    return (
        <div id="technical" className="Component">
            <h2>{cvData.technicalSkills.title}</h2>
            <ul>
                <li>{cvData.technicalSkills.experienced.title}</li>
                    <p className="tab">{cvData.technicalSkills.experienced.info}</p>
                <li>{cvData.technicalSkills.familiar.title}</li>
                    <p className="tab">{cvData.technicalSkills.familiar.info}</p>
            </ul>
        </div>
    )
}