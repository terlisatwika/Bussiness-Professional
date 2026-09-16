import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TheNeed from '../components/TheNeed';
import Services from '../components/Services';
import Workflow from '../components/Workflow';
import Solutions from '../components/Solutions';
import FAQ from '../components/FAQ';
import Trust from '../components/Trust';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Use a small timeout to ensure DOM is painted
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return (
    <main>
      <Hero />
      <Services />
      <Workflow />
      <Solutions />
      <TheNeed />
      <FAQ />
      <Trust />
      <FinalCTA />
    </main>
  );
};

export default Home;
