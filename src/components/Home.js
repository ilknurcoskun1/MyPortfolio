import React from 'react';
import './Home.css'; // Stil dosyasını import etmeyi unutmayın

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! I'm Ilknur Coskun, a passionate junior web developer. I specialize in creating
          modern and responsive web applications using the latest web technologies.
          Explore my portfolio to see some of my projects and skills.
        </p>
      </div>
      <div className="image">
      
  <img src="./images/AdobeStock_322580172.jpeg" alt="home" />


      </div>
      <div className="about-me">
        Since 2016, I have been deeply involved with Microsoft Dynamics CRM 365, progressing from training to hands-on experience and development. My expertise encompasses a wide spectrum, from Dynamics CRM 365 plugins and custom workflow development to proficient validation scripting with JavaScript on CRM forms.

Currently, I am enrolled in the HND Business Level 4 program at Nelson College and pursuing training in web development and programming. 

Additionally, I am employed as a Microsoft Dynamics CRM Consultant at Ruzico Limited. With a strong background in business and expertise in CRM consulting, I excel at understanding customer needs and optimizing CRM solutions.

I have strong C#, Python and React programming knowledge. I also have MySQL database development skills. My knowledge of Jscript and CSS scripting is good.

      </div>
      <div className="sidebar">
       
      </div>
      <div className="empty-space-before-footer"></div>
      <footer className="footer">
      
      </footer>
    </div>
  );
}

export default Home;
