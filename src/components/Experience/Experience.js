import React from 'react';
import cvData from '../../cvData';

export default function Experience() {

    const ex1Text = cvData.experience.experience1.text.map(item => <li>{item}</li>)
    const ex2Text = cvData.experience.experience2.text.map(item => <li>{item}</li>)
    const ex3Text = cvData.experience.experience3.text.map(item => <li>{item}</li>)

    return (
        <div id="experience" className="Experience">
            <h2>{cvData.experience.title}:</h2>
            <ul>
                <li>{cvData.experience.experience1.title}</li>
                <p><i>{cvData.experience.experience1.date}</i></p>
                    <ul>
                        {ex1Text}
                    </ul>
                <br/>
                <li>{cvData.experience.experience2.title}</li>
                <p><i>{cvData.experience.experience2.date}</i></p>
                    <ul>
                        {ex2Text}
                    </ul>
                <br/>
                <li>{cvData.experience.experience3.title}</li>
                <p><i>{cvData.experience.experience3.date}</i></p>
                    <ul>
                        {ex3Text}
                    </ul>
            </ul>
        </div>
    )
}