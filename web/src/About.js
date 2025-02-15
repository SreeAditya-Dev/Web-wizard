import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1 className="about-title">About the Avengers Universe</h1>

      <section className="about-section">
        <h2>🌟 The Marvel Avengers Legacy</h2>
        <p>
          The Avengers, Earth’s Mightiest Heroes, are a team of superheroes assembled to protect humanity from cosmic and terrestrial threats. The journey began with Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye, leading to an epic battle against Thanos. From the Chitauri invasion in New York to the Infinity War, the Avengers have stood as the ultimate symbol of heroism.
        </p>
      </section>

      <section className="timeline-section">
        <h2>📅 Key Events in the Avengers Timeline</h2>
        <ul className="timeline">
          <li><strong>1943:</strong> Steve Rogers becomes Captain America</li>
          <li><strong>2012:</strong> The Battle of New York – Avengers Assemble!</li>
          <li><strong>2015:</strong> Ultron is created and defeated by the Avengers</li>
          <li><strong>2018:</strong> Thanos wipes out half of all life in the universe</li>
          <li><strong>2023:</strong> The Avengers bring everyone back and defeat Thanos</li>
        </ul>
      </section>

      <section className="map-section">
        <h2>🗺️ Interactive Avengers Map</h2>
        <p>Explore iconic locations like Stark Tower, Wakanda, Asgard, and the Sanctum Sanctorum. (Coming soon!)</p>
        <div className="map-placeholder">🌍 Map of the Marvel Universe</div>
      </section>

      <button className="back-home-button" onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default About;
