import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <Portfolio></Portfolio>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
