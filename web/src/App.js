import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Quiz from "./Quiz"; // Import Quiz component
// import TiltedCard from './component/TiltedCard';

const characters = [
  { id: 1, name: "Iron Man", image: "https://iili.io/2pcPXjI.jpg", description: "Genius, billionaire, playboy, philanthropist." },
  { id: 2, name: "Captain America", image: "https://iili.io/2pcPhQt.jpg", description: "Super-soldier and the first Avenger." },
  { id: 3, name: "Thor", image: "https://iili.io/2pcPWTN.jpg", description: "God of Thunder from Asgard." },
  { id: 4, name: "Black Widow", image: "https://iili.io/2pcPO4s.jpg", description: "Master spy and assassin." },
  { id: 5, name: "Hulk", image: "https://iili.io/2pcPk3G.jpg", description: "Strongest Avenger with unlimited strength." },
  { id: 6, name: "Spider-Man", image: "https://iili.io/2pcPwCX.jpg", description: "Friendly neighborhood superhero." },
];

const events = [
  { id: 1, title: "Avengers: Age of Ultron", date: "2015", description: "The Avengers face off against Ultron, an AI bent on human extinction." },
  { id: 2, title: "Captain America: Civil War", date: "2016", description: "The Avengers are divided over the Sokovia Accords, leading to a rift between Iron Man and Captain America." },
  { id: 3, title: "Infinity Gauntlet", date: "2018", description: "Thanos collects all six Infinity Stones and wipes out half of all life in the universe." },
  { id: 4, title: "Avengers: Infinity War", date: "2018", description: "The Avengers and their allies fight to stop Thanos from collecting all the Infinity Stones." },
  { id: 5, title: "Avengers: Endgame", date: "2019", description: "The Avengers assemble one last time to reverse the Snap and defeat Thanos." },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHover = (eventId) => {
    setActiveEvent(eventId);
  };

  const handleLeave = () => {
    setActiveEvent(null);
  };

  return (
    <>
      {/* Routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              {/* Navbar */}
              <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
                <div className="navbar-logo">Marvel Fan Base</div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
                <ul className="navbar-links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#characters">Characters</a></li>
                  <li><a href="#timeline">Timeline</a></li>
                  <li><a href="/about">About</a></li>
                  <li><Link to="/quiz">Quiz</Link></li>  {/* Use React Router Link */}
                </ul>
              </nav>

              {/* Home Section */}
              <section id="home" className="home-section">
                <div className="home-content">
                  <h1>Welcome to the Marvel Fan Base</h1>
                  <p>Explore your favorite Marvel characters and their stories!</p>
                </div>
              </section>
              
              {/* Characters Section */}
              <section id="characters" className="characters-section">
                <h2>Meet the Heroes</h2>
                <div className="character-cards">
                  {characters.map((character) => (
                    <div key={character.id} className="character-card">
                      <img src={character.image} alt={character.name} />
                      <h3>{character.name}</h3>
                      <p>{character.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Timeline Section */}
              <section id="timeline" className="timeline-section">
                <h2>Marvel Cinematic Universe Timeline</h2>
                <div className="timeline">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className={`timeline-event ${activeEvent === event.id ? "active" : ""}`}
                      onMouseEnter={() => handleHover(event.id)}
                      onMouseLeave={handleLeave}
                    >
                      <div className="timeline-event-content">
                        <h3>{event.title}</h3>
                        <p>{event.date}</p>
                        {activeEvent === event.id && (
                          <div className="event-details">
                            <p>{event.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          }
        />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
