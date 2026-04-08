import { motion } from "framer-motion";

export default function ProjectModal({ project, close }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 0.9, opacity: 1 }}
        className="bg-[#1a1a1a] p-6 rounded-2xl max-w-md w-full glow-card"
      >

        <img
          src={project.image}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />

        <h2 className="text-xl mb-3 glow-text">{project.name}</h2>

        <p className="text-gray-400 mb-4">{project.desc}</p>

        <a href={project.link} target="_blank" className="text-[#13d823] underline">
          Visit Project
        </a>

        <button onClick={close} className="block mt-4 text-red-400">
          Close
        </button>

      </motion.div>
    </div>
  );
}