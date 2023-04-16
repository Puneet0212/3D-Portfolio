import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { institutes } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ institute }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color:'#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={institute.date}
    iconStyle={{ background: institute.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={institute.icon}
          alt={institute.institute_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    
    <div>
      <h3 className="text-white text-[24px] font-bold">{institute.institute_name}</h3>
      
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0}}>
        {institute.degree}
      </p>

      <h4 className="text-white-100 text-[14px] pl-1 tracking-wider">
        CGPA - {institute.cgpa}
      </h4>

    </div>


  </VerticalTimelineElement>
)


const Education = () => {
  return (
   <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Educational Qualifications...
        </p>
        <h2 className={styles.sectionHeadText}>
          Academics.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          
          {institutes.map((institute, index) => (
            <EducationCard key={index} institute={institute}/>
          ))}

        </VerticalTimeline>
      </div>
   </>
  )
}

export default SectionWrapper(Education, "education");