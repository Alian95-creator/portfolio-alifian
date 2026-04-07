import { useState, useEffect } from "react";
import profileImg from "../assets/profile.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import CustomIcons from "../components/CustomIcons";

const About = () => {
  const [open, setOpen] = useState(false);

  const [text, setText] = useState("");
  const fullText = "Alifian";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">

      {/* LEFT */}
      <div className="max-w-xl">
        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          Frontend Developer focused on building modern UI using React & Tailwind.
        </p>

        {/* SOCIAL ICON */}
        <div className="flex gap-5 mt-6 text-2xl text-gray-400">
          <FaLinkedin className="hover:text-white cursor-pointer" />
          <FaGithub className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
        </div>

        <CustomIcons />
      </div>

      {/* RIGHT */}
      <div className="relative flex justify-center items-center">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
        >
          <img
            src={profileImg}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setOpen(true)}
          />

          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_60%,rgba(255,255,255,0.3)_100%)]" />
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setOpen(false)}
          >
            <motion.img src={profileImg} className="w-[90%] max-w-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;