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
    <section
      id="about"
      className="scroll-mt-24 min-h-screen flex items-center justify-center px-6 md:px-16 py-20 md:py-32"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl">

        {/* LEFT CONTENT */}
        <div>
          <h1
            className="text-white font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p
            className="text-gray-400 mt-6 leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)" }}
          >
            I am a passionate Frontend Developer with a strong focus on building modern,
            responsive, and user-friendly web interfaces. I specialize in React,
            Tailwind CSS, and creating smooth user experiences with clean and scalable code.
            <br /><br />
            I enjoy turning ideas into interactive digital products that not only look
            great but also perform efficiently across different devices.
          </p>

          {/* SOCIAL ICONS (dipindah dari atas → tetap ada) */}
          <div className="flex gap-5 mt-6 text-2xl text-gray-400">
            <a href="https://www.linkedin.com/in/alifian-candra-7259b5190/" target="_blank">
              <FaLinkedin className="hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
            </a>
            <a href="https://github.com/Alian95-creator" target="_blank">
              <FaGithub className="hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
            </a>
            <a href="#" target="_blank">
              <FaTwitter className="hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
            </a>
            <a href="#" target="_blank">
              <FaInstagram className="hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center">

          {/* FOTO */}
          <div className="relative">
            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl"></div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden"
            >
              <img
                src={profileImg}
                // className="w-full h-full object-cover cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </motion.div>
          </div>

          {/* TECH STACK TITLE */}
          <h3 className="text-white mt-8 mb-4 text-lg font-semibold">
            Tech Stack
          </h3>

          {/* TECH ICONS */}
          <div className="flex justify-center">
            <CustomIcons />
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={profileImg}
              className="w-full max-w-lg rounded-md"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;