import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div className="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="app__title">Hello, React!</h1>
    </motion.div>
  );
};

export default App;
