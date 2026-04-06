export default function ProjectModal({ project, close }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div className="bg-[#1a1a1a] p-6 rounded-xl max-w-md">
        <h2 className="text-xl mb-3">{project.name}</h2>
        <p className="text-gray-400 mb-4">{project.desc}</p>

        <a href={project.link} target="_blank" className="text-[#8b7d7b] underline">
          Visit Project
        </a>

        <button onClick={close} className="block mt-4 text-red-400">
          Close
        </button>
      </div>
    </div>
  );
}