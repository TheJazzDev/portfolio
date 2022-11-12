import React from 'react';
import ThemeProvider from './store/ThemeProvider';
import {motion, useScroll, useSpring} from 'framer-motion';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ThemeProvider>
      <motion.div className="progress-bar" style={{scaleX}} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
