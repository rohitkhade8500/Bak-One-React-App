import React from 'react';
import './HeroSection.css';
import HeroImage from'../assets/bg.jpg'

function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>
        <h1>We Built <span className="brand">Brand</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn">Learn More</button>
      </section>
  );
}

export default HeroSection;