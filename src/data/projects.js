
export const projects = [
  {
    id: 'food-ordering-system',
    name: 'Food Ordering System',
    tagline: 'Backend food ordering platform using Java, Spring Boot and PostgreSQL',
    description:
      'Currently developing a backend-focused food ordering application using Java and Spring Boot. The project is designed to manage restaurants, food categories, food items, shopping carts, customer orders, delivery addresses, payments, and reviews. I am building REST APIs with a layered architecture, using Spring Data JPA and PostgreSQL for database operations, and DTOs for handling API requests and responses.',
    tech: [
      'Java 21',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'PostgreSQL',
      'REST APIs',
      'Maven',
      'Bean Validation',
      'Java Mail'
    ],
    features: [
      'Developing REST APIs for user registration and restaurant management',
      'Implemented food category and food item management operations',
      'Developed cart operations to add, retrieve, update quantities, remove items, and clear the cart',
      'Implemented order placement, order retrieval, cancellation, and order status management',
      'Created delivery address management functionality',
      'Developed payment creation, payment status retrieval, and confirmation workflows',
      'Implemented food item reviews with ratings and comments',
      'Used DTOs, DAO and service layers to organize backend application logic',
      'Integrated PostgreSQL using Spring Data JPA and Hibernate',
      'Configured email integration and request validation'
    ],
    github:
      '',
    demo: '',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Backend', 'REST APIs'],
    featured: false,
    detailPath: '/projects/food-ordering-system',
  },

  {
    id: 'ai-trip-planner',
    name: 'Waypoint — AI Trip Planner',
    tagline: 'AI-powered travel planning platform using Generative AI',
    description:
      'Developed as part of a 3-member team, Waypoint is an AI-powered travel planning application designed to simplify trip organization. It generates personalized day-wise itineraries based on the destination, budget, trip duration, and user preferences. My contributions included React.js frontend development, Spring Boot REST API integration, OpenRouter AI integration, and MongoDB data management.',
    tech: [
      'Java 17',
      'Spring Boot',
      'React.js',
      'REST APIs',
      'MongoDB',
      'Spring Data',
      'OpenRouter AI',
      'Jackson'
    ],
    features: [
      'Developed React.js frontend functionality and integrated it with Spring Boot REST APIs',
      'Implemented user registration, login, trip generation, and trip management workflows',
      'Integrated OpenRouter AI using RestTemplate to generate personalized travel itineraries',
      'Designed AI prompts and mapped JSON responses to Java objects using Jackson',
      'Implemented a backup AI model to handle primary AI request failures',
      'Used Spring Data MongoDB to store and retrieve user accounts and saved trips',
      'Handled duplicate registrations, invalid login attempts, and missing data through validation and exception handling',
      'Tested backend API workflows using Postman'
    ],
    github:
      'https://github.com/prashantmane1207/AI-Based-Trip-Planner',
    demo: 'https://ai-based-trip-planner-blush.vercel.app/',
    tags: ['Java', 'Spring Boot', 'React', 'AI', 'Full Stack'],
    featured: true,
    detailPath: '/projects/ai-trip-planner',
  },

  {
    id: 'ride-booking-application',
    name: 'Ride Booking Application',
    tagline: 'Full-stack ride booking application using Java, Spring Boot and PostgreSQL',
    description:
      'Developed and deployed a full-stack ride booking application that provides an online ride booking workflow through a React-based interface. Built backend functionality using Java and Spring Boot, connected frontend operations through REST APIs, and integrated PostgreSQL for application data persistence. Deployed the application using Render.',
    tech: [
      'Java',
      'Spring Boot',
      'React.js',
      'REST APIs',
      'PostgreSQL'
    ],
    features: [
      'Developed a React-based frontend for the ride booking application',
      'Built backend application functionality using Java and Spring Boot',
      'Connected frontend operations with backend services through REST APIs',
      'Integrated PostgreSQL for persistent application data storage',
      'Implemented database operations to support the ride booking workflow',
      'Deployed the application using Render'
    ],
    github:
      'https://github.com/prashantmane1207/Ride-Booking-App',
    demo: 'https://ride-booking-app-8kzz.onrender.com',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Full Stack'],
    featured: true,
    detailPath: '/projects/ride-booking-application',
  },

  {
    id: 'vehicle-rental-system',
    name: 'Vehicle Rental System',
    tagline: 'Java-based vehicle rental management system',
    description:
      'A Java-based vehicle rental management application developed to practise object-oriented programming, collections, CRUD operations, and application business logic. The project helped strengthen my understanding of Java fundamentals and organizing application functionality.',
    tech: ['Java', 'OOP', 'Collections Framework'],
    features: [
      'Applied object-oriented programming concepts to structure application components',
      'Implemented vehicle rental and return workflows',
      'Used Java Collections to manage application data',
      'Practised CRUD operations and business logic implementation'
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
      'A personal portfolio website developed using HTML, CSS, and JavaScript to present my technical skills, development projects, and professional profile. The project helped me practise frontend development and responsive web design.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Developed a multi-section personal portfolio website',
      'Created responsive layouts using HTML and CSS',
      'Implemented interactive elements using JavaScript',
      'Organized project and personal information into structured sections'
    ],
    github:
      'https://github.com/prashantmane1207/Prashantportfolio-',
    demo: '',
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    featured: false,
    detailPath: '/projects/portfolio-v1',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
