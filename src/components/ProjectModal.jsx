import { motion } from "framer-motion";

export default function ProjectModal({ project, close }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 0.9, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-[#1a1a1a] p-6 rounded-2xl max-w-md w-full glow-card shadow-lg"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />

        <h2 className="text-xl mb-3 glow-text font-bold">{project.title}</h2>

        <div className="text-gray-400 space-y-2 mb-4">
          <p><strong>Masalah yang diselesaikan:</strong> {project.problem}</p>
          <p><strong>Peran:</strong> {project.role}</p>
          <p><strong>Hasil / Impact:</strong> {project.impact}</p>
        </div>

        <a
          href={project.link}
          target="_blank"
          className="text-[#13d823] underline font-medium"
        >
          Visit Project
        </a>

        <button
          onClick={close}
          className="block mt-4 text-red-400 font-medium"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}