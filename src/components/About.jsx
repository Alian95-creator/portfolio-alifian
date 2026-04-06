import profileImg from "../assets/profile.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-[#020617]"
    >
      
      {/* LEFT - IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 md:mb-0"
      >
        <img
          src={profileImg}
          alt="Alifian"
          className="w-[280px] md:w-[350px] rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.5)] object-cover"
        />
      </motion.div>

      {/* RIGHT - TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Alifian
          </span>
        </h1>

        <p className="text-gray-400 mt-4 text-lg leading-relaxed">
          I am a Frontend Developer with experience in building modern web applications
          using React, Tailwind CSS, and JavaScript. I focus on creating clean UI,
          smooth user experience, and responsive design.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="bg-purple-600 px-4 py-1 rounded-full text-sm text-white">
            React
          </span>
          <span className="bg-blue-600 px-4 py-1 rounded-full text-sm text-white">
            Tailwind
          </span>
          <span className="bg-green-600 px-4 py-1 rounded-full text-sm text-white">
            Node.js
          </span>
        </div>
      </motion.div>

    </section>
  );
};

export default About;