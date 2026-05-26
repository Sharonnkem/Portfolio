const themes = {
  blue: {
    gradient: "from-brand-500/30 via-cyan-300/10 to-emerald-300/15",
    accent: "bg-brand-400/20 text-brand-100 border-brand-300/25",
    surface:
      "bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.34),_transparent_34%),linear-gradient(180deg,_rgba(9,17,38,0.96),_rgba(5,10,24,0.98))]",
  },
  amber: {
    gradient: "from-amber-200/20 via-orange-200/5 to-brand-400/15",
    accent: "bg-amber-100/10 text-amber-50 border-amber-100/15",
    surface:
      "bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_28%),linear-gradient(180deg,_rgba(22,17,14,0.92),_rgba(8,9,15,0.96))]",
  },
  emerald: {
    gradient: "from-emerald-300/20 via-cyan-300/10 to-brand-500/15",
    accent: "bg-emerald-300/15 text-emerald-50 border-emerald-200/15",
    surface:
      "bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.22),_transparent_30%),linear-gradient(180deg,_rgba(7,17,18,0.95),_rgba(5,10,24,0.98))]",
  },
  rose: {
    gradient: "from-rose-200/15 via-orange-200/5 to-brand-500/15",
    accent: "bg-rose-100/10 text-rose-50 border-rose-100/15",
    surface:
      "bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.18),_transparent_30%),linear-gradient(180deg,_rgba(23,12,15,0.94),_rgba(5,10,24,0.98))]",
  },
};

export const projects = [
  {
    name: "EstateFlow-AI",
    category: "AI-powered SaaS",
    badge: "Featured",
    summary:
      "An estate management platform for payments, complaints, visitors, and resident updates.",
    features: [
      "Tracks electricity payments and estate dues in one workflow",
      "Uses AI-powered complaint classification for faster issue routing",
      "Supports visitor and security management for gated communities",
      "Delivers notifications for residents, admins, and payment events",
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "SaaS UI"],
    githubUrl: "https://github.com/Sharonnkem/EstateFlow-AI",
    demoUrl: "https://estate-flow-ai-ten.vercel.app/login",
    theme: themes.blue,
    mockup: [
      { label: "Resident access", image: "/img/estateflow-login.png" },
      { label: "Password reset", image: "/img/estateflow-forgot.png" },
      { label: "Activation email", image: "/img/estateflow-activation.png" },
    ],
  },
  {
    name: "OMK Unwind Spa",
    category: "Spa and wellness website",
    badge: "Featured",
    summary:
      "A spa website built to showcase services and guide visitors toward booking.",
    features: [
      "Built a homepage that fits the spa brand",
      "Used clear sections to show services",
      "Integrated Node.js for backend support",
      "Kept the layout responsive across devices",
      "Made the flow easy for browsing and booking",
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "Responsive UI"],
    githubUrl: "https://github.com/Sharonnkem/omk-unwind-spa",
    demoUrl: "https://omk-unwind-spa.vercel.app/",
    theme: themes.rose,
    mockup: [
      { label: "Wellness landing", image: "/img/omk-home-ui.png" },
      { label: "Service highlights", image: "/img/omk-services-ui.png" },
      { label: "Booking journey", image: "/img/omk-booking-ui.png" },
    ],
  },
  {
    name: "Arcdiff",
    category: "Architecture portfolio",
    badge: "Featured",
    summary:
      "An architecture portfolio with strong visuals, smooth motion, and clear project presentation.",
    features: [
      "Responsive layout tailored for visual case study presentation",
      "Smooth motion and transitions that support storytelling",
      "Professional branding and strong typography-led hierarchy",
      "Clear presentation for studio and project pages",
    ],
    stack: ["React", "Tailwind CSS", "Framer Motion", "Portfolio UI"],
    githubUrl: "https://github.com/Sharonnkem/arcdiff",
    demoUrl: "https://arcdiff.vercel.app/",
    theme: themes.amber,
    mockup: [
      { label: "Studio homepage", image: "/img/arcdiff-home.png" },
      { label: "Project gallery", image: "/img/arcdiff-projects.png" },
      { label: "Service offering", image: "/img/arcdiff-services.png" },
    ],
  },
  {
    name: "Authie",
    category: "Secure authentication platform",
    badge: "Fullstack",
    summary:
      "An authentication app for signup, login, verification, and profile management.",
    features: [
      "Built a responsive React authentication experience for seamless account access",
      "Implemented email confirmation for identity verification and user trust",
      "Added account management for updating personal details and credentials",
      "Secured authentication with JWT and profile picture upload support",
    ],
    stack: ["React", "JWT", "Authentication", "Responsive UI"],
    githubUrl: "https://github.com/Sharonnkem/auth-app",
    demoUrl: "https://auth-app-bice-nu.vercel.app/",
    theme: themes.emerald,
    mockup: [
      { label: "Sign in flow", image: "/img/authie-login.png" },
      { label: "Account signup", image: "/img/authie-signup.png" },
      { label: "Profile settings", image: "/img/authie-profile.png" },
    ],
  },
  {
    name: "Task Master",
    category: "Productivity and task management",
    badge: "Shipped",
    summary:
      "A task app for creating, searching, filtering, and managing daily work.",
    features: [
      "Created a clean task management interface with responsive React layouts",
      "Implemented task creation and deletion for everyday productivity flows",
      "Added search and filtering to help users find tasks quickly",
      "Optimized state updates and performance for smooth interactions",
    ],
    stack: ["React", "State Management", "Search UX", "Responsive UI"],
    githubUrl: "https://github.com/Sharonnkem/taskmaster",
    demoUrl: "https://taskmaster-sandy.vercel.app/",
    theme: themes.blue,
    mockup: [
      { label: "Welcome screen", image: "/img/taskmaster-home.png" },
      { label: "Login flow", image: "/img/taskmaster-login.png" },
      { label: "Task creation", image: "/img/taskmaster-form.png" },
    ],
  },
  {
    name: "Stream Movie Website",
    category: "Entertainment platform",
    badge: "Shipped",
    summary:
      "A movie website for browsing titles, exploring genres, and discovering content.",
    features: [
      "Developed a visually appealing interface for movie browsing",
      "Added search, movie genres, and sliders to improve engagement",
      "Designed the layout to stay responsive across screen sizes",
      "Optimized loading and interactions for a smoother experience",
    ],
    stack: ["React", "Search", "Sliders", "Responsive Design"],
    githubUrl: "https://github.com/Sharonnkem/movie-website",
    demoUrl: "https://movie-website-ten-iota.vercel.app/",
    theme: themes.amber,
    mockup: [
      { label: "Sign in modal", image: "/img/movie-signin.png" },
      { label: "Account signup", image: "/img/movie-signup.png" },
      { label: "Password recovery", image: "/img/movie-password.png" },
    ],
  },
  {
    name: "Portfolio Website",
    category: "Personal brand",
    badge: "Shipped",
    summary:
      "A personal portfolio for showing projects, skills, and contact details.",
    features: [
      "Shows projects and skills in one place",
      "Uses a clear hero section and call to action",
      "Stays responsive across screen sizes",
      "Includes simple navigation and contact flow",
    ],
    stack: ["React", "CSS", "JavaScript", "Responsive UI"],
    githubUrl: "https://github.com/Sharonnkem/david",
    demoUrl: "https://portfolio-seven-alpha-96.vercel.app/",
    theme: themes.blue,
    mockup: [
      { label: "Homepage hero", image: "/img/david.png" },
      { label: "Portfolio tile", image: "/img/david-display2.jpg" },
      { label: "Project card", image: "/img/david-frame2.svg", fit: "contain" },
    ],
  },
  {
    name: "E-commerce Website",
    category: "Commerce experience",
    badge: "Client Work",
    summary:
      "A responsive e-commerce website with product-focused browsing, image galleries, sliders, add-to-cart interactions, and a streamlined checkout experience.",
    features: [
      "Built the user interface with HTML, CSS, and JavaScript",
      "Designed image galleries and product sliders for stronger engagement",
      "Integrated add-to-cart and checkout flow interactions",
      "Optimized responsiveness, performance, and cross-browser support",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Commerce UI"],
    githubUrl: "https://github.com/Sharonnkem/RonEmpire",
    demoUrl: "https://ron-empire.vercel.app",
    theme: themes.emerald,
    mockup: [
      { label: "Homepage hero", image: "/img/ron-hero-ui.png" },
      { label: "Featured products", image: "/img/ron-products-ui.png" },
      { label: "Newsletter and footer", image: "/img/ron-newsletter-ui.png" },
    ],
  },
];
