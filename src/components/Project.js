// components/Project.js
import React from 'react';

function Project({ title, description, imageUrl }) {
    return (
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageUrl} alt={title} />
        </div>
    );
}

export default Project;

