import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JavaScript', value: 80 },
  { name: 'Dynamics CRM Development', value: 70 },
  { name: 'C#', value: 50 },
  { name: 'Python', value: 60 },
  { name: 'React', value: 70 },
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 85 },
  { name: 'MySQL', value: 70 },
];

function Skills() {
  return (
    <div className="skills-container">
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Skills</h1>
      <div className="skills-description" style={{ textAlign: 'center', margin: '2rem auto', maxWidth: '800px' }}>
        <p>
          I am a junior developer with a strong passion for learning and improving my skills. I have experience in JavaScript, Dynamics CRM Development, C#, Python, React, HTML, CSS, and MySQL. I am eager to take on new challenges and expand my knowledge in the world of web development.
        </p>
      </div>
      <div className="chart-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <ResponsiveContainer width="70%" height={300}>
          <BarChart data={data} layout="vertical">
            <CartesianGrid />
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" width={120} />
            <Bar dataKey="value" fill="#8884d8" />
            <Legend verticalAlign="top" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Skills;

