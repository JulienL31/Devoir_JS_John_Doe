import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';

function App() {
  return (
    <>
      <Header /> {/* Pas dans un container */}
      
      <div className="d-flex flex-column min-vh-100 bg-dark text-white">
        <main className="container-lg flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
      </div>
      
      <Footer /> {/* Pas dans un container */}
    </>
  );
}

export default App;