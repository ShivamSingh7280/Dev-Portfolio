import HTML_LOGO from '../assets/logos/html.svg';
import CSS_LOGO from '../assets/logos/css.svg';
import JAVASCRIPT_LOGO from '../assets/logos/javascript.svg';
import REACT_LOGO from '../assets/logos/react.svg';
import NODE_LOGO from '../assets/logos/node.svg';
import EXPRESS_LOGO from '../assets/logos/express.svg';
import MYSQL_LOGO from '../assets/logos/mysql.svg';
import DSA_LOGO from '../assets/logos/dsa.png';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

import Master_O from '../assets/company-logo/master-o.jpg';
import Crio_Do from '../assets/company-logo/crio-do.jfif';

export const NAVIGATION_DATA = [
  { id: 1, label: 'Home', link: '#home' },
  { id: 2, label: 'About', link: '#about' },
  { id: 3, label: 'Work Experience', link: '#experience' },
  {id: 4, label: 'Certifications', link: '#certifications' },
  { id: 5, label: 'Projects', link: '#projects' },
  { id: 6, label: 'Skills', link: '#skills' },
  { id: 7, label: 'Contact', link: '#contact' },
];

export const SKILLS_LOGOS = [
  HTML_LOGO,
  CSS_LOGO,
  JAVASCRIPT_LOGO,
  REACT_LOGO,
  NODE_LOGO,
  EXPRESS_LOGO,
  MYSQL_LOGO,
  DSA_LOGO,
];

export const HERO_TEXTS = [
  { id: 1, label: 'Building modern web experiences with clean, scalable code.' },
  { id: 2, label: 'Always learning, always building, always improving.' },
  { id: 3, label: 'Turning ideas into fast, reliable applications.' },
  { id: 4, label: 'Focused on solving problems with simple, clean solutions.' },
  { id: 5, label: 'Comfortable with modern tech, curious about what’s next.' },
];

export const SOCIAL_MEDIA_LOGOS = [
  { id: 1, name: 'Github', type: 'icon', label: GitHubIcon, link:'https://github.com/ShivamSingh7280' },
  { id: 2, name: 'LinkedIn', type: 'icon', label: LinkedInIcon, link: 'https://www.linkedin.com/in/shivamsingh2808/' },
  { id: 3, name: 'Instagram', type: 'icon', label: InstagramIcon, link: 'https://www.instagram.com/thakurshivam7280?igsh=bHZiaXNoM2c5d2p4&utm_source=qr'},
  { id: 4, name: 'Facebook', type: 'icon', label: FacebookIcon, link:'' },
  { id: 5, name: 'X', type: 'icon', label: XIcon, link: '' },
  { id: 6, name: 'Leetcode', type: 'component', label: 'LeetCode', link: 'https://leetcode.com/u/thakurshivam7280/' },
];

export const ABOUT_ME_INTRODUCTION_TEXT = "I’m Shivam Singh, a full-stack developer focused on building reliable, scalable web systems. I work primarily with React and Node.js, enjoy designing clean APIs, and care deeply about code quality, performance, and maintainability. I like solving real problems and shipping software that holds up in production."

export const RESUME_LINK = 'https://drive.google.com/file/d/1m5lufF4-thGbau-8U2QlPAPCAr-YCulr/view?usp=sharing';

export const EXPERIENCES = [
  {
    id: 1,
    companyName: 'Crio.do (Fellowship In Software Development)',
    designation: 'Product Developer',
    logo: Crio_Do,
    timePeriod: 'Dec 2022 - Dec 2023'
  },
  {
    id: 2,
    companyName: 'Master-O(Inspireone Technologies)',
    designation: 'Software Development Engineer - 1',
    logo: Master_O,
    timePeriod: 'Jan 2024 - Dec 2025'
  },
];


export const certifications = [
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "Free Code Camp",
    date: "September 2023",
    url: "https://www.freecodecamp.org/certification/ShivamSingh28/javascript-algorithms-and-data-structures",
    badge: "🌐",
  },
  {
    title: "Crio.do Certified Product Developer",
    issuer: "Crio.do",
    date: "January 2024",
    url: "https://www.crio.do/learn/certificate/shivamsingh7280/TRACK_FELLOWSHIP_FULL_STACK_V3/",
    badge: "⚛️",
  },
];

export const TECHNICAL_SKILLS = [
  { name: "React", proficiency: 85 },
  { name: "Node.js", proficiency: 70 },
  { name: "Express", proficiency: 70 },
  { name: "MySql", proficiency: 65 },
  { name: "JavaScript", proficiency: 90 },
  { name: "HTML", proficiency: 90 },
  { name: "CSS", proficiency: 75 },
  { name: "Material-UI", proficiency: 85 },
  { name: "Git", proficiency: 75 },
];

export const SOFT_SKILLS = [
  { name: "Problem Solving", proficiency: 95 },
  { name: "Collaboration", proficiency: 90 },
  { name: "Adaptability", proficiency: 90 },
  { name: "Creativity", proficiency: 88 },
  { name: "Organization", proficiency: 80 },
  { name: "Empathy", proficiency: 85 },
];

export const LOCATIONS = [
  "Delhi, India",
  "Gurgaon, India",
  "Noida India",
  "Chandigarh, India",
  "Jaipur, India",
  "Pune, India",
  "Bangalore, India",
  "Remote",
];

export const PROJECTS = [
  {
    title: "QKart – Full Stack E-Commerce Platform",
    description:
      "Built a complete full-stack e-commerce platform with a React-based frontend and a scalable Node.js backend. Implemented RESTful APIs for user authentication, shopping cart, and checkout workflows using JWT and Passport. Designed backend following controller–service–model architecture with MongoDB and Mongoose. Integrated frontend with backend APIs, ensured responsive UI using Material UI, and added robust unit and integration testing. Deployed frontend on Netlify and backend services on Render with MongoDB Atlas.",
    tags: [
      "React",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Passport",
      "REST APIs",
      "Jest",
      "Netlify",
      "Render",
    ],
    github: "https://github.com/ShivamSingh7280/shivamsingh7280-ME_QKART_FRONTEND_V2",
    live: "https://qkartfrontend2023.netlify.app/",
    featured: true,
  },

  {
    title: "QEstate Frontend",
    description:
      "Developed a client-side real estate platform enabling users to browse property listings with sorting, filtering, pagination, and in-memory editing. Delivered a smooth UX with all data operations handled on the frontend and deployed on Netlify.",
    tags: [
      "React",
      "CSS3",
      "REST APIs",
      "Netlify",
      "Frontend Development",
    ],
    github: "https://github.com/ShivamSingh7280/QEstate",
    live: "https://qestate.netlify.app/",
    featured: true,
  },

  {
    title: "Qtify Frontend",
    description:
      "Implemented a fully responsive music streaming UI from Figma designs. Built search with autocomplete, carousels using Swiper.js, filter-based navigation, FAQs accordion, and album detail pages using React Router.",
    tags: [
      "React",
      "React Router",
      "Swiper.js",
      "CSS3",
      "Responsive Design",
    ],
    github: "https://github.com/ShivamSingh7280/L-square-QTify",
    live: "https://qtify12.netlify.app/",
    featured: true,
  },

  {
    title: "Admin UI Dashboard",
    description:
      "Created a responsive admin dashboard to manage users with edit, update, delete, pagination, and checkbox-based selection. Completed as a Geektrust frontend challenge, earning 10 out of 11 badges.",
    tags: [
      "React",
      "Reactstrap",
      "Netlify",
      "Frontend Development",
    ],
    github: "https://github.com/ShivamSingh7280/adimin-ui",
    live: "https://admin-ui-1234.netlify.app/#",
    featured: false,
  },

  {
    title: "XBoard",
    description:
      "Built a news aggregation platform from scratch using HTML, CSS, Bootstrap, and JavaScript. Integrated Flipboard RSS feeds via REST APIs and enhanced UI using accordions and image carousels.",
    tags: [
      "HTML",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "REST APIs",
    ],
    github: "",
    live: "https://xboard2023.netlify.app/",
    featured: false,
  },

  {
    title: "QTrip Dynamic",
    description:
      "Developed a dynamic travel website with multi-select filters, image carousels, and persistent client-side state using localStorage. Enhanced UX with interactive JavaScript-driven components.",
    tags: [
      "HTML",
      "CSS3",
      "JavaScript",
      "REST APIs",
      "LocalStorage",
    ],
    github: "https://github.com/ShivamSingh7280/QtripDynamic2023gh",
    live: "https://qtripdynamicgh2023.netlify.app/",
    featured: false,
  },

  {
    title: "QTrip Static",
    description:
      "Created a responsive travel website from wireframes using HTML, CSS, and Bootstrap. Designed multiple pages and deployed the application to Netlify.",
    tags: [
      "HTML",
      "CSS3",
      "Bootstrap",
      "Responsive Design",
    ],
    github: "https://github.com/ShivamSingh7280/shivamsingh7280-ME_QTRIPSTATIC",
    live: "https://shivamsingh-qtrip.netlify.app/",
    featured: false,
  },
];


