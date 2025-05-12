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
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/mentions-legales" element={<PageWrapper><MentionsLegales /></PageWrapper>} />
      </Routes>

      <Footer />
    </>
  );
}

// Composant wrapper optionnel pour les autres pages
const PageWrapper = ({ children }) => (
  <main className="container-lg py-4">
    {children}
  </main>
);

export default App;
