import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Trust from './components/Trust';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-text-main antialiased bg-bg-light">
      <Header />
      <main>
        <Hero />
        <Services />
        <Workflow />
        <Solutions />
        <Portfolio />
        <FAQ />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}

export default App;
