import { useState } from "react";
import profileImg from "../assets/profile.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* LEFT TEXT */}
      <motion.div 
        className="max-w-xl z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
            Alifian
          </span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          I am a passionate Frontend Developer with a strong focus on building modern,
          responsive, and user-friendly web interfaces. I specialize in React,
          Tailwind CSS, and creating smooth user experiences with clean and scalable code.
          <br /><br />
          I enjoy turning ideas into interactive digital products that not only look
          great but also perform efficiently across different devices.
        </p>

        {/* SOCIAL ICON */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/alifian-candra-7259b5190/"
            target="_blank"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Alian95-creator"
            target="_blank"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative mt-6 md:mt-0 z-10 w-[280px] md:w-[320px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profileImg}
          alt="Alifian"
          className="relative w-[280px] md:w-[320px] object-contain z-20 rounded-full mx-auto transition duration-500 cursor-pointer hover:scale-105"
          onClick={() => setOpen(true)}
        />
      </motion.div>

      {/* MODAL ZOOM */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={profileImg}
              className="w-[90%] max-w-2xl object-contain"
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;