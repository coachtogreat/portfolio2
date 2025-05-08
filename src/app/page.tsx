'use client';

import React from 'react';

import About from './home/partials/about';
import Careers from './home/partials/careers';
import Comparison from './home/partials/comparison';
import ContactForm from './home/partials/contact-form';
import FAQ from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import Projects from './home/partials/projects';
import Skills from './home/partials/skills';
import Teksaja from './home/partials/teksaja';
import Testimonials from './home/partials/testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Careers />
      <Skills />
      <FAQ />
      <Comparison />
      <Teksaja />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
