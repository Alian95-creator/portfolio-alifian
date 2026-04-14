import { motion } from "framer-motion";

export default function ProjectModal({ project, close }) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-start justify-center z-50 p-4 pt-20 pb-10 overflow-y-auto">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl w-full bg-[#020617] rounded-2xl p-6 md:p-10 border border-white/10 max-h-[90vh] overflow-y-auto"
      >

        {/* 🔥 HEADER */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {project.title}
          </h2>

          <p className="text-gray-400 max-w-2xl">
            A product-focused solution designed to solve real user problems through intuitive UI and performance-driven frontend engineering.
          </p>
        </div>

        {/* 🔥 IMAGE */}
        <div className="mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-xl border border-white/10"
          />
        </div>

        {/* 🔥 PROBLEM */}
        <div className="mb-8">
          <h3 className="text-white text-xl font-semibold mb-2">
            Problem
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* 🔥 APPROACH */}
        <div className="mb-8">
          <h3 className="text-white text-xl font-semibold mb-2">
            Approach
          </h3>
          <p className="text-gray-400 leading-relaxed">
            I approached this by focusing on usability and clarity. I broke down the user journey, identified friction points, and designed a clean interface that simplifies interaction while maintaining performance and scalability.
          </p>
        </div>

        {/* 🔥 SOLUTION */}
        <div className="mb-8">
          <h3 className="text-white text-xl font-semibold mb-2">
            Solution
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {project.role}
          </p>
        </div>

        {/* 🔥 IMPACT */}
        <div className="mb-10">
          <h3 className="text-white text-xl font-semibold mb-2">
            Impact
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {project.impact}
          </p>
        </div>

        {/* 🔥 CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.link}
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200 transition text-center"
          >
            View Live Project
          </a>

          <button
            onClick={close}
            className="border border-white/20 px-6 py-3 rounded text-white hover:bg-white/10 transition"
          >
            Close
          </button>
        </div>

      </motion.div>
    </div>
  );
}