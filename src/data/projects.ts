export interface Tag {
  name: string;
  color: string;
}

export const tagColors: Record<string, string> = {
  'React': '#61dafb',
  'React Native': '#61dafb',
  'Vue': '#42b883',
  'Svelte': '#ff3e00',
  'Solid.js': '#4f88c6',
  'Angular': '#dd0031',
  'Next.js': '#000000',
  'Nuxt': '#00dc82',
  'Astro': '#ff5d01',
  'TypeScript': '#3178c6',
  'JavaScript': '#f7df1e',
  'Node.js': '#339933',
  'Express': '#000000',
  'NestJS': '#e0234e',
  'Python': '#3776ab',
  'Django': '#092e20',
  'FastAPI': '#009688',
  'Go': '#00add8',
  'Rust': '#dea584',
  'Ruby': '#cc342d',
  'Rails': '#cc0000',
  'PHP': '#777bb4',
  'Laravel': '#ff2d20',
  'Kotlin': '#7f52ff',
  'Dart': '#0175c2',
  'Flutter': '#02569b',
  'Firebase': '#ffca28',
  'Supabase': '#3ecf8e',
  'MongoDB': '#47a248',
  'PostgreSQL': '#4169e1',
  'MySQL': '#4479a1',
  'Redis': '#dc382d',
  'SQLite': '#003b57',
  'Prisma': '#2d3748',
  'GraphQL': '#e10098',
  'Stripe': '#635bff',
  'Docker': '#2496ed',
  'Kubernetes': '#326ce5',
  'AWS': '#ff9900',
  'Vercel': '#000000',
  'Cloudflare': '#f38020',
  'Terraform': '#7b42bc',
  'GitHub Actions': '#2088ff',
  'Tailwind': '#06b6d4',
  'CSS': '#264de4',
  'WebRTC': '#333333',
  'Socket.io': '#010101',
  'Electron': '#47848f',
  'PWA': '#5a0fc8',
  'WebAssembly': '#654ff0',
  'WebGL': '#990000',
  'Canvas API': '#e34c26',
  'Web Audio API': '#8b5cf6',
  'Chart.js': '#ff6384',
  'Markdown': '#083fa1',
  'SVG': '#ffb13b',
  'Elasticsearch': '#005571',
  'MQTT': '#660066',
  'Raspberry Pi': '#c51a4a',
  'Android': '#3ddc84',
  'ExoPlayer': '#4285f4',
  'IndexedDB': '#f59e0b',
  'Yjs': '#6366f1',
  'WebSocket': '#010101',
  'AES-256': '#22c55e',
  'MediaRecorder': '#ef4444',
  'Alpha Vantage': '#1e3a8a',
  'OpenWeather API': '#ea580c',
  'Google Maps': '#4285f4',
};

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github: string;
  content?: string;
}

export const projects: Project[] = [
  { 
    id: '1', 
    title: 'E-Commerce Platform', 
    description: 'A full-stack online store with cart, checkout, and payment integration.', 
    tags: ['React', 'Node.js', 'Stripe'], 
    github: 'https://github.com/username/ecommerce-platform',
    content: `This e-commerce platform was built to provide a seamless shopping experience from browsing to checkout. The frontend uses React with a component-based architecture, making it easy to maintain and extend.

Key features include a dynamic product catalog with filtering and search, a persistent shopping cart using local storage, and secure checkout powered by Stripe. The backend API handles inventory management, order processing, and user authentication with JWT tokens.

The admin dashboard allows store owners to manage products, view sales analytics, and process orders. Performance optimizations include lazy loading for images, code splitting, and server-side rendering for SEO.`
  },
  { 
    id: '2', 
    title: 'Task Management App', 
    description: 'Kanban-style project management tool with drag-and-drop functionality.', 
    tags: ['Vue', 'Firebase', 'Tailwind'], 
    github: 'https://github.com/username/task-manager',
    content: `A modern task management application inspired by Trello and Notion. Built with Vue 3 Composition API for reactive state management and smooth user interactions.

The drag-and-drop functionality uses the native HTML5 API with custom animations for a polished feel. Tasks can be organized into boards, lists, and cards with support for labels, due dates, and assignees.

Firebase provides real-time synchronization across devices, so team members see updates instantly. Authentication supports email/password and Google sign-in. Tailwind CSS enables rapid UI development with a consistent design system.`
  },
  { 
    id: '3', 
    title: 'Weather Dashboard', 
    description: 'Real-time weather app with location-based forecasts and interactive maps.', 
    tags: ['TypeScript', 'OpenWeather API', 'Chart.js'], 
    github: 'https://github.com/username/weather-dashboard',
    content: `A comprehensive weather dashboard that provides current conditions, hourly forecasts, and 7-day predictions. TypeScript ensures type safety throughout the codebase, catching errors at compile time.

The app integrates with OpenWeather API for accurate meteorological data. Users can search for any city or use geolocation for automatic detection. Interactive charts built with Chart.js visualize temperature trends, precipitation probability, and wind patterns.

Additional features include severe weather alerts, air quality index, UV index, and sunrise/sunset times. The responsive design works beautifully on both desktop and mobile devices.`
  },
  { 
    id: '4', 
    title: 'Social Media Analytics', 
    description: 'Dashboard for tracking engagement metrics across multiple platforms.', 
    tags: ['Python', 'Django', 'PostgreSQL'], 
    github: 'https://github.com/username/social-analytics',
    content: `An analytics platform that aggregates data from Twitter, Instagram, Facebook, and LinkedIn into a unified dashboard. Built with Django for its robust ORM and admin interface.

The system uses background workers with Celery to fetch data from social media APIs at regular intervals. PostgreSQL stores historical data efficiently, enabling trend analysis over time.

Key metrics include follower growth, engagement rates, best posting times, and content performance. Custom reports can be generated and exported to PDF or CSV. The dashboard features interactive charts and comparison tools for benchmarking.`
  },
  { 
    id: '5', 
    title: 'Recipe Finder', 
    description: 'Search and save recipes with nutritional information and meal planning.', 
    tags: ['React', 'GraphQL', 'MongoDB'], 
    github: 'https://github.com/username/recipe-finder',
    content: `A recipe discovery app that helps users find meals based on ingredients they have, dietary restrictions, or cuisine preferences. The GraphQL API allows clients to request exactly the data they need, reducing over-fetching.

MongoDB's flexible schema accommodates recipes with varying structures and attributes. Full-text search enables finding recipes by name, ingredient, or description. Users can save favorites, create collections, and plan weekly meals.

Nutritional information is calculated automatically based on ingredients and serving sizes. The meal planner generates shopping lists and estimates total prep time for the week.`
  },
  { 
    id: '6', 
    title: 'Fitness Tracker', 
    description: 'Mobile-first app for logging workouts and tracking progress over time.', 
    tags: ['React Native', 'Redux', 'Express'], 
    github: 'https://github.com/username/fitness-tracker',
    content: `A cross-platform mobile app for fitness enthusiasts to log workouts, track progress, and achieve their goals. React Native enables code sharing between iOS and Android while maintaining native performance.

Redux manages complex state including workout history, exercise library, and user preferences. The Express backend handles user accounts, data synchronization, and workout analytics.

Features include customizable workout templates, exercise demonstrations with videos, progress photos, body measurements, and personal records tracking. Charts visualize strength gains and workout consistency over time.`
  },
  { 
    id: '7', 
    title: 'Real Estate Listings', 
    description: 'Property search platform with filters, maps, and virtual tours.', 
    tags: ['Next.js', 'Prisma', 'Google Maps'], 
    github: 'https://github.com/username/real-estate',
    content: `A property listing platform that connects buyers with their dream homes. Next.js provides server-side rendering for fast initial loads and excellent SEO, crucial for real estate searches.

Prisma ORM simplifies database operations with type-safe queries and migrations. The search functionality supports filtering by price, bedrooms, location, property type, and amenities.

Google Maps integration shows property locations with nearby schools, transit, and points of interest. Virtual tour support allows 360-degree property exploration. Saved searches notify users when matching properties are listed.`
  },
  { 
    id: '8', 
    title: 'Chat Application', 
    description: 'Real-time messaging app with rooms, file sharing, and notifications.', 
    tags: ['Socket.io', 'Node.js', 'Redis'], 
    github: 'https://github.com/username/chat-app',
    content: `A real-time chat application supporting both private messages and group conversations. Socket.io enables bidirectional communication with automatic reconnection and fallback to polling.

Redis serves as both a message broker for scaling across multiple server instances and a cache for recent messages. The pub/sub pattern ensures messages reach all connected clients instantly.

Features include typing indicators, read receipts, file attachments, emoji reactions, and message search. Push notifications keep users informed even when the app is in the background.`
  },
  { 
    id: '9', 
    title: 'Portfolio Generator', 
    description: 'Tool for developers to create and customize their portfolio sites.', 
    tags: ['Astro', 'Markdown', 'CSS'], 
    github: 'https://github.com/username/portfolio-generator',
    content: `A static site generator specifically designed for developer portfolios. Astro's partial hydration approach delivers lightning-fast pages with minimal JavaScript.

Content is written in Markdown with frontmatter for metadata, making it easy to add projects, blog posts, and work experience. Multiple themes are available, and custom CSS variables allow personalization.

The build process optimizes images, generates responsive sizes, and creates an RSS feed. Deployment is automated to GitHub Pages, Netlify, or Vercel with a single command.`
  },
  { 
    id: '10', 
    title: 'Invoice Manager', 
    description: 'Create, send, and track invoices with PDF export and payment reminders.', 
    tags: ['Angular', 'NestJS', 'MySQL'], 
    github: 'https://github.com/username/invoice-manager',
    content: `A complete invoicing solution for freelancers and small businesses. Angular provides a structured framework with dependency injection and reactive forms for complex invoice editing.

NestJS backend follows a modular architecture with separate modules for clients, invoices, and payments. MySQL stores financial data with proper decimal handling and referential integrity.

Features include customizable invoice templates, automatic numbering, tax calculations, and multi-currency support. PDF generation creates professional documents. Email integration sends invoices directly to clients with payment links.`
  },
  { id: '11', title: 'Blog Platform', description: 'CMS for writers with rich text editing and SEO optimization tools.', tags: ['Svelte', 'Supabase', 'Vercel'], github: 'https://github.com/username/blog-platform' },
  { id: '12', title: 'Music Streaming App', description: 'Audio player with playlists, recommendations, and offline mode.', tags: ['React', 'Web Audio API', 'AWS'], github: 'https://github.com/username/music-streaming' },
  { id: '13', title: 'Code Snippet Library', description: 'Save and organize reusable code snippets with syntax highlighting.', tags: ['TypeScript', 'Electron', 'SQLite'], github: 'https://github.com/username/snippet-library' },
  { id: '14', title: 'Event Booking System', description: 'Platform for creating events, selling tickets, and managing attendees.', tags: ['PHP', 'Laravel', 'Stripe'], github: 'https://github.com/username/event-booking' },
  { id: '15', title: 'Language Learning App', description: 'Interactive lessons with spaced repetition and progress tracking.', tags: ['Flutter', 'Dart', 'Firebase'], github: 'https://github.com/username/language-learning' },
  { id: '16', title: 'Stock Portfolio Tracker', description: 'Monitor investments with real-time prices and performance charts.', tags: ['Python', 'FastAPI', 'Alpha Vantage'], github: 'https://github.com/username/stock-tracker' },
  { id: '17', title: 'Video Conferencing Tool', description: 'WebRTC-based video calls with screen sharing and recording.', tags: ['WebRTC', 'Node.js', 'MediaRecorder'], github: 'https://github.com/username/video-conferencing' },
  { id: '18', title: 'Job Board', description: 'Platform connecting employers with candidates, featuring search and filters.', tags: ['Ruby', 'Rails', 'Elasticsearch'], github: 'https://github.com/username/job-board' },
  { id: '19', title: 'Expense Splitter', description: 'Split bills with friends and track who owes what.', tags: ['React', 'Firebase', 'PWA'], github: 'https://github.com/username/expense-splitter' },
  { id: '20', title: 'Note Taking App', description: 'Markdown notes with folders, tags, and cloud sync.', tags: ['Solid.js', 'IndexedDB', 'Cloudflare'], github: 'https://github.com/username/note-taking' },
  { id: '21', title: 'API Gateway', description: 'Centralized gateway for microservices with rate limiting and auth.', tags: ['Go', 'Docker', 'Kubernetes'], github: 'https://github.com/username/api-gateway' },
  { id: '22', title: 'Image Editor', description: 'Browser-based photo editing with filters, cropping, and layers.', tags: ['Canvas API', 'WebGL', 'TypeScript'], github: 'https://github.com/username/image-editor' },
  { id: '23', title: 'Booking Calendar', description: 'Appointment scheduling system with availability management.', tags: ['Vue', 'Nuxt', 'Stripe'], github: 'https://github.com/username/booking-calendar' },
  { id: '24', title: 'Survey Builder', description: 'Create and distribute surveys with analytics and export options.', tags: ['React', 'Node.js', 'Chart.js'], github: 'https://github.com/username/survey-builder' },
  { id: '25', title: 'Password Manager', description: 'Secure vault for credentials with encryption and autofill.', tags: ['Rust', 'WebAssembly', 'AES-256'], github: 'https://github.com/username/password-manager' },
  { id: '26', title: 'Podcast Player', description: 'Subscribe to podcasts with offline downloads and playback speed control.', tags: ['Kotlin', 'Android', 'ExoPlayer'], github: 'https://github.com/username/podcast-player' },
  { id: '27', title: 'CI/CD Pipeline Tool', description: 'Automate builds, tests, and deployments with visual pipeline editor.', tags: ['Go', 'GitHub Actions', 'Terraform'], github: 'https://github.com/username/cicd-pipeline' },
  { id: '28', title: 'Document Collaboration', description: 'Real-time collaborative editing with version history and comments.', tags: ['Yjs', 'WebSocket', 'React'], github: 'https://github.com/username/doc-collaboration' },
  { id: '29', title: 'QR Code Generator', description: 'Create customizable QR codes with logos and color schemes.', tags: ['JavaScript', 'Canvas API', 'SVG'], github: 'https://github.com/username/qr-generator' },
  { id: '30', title: 'Home Automation Hub', description: 'Control smart home devices from a unified dashboard.', tags: ['Python', 'MQTT', 'Raspberry Pi'], github: 'https://github.com/username/home-automation' },
];
