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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  daiict,
  du,
  mern,
  react,
  oibsip,
  gayatri,
  disease_detection,
  gossip_grid,
  om,
  navyug,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
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
    title: "AI/ML Enthusiast",
    icon: mobile,
  },
  {
    title: "Musician",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Teaching Assistant",
    company_name: "Darshan University",
    icon: du,
    iconBg: "#E6DEDD",
    date: "Jan 2024 – Dec 2024",
    points: [
      "Leveraged my expertise in JavaScript frameworks to support student learning and enhance technical communication.",
      "Provided hands-on guidance in JavaScript frameworks and front-end development for over 30 students, clarifying complex topics and fostering practical understanding.",
      "Designed interactive sessions that simplified advanced concepts, increasing student engagement and performance.",
      "Strengthened skills in React, Angular, and problem-solving by addressing diverse technical questions and challenges.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "OASIS INFOBYTE",
    icon: oibsip,
    iconBg: "#E6DEDD",
    date: "Dec 2023 – Jan 2024",
    points: [
      "Developed and optimized responsive web applications using React and Firebase, enhancing user experience and code efficiency.",
      "Collaborated with cross-functional teams to implement secure and scalable features, ensuring data integrity and application security.",
      "Focused on user interface design and code modularity, contributing to faster load times and seamless user interactions.",
      "Contributed to high-impact projects focusing on responsive, user-centric web applications.",
    ],
  },
  {
    title: "Hackathons",
    company_name: "DAIICT",
    icon: daiict,
    iconBg: "#383E56",
    date: "Aug 2024",
    points: [
      "Hackout'24 at DA-IICT – Collaborated with a team to develop an AI-driven agricultural solution, leveraging machine learning to address real-world challenges in the agriculture sector.",
      "Darshan University Hackathon – Placed in the top 11 teams in a fast-paced web development challenge, demonstrating adaptability and proficiency in rapid prototyping and creative problem-solving.",
      "Techfest 2024 at DU – Developed a dynamic web application using React and Firebase, enhancing user engagement and streamlining administrative processes.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "MERN Stack",
    icon: mern,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
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
    project_name: "Gayatri",
    project_genre: "Jewelry E-Commerce Platform",
    description:
      "Developed a sophisticated e-commerce site using MERN stack and Razorpay API for secure payments. Includes a dynamic cart, admin management, and CI/CD integration, demonstrating e-commerce development expertise.",
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
    ],
    image: gayatri,
    source_code_link: "https://github.com/KD3805/MERN-ECOMMERCE",
    live_link: "https://gayatri-tan.vercel.app",
  },
  {
    project_name: "Gossip Grid",
    project_genre: "Chat Application",
    description:
      "Built a secure, interactive chat app with MERN stack, Socket.io, and JWT for authentication. Features real-time messaging, user status, and notifications, highlighting skills in real-time communication and full stack development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: gossip_grid,
    source_code_link: "https://github.com/KD3805/CHAT-APP",
    live_link: "https://gossipgrid.onrender.com",
  },
  {
    project_name: "Agro Diagnose",
    project_genre: "Plant Disease Detection",
    description:
      "Created a CNN model to accurately predict plant diseases from uploaded images. Deployed the model using FastAPI, ensuring seamless integration with a user-friendly GUI. Demonstrated skills in model deployment, API development, and machine learning.",
    tags: [
      {
        name: "cnn",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "gui",
        color: "pink-text-gradient",
      },
    ],
    image: disease_detection,
    source_code_link: "https://github.com/KD3805/Plant-Disease-Detection",
    live_link: "#",
  },
];

const education = [
  {
    title: "Bachelor of Technology in Computer Engineering",
    organization: "Darshan University",
    city: "Rajkot",
    icon: du,
    iconBg: "#383E56",
    year: "2022 – 2026",
    cpi: "9.09",
    courses: "Data Structures and Algorithms, Database Management Systems, Object-Oriented Programming, Machine Learning",
  },
  {
    title: "Higher Secondary Education",
    std: "Class XII",
    organization: "Navyug Vidhyalaya",
    city: "Morbi",
    icon: navyug,
    iconBg: "#383E56",
    year: "2022",
    pr: "91.15%",
    courses: "Mathematics, Physics, Chemistry, Computer Science",
  },
  {
    title: "Secondary Education",
    std: "Class X",
    organization: "Om Shanti Vidhyalaya",
    city: "Morbi",
    icon: om,
    iconBg: "#383E56",
    year: "2020",
    pr: "99.23%",
    courses: "Mathematics, Communication Skills, Science, Social Science",
  }
]

let tempAcc = {
  email: "mebiy68444@cironex.com",
  password: "68444@mebiy@cironex",
  url: "https://chatgpt.com/share/67362ca4-51a0-800b-bda3-3e955558ada5"
}

const tempEmailJs = {
  template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  public_key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
}

// Create a sleek, minimalist logo blending music and modern web technologies into a seamless, unified brand identity with hidden "KD" initials. Use abstract sound waves or musical notes integrated with digital circuitry or geometric patterns. The initials "KD" should be subtly embedded in the design, not easily visible but part of the artwork. Use a color palette of blue, black, gray/silver, with accents of neon green or electric purple. The design should feel modern, tech-savvy, and creative, with a futuristic, dynamic vibe. Maintain a clean, professional look that's scalable and legible at any size.


export { services, technologies, experiences, testimonials, projects, education, tempAcc, tempEmailJs };