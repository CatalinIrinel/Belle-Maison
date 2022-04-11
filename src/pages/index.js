import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
// import Packs from '../components/Packs/Packs';
// import Colabs from '../components/Colabs/Colabs';
import Contact from '../components/Contact/Contact';
import './Home.css';
import { aboutObject } from '../components/Data';

function Home() {
  return (
    <div className="home">
      <Hero />
      <About {...aboutObject} />
      <Portfolio />
      {/* <Packs /> */}
      {/* <Colabs /> */}
      <Contact />
    </div>
  );
}

export default Home;
