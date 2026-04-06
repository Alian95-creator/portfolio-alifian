import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    name: "Movie Explorer App",
    link: "https://alian95-creator.github.io/movie-explorer/",
    desc: "Movie search application using external API with dynamic UI rendering.",
    image: "/portfolio-alifian/projects/movie.png"
  },
  {
    name: "Dynamic Product Store",
    link: "https://alian95-creator.github.io/Repository-name-dynamic-product-store/",
    desc: "E-commerce interface with cart functionality.",
    image: "/portfolio-alifian/projects/store.png"
  },
  {
    name: "Winter Weather App",
    link: "https://alian95-creator.github.io/winter-dashboard/",
    desc: "Weather dashboard integrating API data.",
    image: "/portfolio-alifian/projects/weather.png"
  },
  {
    name: "Mochihamuya Hamster",
    link: "https://alian95-creator.github.io/website-mochihamuya-hamster/",
    desc: "Creative themed static website.",
    image: "/portfolio-alifian/projects/hamster.png"
  },
  {
    name: "Startup Login V3",
    link: "https://alian95-creator.github.io/Startup-Login-Signup/",
    desc: "Modern login and signup UI.",
    image: "/portfolio-alifian/projects/login.png"
  },
  {
    name: "Law Office Website",
    link: "https://alian95-creator.github.io/website-advokad-surabaya/",
    desc: "Professional legal company profile.",
    image: "/portfolio-alifian/projects/law.png"
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="p-10 pt-24">
      <h2 className="text-3xl text-center mb-10 glow-text">Projects</h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-3 gap-6"
        transition={{ duration: 0.7 }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 text-white">{p.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{p.desc}</p>
              <button
                onClick={() => setSelected(p)}
                className="text-[#8b7d7b] text-sm hover:underline"
              >
                View Details →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selected && (
        <ProjectModal
          project={selected}
          close={() => setSelected(null)}
        />
      )}
    </section>
  );
}