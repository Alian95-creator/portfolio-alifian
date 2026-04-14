import { motion } from "framer-motion";

export default function ProjectModal({ project, close }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={close}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1a1a1a] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        {/* IMAGE HEADER */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-6">

          {/* TITLE */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Case Study Overview
            </p>
          </div>

          {/* PROBLEM */}
          <div>
            <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-1">
              Problem
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* ROLE / APPROACH */}
          <div>
            <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-1">
              Approach
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {project.role}
            </p>
          </div>

          {/* IMPACT */}
          <div>
            <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-1">
              Impact
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition font-medium"
            >
              Visit Live Project →
            </a>

            <button
              onClick={close}
              className="text-gray-400 hover:text-white transition text-sm"
            >
              Close
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}