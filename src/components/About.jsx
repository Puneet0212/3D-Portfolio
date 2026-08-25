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
        I'm Puneet, a backend-leaning Full-Stack Engineer who somehow ended up being the person who gets paged when things break. <br/>
        That wasn't always the plan though. I just wanted to build things, real systems, APIs that held up, backends that made sense under load. 
        Honestly, that part hasn't changed. But somewhere between a Master's at San Diego State and the production floor of a financial 
        platform running across 56+ countries, I picked up the other half of the job too: figuring out why something broke and fixing it 
        before it becomes anyone else's problem. <br></br>


        That's the part of engineering nobody puts in a tutorial. There's no clean documentation for a critical service going down during peak 
        hours with the clock already running. You just get good at staying calm, reading logs like a second language, and shipping a fix that 
        actually holds.<br></br>
        The build side never left, though. I still get an unreasonable amount of satisfaction from a well-designed API and a database schema that 
        doesn't fight you six months later, and I've got a habit of designing systems so one bad day in one service doesn't become everyone's bad 
        day, a lesson I learned the fun way early in my career. <br></br>
        These days I'm teaching myself proper system design on the side, mostly because fixing other people's architecture decisions made me 
        want to make better ones myself. I'm also getting into the AI side of things, LLM APIs, retrieval-based architectures. Early days, but 
        it's the direction I'm chasing next.

      </motion.p>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        With a Master’s in Computer Science from San Diego State University and a deep-rooted passion for innovation, I see myself as more than just a software developer—I’m a creator who thrives on building meaningful, impactful solutions. My journey through coding started with a curiosity that quickly turned into a relentless pursuit of excellence, particularly in languages like JavaScript, Java, and Python. Whether I’m crafting dynamic web experiences with React.js and Next.js or diving into data with SQL, my goal is always the same: to create software that not only works but resonates with users. 
        <br/><br />
        My database management skills are robust, with hands-on experience in MySQL, MongoDB, and PostgreSQL, allowing me to optimize data-driven applications across multiple platforms. Furthermore, I am well-versed in operating systems including Windows, Mac, and Linux, providing me with a versatile toolkit to navigate and troubleshoot diverse computing environments. I have a strong foundation in version control with Git and am adept at utilizing tools like Salesforce and Postman to streamline development workflows and enhance testing efficiency.
        <br/><br />
        With a relentless drive for continuous learning and improvement, I am eager to contribute to cutting-edge projects that challenge my abilities and enable me to make significant contributions to the field of software development. I thrive in dynamic environments and am passionate about leveraging my technical skills to create innovative, high-impact solutions.
      </motion.p> */}

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");