export const projects = [
  {
    id: 'ai-trip-planner',
    name: 'AI-Based Trip Planner',
    tagline: 'AI-powered travel planning platform using Generative AI',
    description:
      'A full-stack AI travel planning application that generates personalized day-wise itineraries based on destination, budget, and trip duration. Integrated Google Gemini API for AI-generated recommendations with Spring Boot REST APIs and MongoDB for data management.',
    tech: ['React.js','Java','Spring Boot','MongoDB', 'REST APIs', 'Google Gemini API','JWT Authentication'],
    features: [
      '15+ reusable React components covering itinerary generation and trip management',
      'Google Gemini API integration for personalized, day-wise travel plans',
      '100% mobile-friendly, fully responsive UI',
      'CRUD trip management backed by MongoDB',
      'Full itinerary generated in 3–5 seconds from user input',
    ],
    github: 'https://github.com/prashantmane1207/AI-Based-Trip-Planner',
    demo: '',
    tags: ['React', 'AI', 'Full Stack'],
    featured: true,
    detailPath: '/projects/ai-trip-planner',
  },
  {
    id: 'employee-management-system',
    name: 'Employee Management System',
    tagline: 'Menu-driven Java + JDBC + PostgreSQL CRUD system',
    description:
      'A console-based employee management system built using Core Java and JDBC. Implements CRUD operations, database connectivity, DAO pattern, exception handling, and object-oriented programming principles with PostgreSQL database integration.',
    tech: ['Java', 'JDBC', 'PostgreSQL', 'OOP'],
    features: [
      'Full CRUD — Create, Read, Update, Delete and Search employee records',
      'PostgreSQL integration via JDBC for persistent storage',
      'OOP design applying encapsulation, inheritance and polymorphism',
      'Structured exception handling for reliable data operations',
    ],
    github: 'https://github.com/prashantmane1207/Employee-Management-System-JDBC',
    demo: '',
    tags: ['Java', 'JDBC'],
    featured: true,
    detailPath: '/projects/employee-management-system',
  },
  {
    id: 'vehicle-rental-system',
    name: 'Vehicle Rental System',
    tagline: 'Java-based rental management console app',
    description:
      'A Java project modelling vehicle rental operations with clean object-oriented design, built to practice CRUD workflows, collections, and real-world business logic implementation.',
    tech: ['Java', 'OOP'],
    features: [
      'Object-oriented modelling of vehicles, customers and rentals',
      'Core Java console-based workflow',
    ],
    github: 'https://github.com/prashantmane1207/Vehicle-Rental-System',
    demo: '',
    tags: ['Java'],
    featured: false,
  },
  {
    id: 'portfolio-v1',
    name: 'Personal Portfolio',
    tagline: 'Personal Portfolio Website',
    description:
      'An initial portfolio website built using HTML, CSS and JavaScript, showcasing early frontend development skills before transitioning to React and Tailwind CSS.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Static multi-section personal site', 'Hand-written responsive CSS layout'],
    github: 'https://github.com/prashantmane1207/Prashantportfolio-',
    demo: '',
    tags: ['Frontend'],
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
