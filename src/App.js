import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Blog from './components/Blog';
import { Analytics } from "@vercel/analytics/react";
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled(motion.div)`
  flex: 1;
`;

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function App() {
  return (
    <AppContainer>
      <Navbar />
      <ContentWrapper
        initial="initial"
        animate="in"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Analytics />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
}

export default App;