import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import PersonalProjects from '../components/PersonalProjects';
import Contact from '../components/Contact';
import { useEffect } from 'react';

const Home = ({ onOpenVideo }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Portfolio onOpenVideo={onOpenVideo} />
      <PersonalProjects onOpenVideo={onOpenVideo} />
      <Contact />
    </>
  );
};

export default Home;
