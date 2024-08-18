import React from 'react';
import { SectionWrapper } from '../hoc';

function Resume() {
  return (
    <div style={styles.container}>
      <a href="/Puneet_Patil_Resume.pdf" download="Puneet_Patil_Resume.pdf" style={styles.button}>
        Download My Resume
      </a>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh', // full height of the viewport
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

export default SectionWrapper(Resume, "resume");
