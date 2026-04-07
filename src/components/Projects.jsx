import { motion } from "framer-motion";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Movie App",
    desc: "Movie search application",
    image: `${base}movie.png`,
  },
  {
    title: "Store App",
    desc: "E-commerce UI",
    image: `${base}store.png`,
  },
  {
    title: "Login Page",
    desc: "Authentication UI design",
    image: `${base}login.png`,
  },
  {
    title: "Weather App",
    desc: "Weather forecast app",
    image: `${base}weather.png`,
  },
  {
    title: "Hamster Game",
    desc: "Interactive mini game",
    image: `${base}hamster.png`,
  },
  {
    title: "Law Website",
    desc: "Law firm landing page",
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