import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >

        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img 
            src={icon} 
            alt={title} 
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Who am I...
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Having completed my Masters in Computer Science at San Diego State University, I am a dedicated software developer with a passion for innovation. Proficient in JavaScript, Java, and Python, I excel in crafting dynamic web experiences with HTML5, CSS3, and a spectrum of cutting-edge tools like TailwindCSS and Bootstrap. My expertise extends to a plethora of frameworks including React.js, Next.js, and Node.js, empowering me to develop scalable and responsive applications. Leveraging Docker, Kubernetes, and Git, I ensure seamless deployment and version control, while my familiarity with Firebase, Magic, and Postman enhances functionality and testing efficiency. With robust database management skills spanning MySQL, MongoDB, and PostgreSQL, alongside adeptness in diverse operating systems such as Windows, Mac, and Linux, I am equipped to deliver innovative solutions across the technological landscape.
        <br/><br />
        My constant pursuit of knowledge and the willingness to learn and unlearn has enabled me to become a quick learner, always eager to take on new challenges. I am seeking an opportunity to apply my skills and knowledge in a globally challenging environment, where I can push myself to be the best version of myself and make meaningful contributions to the field of Computer Science. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");