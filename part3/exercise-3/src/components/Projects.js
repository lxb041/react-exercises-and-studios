import data from './../data.json';
import { useState } from 'react';


export default function MyProjects() {
    const [index, setIndex] = useState(0);
    const projects = data.sports;
    const currentProject = projects[index];
    
    function handleClick() {
        if (index < data.sports.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <div>
                <h2>{currentProject.title}</h2>
                <p>{currentProject.description}</p>
                <img src={currentProject.photoUrl} alt={currentProject.alt} />
            </div>
        </div>
    );
}