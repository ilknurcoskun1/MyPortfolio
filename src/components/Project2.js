import React from 'react';
import './Project2.css'; // Dosya adını düzenlemeyi unutmayın

function Project2() {
    return (
        <div className="Project2-container">
            <h1>Python</h1>
            <p>This project is about a movie management system created with Python. It allows users to add, remove, and search for movies in a database.</p>
            <a href='http://ilknurcoskun.com/project2/index.html' target='_blank' rel='noopener noreferrer'>Project Link</a>
            
            <div className="image-container">
                <img className="project-image" src="/images/Film.JPG" alt="Film" />
            </div>
        </div>
    );
}

export default Project2;
