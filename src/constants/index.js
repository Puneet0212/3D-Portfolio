import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    threejs,
    eduvance,
    lavin,
    sdsu,
    atharva,
    netflix,
    amazon,
    coffee,
    netflixclone,
    amazonscreen,
    coffeescreen,
    bootstrap,
    nextjs,
    mysql,
    hasura,
    firebase,
    postman,
    filesyncerscreen,
    facedetectionscreen,
    takenmind,
    bmsscreen,
    bankscreen,
    tgscreen,
    cicdscreen,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Academics",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Full-stack Software Developer",
      icon: web,
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    {
      title: "Oracle Certified Java Developer",
      icon: backend,
    },
    {
      title: "Passionate DSA Problem-solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },

    // {
    //   name: "Bootstrap",
    //   icon: bootstrap,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Next JS",
      icon: nextjs,
    },


    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    // {
    //   name: "Hasura Graph QL",
    //   icon: hasura,
    // },
    // {
    //   name: "Airtable",
    //   icon: reactjs,
    // },
    // {
    //   name: "Firebase",
    //   icon: firebase,
    // },
    {
      name: "Postman",
      icon: postman,
    },
    // {
    //   name: "Magic",
    //   icon: reactjs,
    // },
    
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  


  const institutes = [
    {
      institute_name: "San Diego State University, CA",
      degree: "Master's in Computer Science",
      icon: sdsu,
      iconBg: "#383E56",
      date: "August 2022 - May 2024",
      cgpa: "3.81 / 4.0",
    },
    {
      institute_name: "Atharva College of Engineering, Mumbai University",
      degree: "B.E. in Computer Engineering",
      icon: atharva,
      iconBg: "#383E56",
      date: "August 2017 - July 2021",
      cgpa: "9.09 / 10.0",
    },

    
  ]
  const experiences = [
    {
      title: "Full-stack Software Developer",
      company_name: "Citi Bank - Iris Software",
      icon: web,
      iconBg: "#383E56",
      date: "April 2025 - June 2025",
      points: [
        "Developed backend support for dynamic column selector in Java, enabling analysts to customize dashboards on demand & reducing manual report setup by 40% for 500+ users.",
        "Implemented advanced filtering & toggle features for financial metrics, improving dashboard flexibility & driving 30% faster analysis in enterprise reporting workflows."
      ]
      
    },
    {
      title: "Full-stack Software Developer",
      company_name: "San Diego State University",
      icon: sdsu,
      iconBg: "#383E56",
      date: "August 2024 - April 2025",
      points: [
        "Built a high-performance research platform with React, Spring Boot, & MySQL, increasing user retention by 30%.",
        "Enhanced application security with Spring Security (OAuth2, JWT, RBAC), reducing security breaches by 85%.",
      ]
      
    },
    {
      title: "Software Developer",
      company_name: "Lavin Entrepreneurship Center - SDSU Research Foundation",
      icon: lavin,
      iconBg: "#383E56",
      date: "May 2023 - May 2024",
      points: [
        "Built a high-performance web application using React, Redux, MongoDB & Node.js, boosting user engagement by 40%.",
        "Spearheaded the development of responsive and scalable UI components, optimizing for performance and cross-browser compatibility, handling 10K+ daily users.",
        "Developed scalable RESTful APIs with Node.js and Express, improving response times by 30% for 10K+ daily requests.",
        "Integrated Web-to-Leads web form, facilitating the generation of 1000+ leads and seamlessly transferring lead data to Salesforce leveraging Apex Data Loader, ensuring data accuracy and streamlined workflow.",
        "Formulated 450+ Visualforce email templates, increasing email response rates by 35%."
        // "Built a high-performance web application using React, Redux, MongoDB & Node.js, boosting user engagement by 40%",
        // "Spearheaded the development of responsive and scalable UI components, optimizing for performance and cross-browser compatibility, handling 10K+ daily users",
        // "Developed scalable RESTful APIs with Node.js and Express, improving response times by 30% for 10K+ daily requests",
        // "Mentored and led a team of 5 developers, implementing robust end to end testing using Jest, achieving 90% code coverage and reducing bug reports by 35%, while utilizing Git for version control and collaboration",
        // "Strategically integrated Web-to-Leads web form, facilitating the generation of over 1000 leads and seamlessly transferred lead data to Salesforce utilizing Apex Data Loader, ensuring data accuracy and streamlined workflow.",
        // "Formulated over 250 Visualforce email templates, significantly increasing email response rates by 35%."
      ]
      
    },
    // {
    //   title: "Sales Associate",
    //   company_name: "Aztecs Shop - SDSU Bookstore",
    //   icon: sdsu,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Feb 2023",
    //   points: [
    //     "Greeted customers and provided exceptional customer service",   
    //     "Answered customer questions and offered recommendations based on customer preferences",
    //     "Maintained knowledge of current and upcoming releases, bestsellers, and popular genres",
    //     "Provided feedback to management on customer preferences and buying trends",
    //   ],
    // },

    {
      title: "Full-stack Software Engineer",
      company_name: "GreetGood Retail (E-commerce Startup)",
      icon: threejs,
      iconBg: "#383E56",
      date: "June 2021 - July 2022",
      points: [
        "Spearheaded the development of a full-stack e-commerce platform using React, TypeScript, PostgreSQL, and Spring Boot, serving 50K+ users with a 35% increase in user engagement.",
        "Engineered scalable microservices with Spring Boot & Docker, improving system fault tolerance by 70%.",
        "Boosted database performance using Hibernate ORM & Kafka, improving throughput by 45% & reducing database load by 50%.",
        "Implemented comprehensive unit and integration testing strategies using JUnit and Mockito in agile environments, following TDD principles and SDLC methodologies, reducing production issues by 40%.",
      ]
    },

    {
      title: "Software Engineer (Machine Learning) Intern",
      company_name: "Eduvance",
      icon: eduvance,
      iconBg: "#383E56",
      date: "June 2020 - July 2020",
      points: [
        "Analyzed and visualized data to classify Titanic passengers, achieving 82% accuracy, demonstrating expertise in data analysis, statistical modeling, and algorithm optimization",
        "Deployed machine learning models on IBM Cloud utilizing IBM Watson, streamlining the deployment process, showcasing expertise in cloud-based machine learning solutions and Linux environments",
      ]
    },

    {
      title: "Data Analyst Intern",
      company_name: "TakenMind Technologies",
      icon: takenmind,
      iconBg: "#383E56",
      date: "September 2019 - November 2019",
      points: [
       "Collected and cleaned over 10,000 data points using Microsoft Excel, and leveraged Python libraries (NumPy, Pandas) to reduce data processing time by 30%",
       "Created 5 insightful dashboards using Seaborn and Matplotlib, increasing stakeholder understanding of key metrics by 40%",
       "Collaborated with a 6-member team on data presentation and reporting, supporting data-driven decisions that led to a 20% reduction in process bottlenecks",
      ]
    },

    
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    // {
    //   name: "Covid19 Vaccine Slots Tracker",
    //   description: "Architected a streaming-based notification system that integrates Kafka Streams, AWS Lambda, Maria DB, and Spring Boot with the CoWIN API to provide real-time vaccine availability alerts to 10,000+ users on Telegram.",
    //   tags: [
    //     {
    //       name: "java",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "spring boot",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "kafka streams",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "aws lambda",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "maria db",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   icon: null, // Add the icon for this project if available
    //   image: tgscreen, // Add the image for this project if available
    //   source_code_link: "https://github.com/Puneet0212/Covid19-Vaccine-Slots-Tracker.git", 
    //   deployed_link: null, // Add the deployed link if available
    // },
    {
      name: "Secured Online Banking Application",
      description: "Engineered a secure online banking application with a React + Redux frontend and a backend using Spring Boot, Spring Security Crypto, JWT authentication, and Interceptors, ensuring a 40% drop in security vulnerabilities.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "spring security",
          color: "blue-text-gradient",
        },
      ],
      icon: null, // Add the icon for this project if available
      image: bankscreen, // Add the image for this project if available
      source_code_link: "https://github.com/Puneet0212/spring-boot-secure-banking-app.git", 
      deployed_link: null, // Add the deployed link if available
    },

    {
      name: "Netflix clone",
      description: "I built a front-end clone of Netflix using NextJS, Magic, and Hasura Graph QL. The Home page is built using SSR, the Modal page using ISR, and the application features YouTube API integration to add favorite videos to the 'My List' section.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "hasuraGraphQL",
          color: "green-text-gradient",
        },
        {
          name: "magic",
          color: "pink-text-gradient",
        },
      ],
      icon: netflix,
      image: netflixclone,
      source_code_link: "https://github.com/Puneet0212/netflix-clone.git",
      deployed_link: "https://cinemagic.puneetpatil.com/login"
    },
    
    // {
    //   name: "K8s CI/CD Pipeline",
    //   description: "Automated Docker image creation and Kubernetes deployment on a multi-node AWS EC2 cluster using Jenkins, DockerHub, and Ansible for CI/CD.",
    //   tags: [
    //     {
    //       name: "kubernetes",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "jenkins",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "docker",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "aws",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "ansible",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   icon: null, // Add the icon for this project if available
    //   image: cicdscreen, // Add the image for this project if available
    //   source_code_link: null, 
    //   deployed_link: null, 
    // },
    
    // {
    //   name: "Real-Time Video Face Detection & Verification",
    //   description: "Engineered a high-performance Node.js API for a video-based KYC solution, achieving 95% verification accuracy through advanced TensorFlow algorithms for real-time face detection and robust QR code scanning capabilities using JSQR.",
    //   tags: [
    //     {
    //       name: "nodejs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "tensorFlow",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "jsqr",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   icon: netflix,
    //   image: facedetectionscreen,
    //   source_code_link: "https://github.com/Puneet0212/Face-Detection.git",
    //   deployed_link: "https://cinemagic.puneetpatil.com/login"
    // },
    // {
    //   name: "File Syncer",
    //   description: "Developed a Python-based distributed file sharing system utilizing RPC for real-time synchronization between machines, achieving 99% replication accuracy and ensuring robust performance through unit testing.",
    //   tags: [
    //     {
    //       name: "python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "rpc",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "unit testing",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   icon: netflix,
    //   image: filesyncerscreen,
    //   source_code_link: "https://github.com/Puneet0212/File-Syncer.git",
    //   deployed_link: "https://cinemagic.puneetpatil.com/login"
    // },
    {
      name: "Amazon clone",
      description: "I built a dynamic website using ReactJS, NodeJS, Firebase, and Stripe. The NodeJS server was deployed on Azure app service as a serverless function. Users can order multiple products and use Stripe for payment processing.",     
        tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "stripe",
          color: "blue-text-gradient",
        }
      ],
      icon: amazon,
      image: amazonscreen,
      source_code_link: "https://github.com/Puneet0212/Amazon-Clone-master-2.git",
      deployed_link: "https://shoppy.puneetpatil.com"
    },

    {
      name: "Brand Monitoring System",
      description: "Architected an advanced tool with 87% accuracy using Tweepy  for tweet collection and NLTK for data preprocessing and classification.",     
        tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "nltk",
          color: "green-text-gradient",
        },
        {
          name: "tweepy",
          color: "pink-text-gradient",
        },
        {
          name: "excel",
          color: "blue-text-gradient",
        }
      ],
      icon: amazon,
      image: bmsscreen,
      source_code_link: "https://www.irjet.net/archives/V8/i4/IRJET-V8I4971.pdf",
      deployed_link: "https://shoppy.puneetpatil.com"
    },

    {
      name: "Coffee Connoissuer",
      description: "I built an interactive website using SSR, ISR, and CSR features of NextJS. The website uses the Foursquare Places API to fetch nearby cafes and generates dynamic pages for each cafe. Airtable was used to store the cafe data systematically.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "airtable",
          color: "pink-text-gradient",
        },
      ],
      icon: coffee,
      image: coffeescreen,
      source_code_link: "https://github.com/Puneet0212/coffee-connoisseur.git",
      deployed_link: "https://coffeeconnoisseur.puneetpatil.com",
    },
  ];
  
  export { services, technologies, experiences, institutes, projects };