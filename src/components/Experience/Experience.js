import React from 'react';
import cvData from '../../cvData';

export default function Experience() {
    return (
        <div id="experience" className="Experience">
            <h2>{cvData.experience.title}:</h2>
            <ul>
                <li>{cvData.experience.experience1.title}</li>
                <p><i>{cvData.experience.experience1.date}</i></p>
                    <ul>
                        <li>{cvData.experience.experience1.line1}</li>
                        <li>{cvData.experience.experience1.line2}</li>
                        <li>{cvData.experience.experience1.line3}</li>
                    </ul>
                <br/>
                <li>{cvData.experience.experience2.title}</li>
                <p><i>{cvData.experience.experience2.date}</i></p>
                    <ul>
                        <li>{cvData.experience.experience2.line1}</li>
                        <li>{cvData.experience.experience2.line2}</li>
                    </ul>
                <br/>
                <li>{cvData.experience.experience3.title}</li>
                <p><i>{cvData.experience.experience3.date}</i></p>
                    <ul>
                        <li>{cvData.experience.experience3.line1}</li>
                    </ul>
            </ul>
        </div>
    )
}