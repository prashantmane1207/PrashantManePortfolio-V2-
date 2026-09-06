export const projects = [
  {
    id: 'ai-trip-planner',
    name: 'Waypoint — AI Trip Planner',
    tagline: 'AI-powered travel planning platform using Generative AI',
    description:
      'A full-stack AI-powered trip planning application that generates personalized day-wise itineraries based on destination, budget, trip duration, and travel preferences. Worked on the Java/Spring Boot backend, REST APIs, OpenRouter AI integration, MongoDB data operations, and React.js frontend integration.',
    tech: [
      'Java',
      'Spring Boot',
      'React.js',
      'REST APIs',
      'MongoDB',
      'OpenRouter AI'
    ],
    features: [
      'Developed REST APIs for user authentication, trip generation, trip saving, and trip retrieval',
      'Integrated OpenRouter AI with Llama 3.3 to generate personalized day-wise itineraries',
      'Used Spring Data MongoDB for user and trip data storage and retrieval',
      'Connected React.js frontend with Spring Boot backend using JSON-based REST APIs',
      'Tested REST APIs and backend functionality using Postman'
    ],
    github:
      'https://github.com/prashantmane1207/AI-Based-Trip-Planner',
    demo: '',
    tags: ['Java', 'Spring Boot', 'AI', 'Full Stack'],
    featured: true,
    detailPath: '/projects/ai-trip-planner',
  },

  {
    id: 'ride-booking-application',
    name: 'Ride Booking Application',
    tagline: 'Java + Hibernate/JPA + PostgreSQL ride booking system',
    description:
      'A ride booking application independently developed using Java, Hibernate/JPA, and PostgreSQL. The application follows a layered DAO-Service-Entity architecture and models relationships between Users, Drivers, Vehicles, and Rides.',
    tech: [
      'Java',
      'Hibernate',
      'JPA',
      'PostgreSQL',
      'JDBC',
      'OOP'
    ],
    features: [
      'Implemented user and driver registration and authentication',
      'Implemented vehicle registration and vehicle management for drivers',
      'Implemented ride booking, driver assignment, and ride status updates',
      'Implemented ride history retrieval using Hibernate and PostgreSQL',
      'Used one-to-many and many-to-one Hibernate/JPA entity relationships'
    ],
    github:
      'https://github.com/prashantmane1207',
    demo: '',
    tags: ['Java', 'Hibernate', 'Backend'],
    featured: true,
    detailPath: '/projects/ride-booking-application',
  },

  {
    id: 'vehicle-rental-system',
    name: 'Vehicle Rental System',
    tagline: 'Java-based vehicle rental management system',
    description:
      'A Java console-based vehicle rental management application developed to practice object-oriented programming, collections, CRUD operations, and business logic implementation.',
    tech: ['Java', 'OOP', 'Collections Framework'],
    features: [
      'Implemented object-oriented modelling of vehicles, customers, and rentals',
      'Implemented vehicle rental and return workflows',
      'Used Java Collections for managing application data',
      'Applied OOP principles and basic CRUD operations'
    ],
    github:
      'https://github.com/prashantmane1207/Vehicle-Rental-System',
    demo: '',
    tags: ['Java', 'OOP'],
    featured: false,
    detailPath: '/projects/vehicle-rental-system',
  },

  {
    id: 'portfolio-v1',
    name: 'Personal Portfolio',
    tagline: 'Responsive personal portfolio website',
    description:
      'An initial personal portfolio website developed using HTML, CSS, and JavaScript to showcase frontend development skills and projects.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Developed a multi-section personal portfolio website',
      'Created responsive layouts using HTML and CSS',
      'Implemented interactive elements using JavaScript'
    ],
    github:
      'https://github.com/prashantmane1207/Prashantportfolio-',
    demo: '',
    tags: ['Frontend'],
    featured: false,
    detailPath: '/projects/portfolio-v1',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
