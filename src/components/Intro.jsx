import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Intro() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className='intro'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{  duration: 1 }}
    >
      <h1>2004</h1>
      <br />
      <p>
        Significativo en la historia de los videojuegos. <br />
        Eventos clave que dejaron una marca duradera en la industria.
      </p>
    </motion.div>
  );
}

export default Intro;
