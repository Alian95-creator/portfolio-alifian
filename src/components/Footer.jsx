import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-200 py-12 mt-20 border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center text-center px-6">

        {/* HEADLINE */}
        <h3 className="text-white text-xl font-semibold mb-3">
          Let’s build something meaningful together.
        </h3>

        {/* DESC */}
        <p className="text-gray-400 max-w-xl">
          I’m a frontend developer focused on product thinking, UX, and building
          real-world applications that users actually enjoy.
          <br />
          Currently open to remote opportunities and collaborations.
        </p>

        {/* CTA */}
        <p className="text-gray-500 mt-4 text-sm">
          Feel free to reach out — I’d love to connect.
        </p>

        {/* 🔥 ICON LINKS */}
        <div className="flex gap-8 mt-6 text-gray-400 text-lg">

          <a
            href="mailto:alifiancandra73@gmail.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaEnvelope />
            <span className="text-sm">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/alifian-candra-7259b5190/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaLinkedin />
            <span className="text-sm">LinkedIn</span>
          </a>

          <a
            href="https://github.com/alian95-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaGithub />
            <span className="text-sm">GitHub</span>
          </a>

        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-600 text-xs mt-8">
          © {new Date().getFullYear()} Alifian. Built with product thinking.
        </p>

      </div>
    </footer>
  );
}