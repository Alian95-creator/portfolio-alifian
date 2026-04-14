import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Movie Explorer",
    link: "https://alian95-creator.github.io/movie-explorer/",
    image: "/portfolio-alifian/projects/movie.png",
    problem: "Users struggle to quickly find movies based on genre and rating.",
    role: "Built an intuitive Netflix-style UI using React and TMDB API.",
    impact: "Improved discoverability of movies through simplified browsing flow."
  },
  {
    title: "Weather App",
    link: "https://alian95-creator.github.io/winter-dashboard/",
    image: "/portfolio-alifian/projects/weather.png",
    problem: "Weather information is often cluttered and hard to interpret.",
    role: "Designed a clean, responsive weather dashboard using Tailwind CSS.",
    impact: "Made daily weather planning faster and easier for users."
  },
  {
    title: "Dynamic Product Store",
    link: "https://alian95-creator.github.io/Repository-name-dynamic-product-store/",
    image: "/portfolio-alifian/projects/store.png",
    problem: "Users get overwhelmed when choosing between many product variants.",
    role: "Implemented filtering and sorting system with React state management.",
    impact: "Reduced decision friction and improved product navigation."
  },
  {
    title: "Flowlytics",
    link: "https://flowlytics-red.vercel.app/",
    image: "/portfolio-alifian/projects/flowlytics.png",
    problem: "Crypto data is complex and difficult to understand for non-technical users.",
    role: "Built a data visualization dashboard focused on clarity and usability.",
    impact: "Transformed raw data into actionable insights with minimal cognitive load."
  },
  {
    title: "Mochihamuya Hamster",
    link: "https://alian95-creator.github.io/website-mochihamuya-hamster/",
    image: "/portfolio-alifian/projects/hamster.png",
    problem: "Static website lacked engagement and interaction.",
    role: "Developed interactive UI using React components.",
    impact: "Increased user engagement through improved interactivity."
  },
  {
    title: "Startup Login",
    link: "https://alian95-creator.github.io/Startup-Login-Signup/",
    image: "/portfolio-alifian/projects/login.png",
    problem: "Login/signup flow had poor usability and validation experience.",
    role: "Built modern authentication UI with real-time form validation.",
    impact: "Reduced user input errors and improved onboarding experience."
  },
  {
    title: "Law Office Website",
    link: "https://alian95-creator.github.io/website-advokad-surabaya/",
    image: "/portfolio-alifian/projects/law.png",
    problem: "Important legal information was difficult for users to access.",
    role: "Developed responsive, structured website for better information clarity.",
    impact: "Improved accessibility of legal services for clients."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-16">
      
      {/* 🔥 UPGRADED TITLE */}
      <h2 className="text-white text-4xl mb-3 font-bold">
        Selected Projects
      </h2>

      <p className="text-gray-500 mb-10">
        Case studies focused on UX, problem solving, and product thinking.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="group relative overflow-hidden rounded-xl bg-[#0f172a] cursor-pointer border border-white/5"
            whileHover={{ scale: 1.04 }}
            onClick={() => setSelectedProject(p)}
          >

            {/* CONTENT */}
            <div className="p-8">
              <h3 className="text-xl text-white font-semibold">
                {p.title}
              </h3>

              <p className="text-gray-500 text-sm mt-3 line-clamp-2">
                {p.problem}
              </p>

              {/* 🔥 UX SIGNAL BADGE */}
              <div className="mt-4 text-xs text-gray-400">
                Click to view case study →
              </div>
            </div>

            {/* HOVER LAYER */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-6">
              <span className="text-white font-semibold">
                View Case Study
              </span>

              <span className="text-gray-300 text-sm mt-2">
                See problem, solution & UX reasoning
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          close={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}