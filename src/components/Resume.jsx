import React from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

function Resume() {
  return (
    <div>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
            My Resume....
            </p>
            <h2 className={styles.sectionHeadText}>
            Resume.
            </h2>
        </motion.div>

            <div className='w-full flex'>
                <motion.p
                className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Click the button below to download my resume for your reference.
                </motion.p>
            </div>


            <div style={style.container}>
                <a href="/Puneet_Patil_Resume.pdf" download="Puneet_Patil_Resume.pdf" style={style.button}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#6a3dcd')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#804dee')}
                >
                    Download my Resume
                </a>
            </div>

        
    </div>
  );
}

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15vh', // full height of the viewport
  },
  button: {
    backgroundColor: '#804dee',
    color: 'white',
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
};

export default SectionWrapper(Resume, "resume")
