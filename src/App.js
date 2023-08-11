// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Skills from './components/Skills';
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 



const projects = [
    {
        title: "Proje 1",
        description: "Bu proje hakkında açıklama 1",
        imageUrl: "proje1.jpg",
    },
    {
        title: "Proje 2",
        description: "Bu proje hakkında açıklama 2",
        imageUrl: "proje2.jpg",
    },
   
];

function App() {
    const text = "Ilknur Coskun";
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
  
    useEffect(() => {
      if (isTyping) {
        if (currentText.length < text.length) {
          setTimeout(() => {
            setCurrentText(text.slice(0, currentText.length + 1));
          }, 600); 
        } else {
          setIsTyping(false);
        }
      } else {
        if (currentText.length > 0) {
          setTimeout(() => {
            setCurrentText(currentText.slice(0, currentText.length - 1));
          }, 600); 
        } else {
          setIsTyping(true);
        }
      }
    }, [currentText, isTyping]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>..{currentText}..</h1>
            </header>
            <main>
              
<Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} /> 
                <Route path="/Project1" component={Project1} />
                <Route path="/Project2" component={Project2} />
                <Route path="/Project3" component={Project3} />
                <Route path="/Skills" component={Skills} />
                <Route path="/contact" component={Contact} /> 

            </Switch>
        </Router>
               
            </main>
            <Footer /> 
        </div>
    );
}

export default App;

