import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";


const projects = [
  {
    name: "Movie Explorer App",
    link: "https://alian95-creator.github.io/movie-explorer/",
    desc: "Movie search application using external API with dynamic UI rendering."
  },
  {
    name: "Dynamic Product Store",
    link: "https://alian95-creator.github.io/Repository-name-dynamic-product-store/",
    desc: "E-commerce interface with cart functionality and dynamic product handling."
  },
  {
    name: "Winter Weather App",
    link: "https://alian95-creator.github.io/winter-dashboard/",
    desc: "Weather dashboard integrating API data with responsive UI."
  },
  {
    name: "Mochihamuya Hamster",
    link: "https://alian95-creator.github.io/website-mochihamuya-hamster/",
    desc: "Creative themed static website with aesthetic UI."
  },
  {
    name: "Startup Login V3",
    link: "https://alian95-creator.github.io/Startup-Login-Signup/",
    desc: "Modern login and signup interface design."
  },
  {
    name: "Law Office Website",
    link: "https://alian95-creator.github.io/website-advokad-surabaya/",
    desc: "Professional company profile website for legal services."
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="p-10 pt-24">
      <h2 className="text-3xl text-center mb-10 glow-text">Projects</h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#1a1a1a] p-6 rounded-2xl glow-card cursor-pointer transition"
          >
            <h3 className="text-lg mb-2">{p.name}</h3>

            <button
              onClick={() => setSelected(p)}
              className="text-[#8b7d7b] text-sm hover:underline"
            >
              View Details →
            </button>
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