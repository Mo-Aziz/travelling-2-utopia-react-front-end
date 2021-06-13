import React from 'react';
import Cards from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

import HeroSection from "../components/Section-A/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards/>
      <Footer/>
    </>
  );
};

export default Home;
