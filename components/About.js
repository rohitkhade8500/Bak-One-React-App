import React from 'react';
import './About.css';
import profile1 from '../assets/female.svg';
import profile2 from '../assets/male.svg';
import profile3 from '../assets/male.svg';


function About() {
    return (
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="about-cards">
          <div className="about-card">
            <img src={profile1} alt="Melanie Doe" />
            <h3>Melanie Doe</h3>
            <p>Project Manager</p>
            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="about-card">
            <img src={profile2} alt="Jhonnie Doe" />
            <h3>Jhonnie Doe</h3>
            <p>Graphic Designer</p>
            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="about-card">
            <img src={profile3} alt="Daniel Doe" />
            <h3>Daniel Doe</h3>
            <p>Web Designer</p>
            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
    );
  }

export default About;
