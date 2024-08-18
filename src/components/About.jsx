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
        With a Master’s in Computer Science from San Diego State University and a deep-rooted passion for innovation, I see myself as more than just a software developer—I’m a creator who thrives on building meaningful, impactful solutions. My journey through coding started with a curiosity that quickly turned into a relentless pursuit of excellence, particularly in languages like JavaScript, Java, and Python. Whether I’m crafting dynamic web experiences with React.js and Next.js or diving into data with SQL, my goal is always the same: to create software that not only works but resonates with users. 
        <br/><br />
        My database management skills are robust, with hands-on experience in MySQL, MongoDB, and PostgreSQL, allowing me to optimize data-driven applications across multiple platforms. Furthermore, I am well-versed in operating systems including Windows, Mac, and Linux, providing me with a versatile toolkit to navigate and troubleshoot diverse computing environments. I have a strong foundation in version control with Git and am adept at utilizing tools like Salesforce and Postman to streamline development workflows and enhance testing efficiency.
        <br/><br />
        With a relentless drive for continuous learning and improvement, I am eager to contribute to cutting-edge projects that challenge my abilities and enable me to make significant contributions to the field of software development. I thrive in dynamic environments and am passionate about leveraging my technical skills to create innovative, high-impact solutions.
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