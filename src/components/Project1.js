import React from 'react';
import './Project1.css';

function Project1() {
    return (
        <div className="Project1-container">
            <h1>Cake World</h1>
            <p>
                In this project, I used JavaScript, CSS, and HTML to create a web application.
                I also utilized JavaScript Local Storage to store data persistently.
            </p>
            
            {/* Project Link */}
            <a href="http://ilknurcoskun.com/project1/project.html" target="_blank" rel="noopener noreferrer">Project Link</a>
            
            {/* Images */}
            <div className="image-container">
                <div className="image">
                    <img src="/images/cakeworld.JPG" alt="CakeWorld" />
                </div>
                <div className="image">
                    <img src="/images/order.JPG" alt="Order" />
                </div>
            </div>
        </div>
    );
}

export default Project1;


