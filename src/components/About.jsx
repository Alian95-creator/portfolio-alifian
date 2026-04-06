import profileImg from "../assets/profile.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-[#020617]"
    >
      {/* LEFT - TEXT */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Alifian
          </span>
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Frontend Developer specializing in modern UI, React, and smooth UX.
        </p>
      </div>

      {/* RIGHT - IMAGE WITH GLOW */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mt-10 md:mt-0 group"
      >
        {/* GLOW BACKGROUND */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] h-[300px] bg-purple-500/30 blur-[120px] rounded-full opacity-70 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* IMAGE */}
        <img
          src={profileImg}
          alt="Alifian"
          className="relative w-[280px] md:w-[320px] object-contain z-10 transition duration-500 group-hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default About;