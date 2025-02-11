import {
  mobile,
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
  java,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  DevFinder,
  StreamGPT,
  Foodylicious,
  threejs,
  wipro,
  tcs,
  NTT,
  Finastra,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Springboot Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Microservices Developer",
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
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
   {
     name: "HTML 5",
     icon: html,
   },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Senior Associate IT dev. Services I",
    company_name: "NTT DATA",
    icon: NTT,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Oct 2021",
    points: [
      "Developing Java/J2EE web applications with expertise in MySQL Database, API integration, and functionality enhancement using MVC architecture.",
      "Using Java, MySql workbench and Postman as a regular part of work for dev and support of modules",
      "Internal ITIL v4 certified with experience in handling global stakeholders in rotational shifts",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Finastra",
    icon: Finastra,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Jan 2023",
    points: [
      "Experienced in designing & developing Java LoanIQ application, integrating API, enhancing existing functionality of loan syndication & servicing modules.",
      "Contributed to payments R&D, reducing issue reopen rates to under 5%.",
      "Functional knowledge of loan management and loan syndication ",
      "Troubleshooting and resolving issues, ensuring robust and reliable software.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Enhanced code performance in distributed system by 35%, SQL query efficiency by 20% & batch processing performance increased 3x via multithreading.",
      "Been to onsite for multiple client bank go-Live & successfully completed the project.",
      "Integration using Java, Springboot, Microservices to handle multiple domestic and international payment service types.",
      "Proficient in functional knowledge of payments domain, notable ones are IMPS/CTS/NEFT/RTGS/BULK payments.",
      "Good at Linux-based troubleshooting, Cron jobs, scheduler automation & Jenkins deployment.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DevFinder",
    description:
      "Web-based platform that allows users to send/recieve/accept/ignore friend requests from other users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
    ],
    image: DevFinder,
    source_code_link: "https://github.com/Manish270698/DevFinder-FE",
  },
  {
    name: "StreamGPT",
    description:
      "Web application that shows the latest trending movies also allowing the user to search for movies based on their prompt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: StreamGPT,
    source_code_link: "https://github.com/Manish270698/gpt-flix",
  },
  {
    name: "Foodylicious",
    description:
      "A comprehensive food ordering platform that allows users to order foods from hotels in their area.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Foodylicious,
    source_code_link: "https://github.com/Manish270698/foodylicious",
  },
];

export { services, technologies, experiences, testimonials, projects };
