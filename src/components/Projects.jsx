import { motion } from "framer-motion";

const base = import.meta.env.BASE_URL; // 🔥 WAJIB

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: `${base}movie.png`,
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: `${base}store.png`,
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: `${base}login.png`,
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: `${base}weather.png`,
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: `${base}hamster.png`,
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with React & Tailwind",
    image: `${base}law.png`,
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#0f172a]">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-white text-xl font-semibold">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;