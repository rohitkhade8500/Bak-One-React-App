
import React from 'react';
import './Portfolio.css';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';
import icon6 from '../assets/icon6.svg';
import icon7 from '../assets/icon7.svg';
import icon8 from '../assets/icon8.svg';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="portfolio-filters">
        <button className='btn'>All</button>
        <button className='btn'>Web Design</button>
        <button className='btn'>Graphic Design</button>
        <button className='btn'>Flat Design</button>
      </div>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src={icon1} alt="Web Design" />
          <h3>Example Title 1</h3>
          <p>Web Design</p>
        </div>
        <div className="portfolio-item">
          <img src={icon2} alt="Web Design" />
          <h3>Example Title 2</h3>
          <p>Web Design</p>
        </div>
        <div className="portfolio-item">
          <img src={icon3} alt="Graphic Design" />
          <h3>Example Title 3</h3>
          <p>Graphic Design</p>
        </div>
        <div className="portfolio-item">
          <img src={icon4} alt="Flat Design" />
          <h3>Example Title 4</h3>
          <p>Flat Design</p>
        </div>
        <div className="portfolio-item">
          <img src={icon5} alt="Web Design" />
          <h3>Example Title 5</h3>
          <p>Web Design</p>
        </div>
        <div className="portfolio-item">
          <img src={icon6} alt="Graphic Design" />
          <h3>Example Title 6</h3>
          <p>Graphic Design</p>
        </div>
        <div className="portfolio-item">
          <img src={icon7} alt="Flat Design" />
          <h3>Example Title 7</h3>
          <p>Flat Design</p>
        </div>
        <div className="portfolio-item">
          <img src={icon8} alt="Web Design" />
          <h3>Example Title 8</h3>
          <p>Web Design</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;


