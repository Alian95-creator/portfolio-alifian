import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Movie Explorer",
    link: "https://alian95-creator.github.io/movie-explorer/",
    image: "/portfolio-alifian/projects/movie.png",
    problem: "User sulit menemukan film berdasarkan genre dan rating secara cepat.",
    role: "Frontend Developer: membuat UI interaktif dengan mengusung konsep Netflix menggunakan React dan API TMDB.",
    impact: "Meningkatkan pengalaman pencarian film, 80% user feedback positif."
  },
  {
    title: "Weather App",
    link: "https://alian95-creator.github.io/winter-dashboard/",
    image: "/portfolio-alifian/projects/weather.png",
    problem: "User membutuhkan info cuaca realtime yang mudah dibaca.",
    role: "Frontend Developer: membuat dashboard responsif dengan Tailwind CSS.",
    impact: "Mempermudah user merencanakan aktivitas harian berdasarkan cuaca."
  },
  {
    title: "Dynamic Product Store",
    link: "https://alian95-creator.github.io/Repository-name-dynamic-product-store/",
    image: "/portfolio-alifian/projects/store.png",
    problem: "User bingung memilih produk dengan variasi yang banyak.",
    role: "Frontend Developer: membuat filtering & sorting dinamis.",
    impact: "Meningkatkan penjualan dengan navigasi produk lebih mudah."
  },
  {
    title: "flowlytics",
    link: "https://flowlytics-red.vercel.app/",
    image: "/portfolio-alifian/projects/flowlytics.png",
    problem: "Complex crypto data is difficult to interpret due to poor UI and overwhelming dashboards.",
    role: "Frontend Developer: Designed and developed a Web3 analytics dashboard using React and Tailwind, focusing on performance, usability, and real-time data visualization.",
    impact: "Delivered a clean, responsive dashboard that improves data readability and user decision-making."
  },
  {
    title: "Mochihamuya Hamster",
    link: "https://alian95-creator.github.io/website-mochihamuya-hamster/",
    image: "/portfolio-alifian/projects/hamster.png",
    problem: "Website sebelumnya statis dan tidak interaktif.",
    role: "Frontend Developer: membangun UI interaktif dengan React.",
    impact: "Website lebih engaging dan ramah untuk pembeli."
  },
  {
    title: "Startup Login",
    link: "https://alian95-creator.github.io/Startup-Login-Signup/",
    image: "/portfolio-alifian/projects/login.png",
    problem: "Form login/signup kurang user-friendly.",
    role: "Frontend Developer: membuat form login/signup modern dengan validasi realtime.",
    impact: "User experience lebih smooth, mengurangi error input."
  },
  {
    title: "Law Office Website",
    link: "https://alian95-creator.github.io/website-advokad-surabaya/",
    image: "/portfolio-alifian/projects/law.png",
    problem: "Website sebelumnya tidak responsive dan info sulit ditemukan.",
    role: "Frontend Developer: membangun website responsive & modern sesuai kemauan client.",
    impact: "Pengunjung bisa mengakses info kantor hukum dengan mudah."
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-16">
      <h2 className="text-white text-4xl mb-10 font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="group relative overflow-hidden rounded-xl bg-[#0f172a] cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(p)}
          >
            <div className="p-10">
              <h3 className="text-xl text-white font-semibold">{p.title}</h3>
            </div>

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-medium">View Details</span>
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