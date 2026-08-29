export const projects = [
  {
    id: 'ai-trip-planner',
    name: 'Waypoint — AI Trip Planner',
    tagline: 'AI-powered travel planning platform using Generative AI',
    description:
      'A full-stack AI travel planning application that generates personalized day-wise itineraries based on destination, budget, and trip duration. I built the frontend in React.js, consuming REST APIs to fetch and render Google Gemini-powered itinerary data, while a teammate built the Java/Spring Boot backend and MongoDB data layer.',
    tech: ['React.js', 'JavaScript (ES6+)', 'REST APIs', 'JSON', 'Google Gemini API'],
    features: [
      '15+ reusable React components covering itinerary generation and trip management',
      'Consumed REST APIs to render Google Gemini-powered, day-wise travel plans',
      '100% mobile-friendly, fully responsive UI across screen sizes and browsers',
      'Handled dynamic form inputs, loading states, and API response parsing on the client',
      'Full itinerary rendered in 3–5 seconds from user input to result',
    ],
    github: 'https://github.com/prashantmane1207/AI-Based-Trip-Planner',
    demo: '',
    tags: ['React', 'AI', 'Frontend'],
    featured: true,
    detailPath: '/projects/ai-trip-planner',
  },
  {
    id: 'ride-booking-application',
    name: 'Ride Booking Application',
    tagline: 'Console-based Java + Hibernate/JPA + PostgreSQL ride booking system',
    description:
      'A console-driven ride booking system built independently with Java and Hibernate/JPA, backed by PostgreSQL. Structured around a layered DAO-Service-Entity architecture modelling relationships between Users, Drivers, Vehicles, and Rides, with the database managed directly through pgAdmin.',
    tech: ['Java', 'Hibernate', 'PostgreSQL', 'pgAdmin', 'OOP'],
    features: [
      'User and driver registration and login',
      'Vehicle management for registered drivers',
      'Ride booking with driver assignment',
      'Real-time ride status tracking and ride history retrieval',
      'Hibernate/JPA entity mappings (one-to-many, many-to-one) across Users, Drivers, Vehicles, and Rides',
    ],
    github: 'https://github.com/prashantmane1207',
    demo: '',
    tags: ['Java', 'Hibernate', 'Backend'],
    featured: true,
    detailPath: '/projects/ride-booking-application',
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
