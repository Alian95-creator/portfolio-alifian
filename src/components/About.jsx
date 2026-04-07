import { useState, useEffect } from "react";
import profileImg from "../assets/profile.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CustomIcons from "../components/CustomIcons";

const About = () => {
  const [open, setOpen] = useState(false);

  // 🔥 Typing Animation
  const [text, setText] = useState("");
  const fullText = "Alifian";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 relative overflow-hidden"
      style={{
        background: "fixed inset-0 bg-black/80 flex items-center justify-center z-50",
      }}
    >
      {/* LEFT TEXT */}
      <motion.div
        className="max-w-xl z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🔥 HERO TEXT */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
            {text}
            <span className="animate-puls">|</span>
          </span>
        </motion.h1>

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

        {/* TECH ICONS */}
        <CustomIcons />
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative mt-10 md:mt-0 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* GLOW */}
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        {/* IMAGE WRAPPER */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">

          <img
            src={profileImg}
            alt="Alifian"
            //className="w-full h-full object-cover cursor-pointer hover:scale-105 transition duration-500"
            onClick={() => setOpen(true)}
          />

          {/* GRADIENT EDGE */}
          <div className="absolute inset-0 rounded-full pointer-events-none
            bg-[radial-gradient(circle,transparent_60%,rgba(255,255,255,0.3)_100%)]">
          </div>
        </div>
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
              className="w-[90%] max-w-2xl object-fill"
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