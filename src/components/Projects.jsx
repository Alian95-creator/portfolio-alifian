import { motion } from "framer-motion";

const projects = [
  {
    title: "Movie Explorer",
    link: "https://alian95-creator.github.io/movie-explorer/",
  },
  {
    title: "Weather App",
    link: "https://alian95-creator.github.io/winter-dashboard/",
  },
  {
    title: "Dynamic Product Store",
    link: "https://alian95-creator.github.io/Repository-name-dynamic-product-store/",
  },
  {
    title: "Mochihamuya Hamster",
    link: "https://alian95-creator.github.io/website-mochihamuya-hamster/",
  },
  {
    title: "Startup Login",
    link: "https://alian95-creator.github.io/Startup-Login-Signup/",
  },
  {
    title: "Law Office Website",
    link: "https://alian95-creator.github.io/website-advokad-surabaya/",
  },
];

export default function Projects() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16">
      <h2 className="text-white text-4xl mb-10 font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            className="group relative overflow-hidden rounded-xl bg-[#0f172a]"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-10">
              <h3 className="text-xl text-white">{p.title}</h3>
            </div>

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white">View Project</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}