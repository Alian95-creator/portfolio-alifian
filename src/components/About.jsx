import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Hi, I'm <span className="text-gray-300">Alifian</span>
          </h1>

          <p
            className="text-gray-400 mt-6 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
          >
            Hi, I’m Alifian Candra, a Front-End Developer specializing in building modern, scalable web applications using React and Node.js. I’ve developed real-world projects like a mini e-commerce platform with API integration and dynamic features, focusing on performance and user experience.
            <br /><br />
            I’m a self-driven learner who adapts quickly and enjoys solving real problems. I’m now looking to contribute to a professional team and deliver high-quality, production-ready applications.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-5 mt-6 text-2xl text-gray-400">
            <a href="https://www.linkedin.com/in/alifian-candra-7259b5190/" target="_blank">
              <FaLinkedin className="hover:scale-125 hover:text-white transition" />
            </a>
            <a href="https://github.com/Alian95-creator" target="_blank">
              <FaGithub className="hover:scale-125 hover:text-white transition" />
            </a>
            <a href="https://x.com/CryptoSinau" target="_blank">
              <FaTwitter className="hover:scale-125 hover:text-white transition" />
            </a>
            <a href="https://www.instagram.com/convertweb88/" target="_blank">
              <FaInstagram className="hover:scale-125 hover:text-white transition" />
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src={profileImg}
              className="w-64 md:w-80 rounded-full object-cover 
              group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}