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
      className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-inherit relative"
    >
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-start md:items-center gap-6">
        {/* KIRI: Text */}
        <div className="flex-1 max-w-lg relative z-10">
          <h1
            className="text-white font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-gray-400 mt-6 leading-relaxed"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.25rem)" }}
          >
            I am a passionate Frontend Developer with a strong focus on building modern,
            responsive, and user-friendly web interfaces. I specialize in React,
            Tailwind CSS, and creating smooth user experiences with clean and scalable code.
            <br /><br />
            I enjoy turning ideas into interactive digital products that not only look
            great but also perform efficiently across different devices.
          </p>

          {/* SOCIAL ICON */}
       <div className="flex gap-4 mt-4 text-xl text-gray-400">
         <a
        href="https://www.linkedin.com/in/alifian-candra-7259b5190/"
        target="_blank"
        rel="noopener noreferrer"
        >
           <FaLinkedin className="hover:text-white cursor-pointer" />
         </a>
         <a
        href="https://github.com/Alian95-creator"
        target="_blank"
        rel="noopener noreferrer"
        >
           <FaGithub className="hover:text-white cursor-pointer" />
         </a>
         <a
        href="https://x.com/CryptoSinau"
        target="_blank"
        rel="noopener noreferrer"
        >
           <FaTwitter className="hover:text-white cursor-pointer" />
         </a>
         <a
        href="https://www.instagram.com/convertweb88/"
        target="_blank"
        rel="noopener noreferrer"
        >
           <FaInstagram className="hover:text-white cursor-pointer" />
         </a>
       </div>

          <CustomIcons />
        </div>

        {/* KANAN: Foto */}
        <div className="flex-1 relative flex justify-end mt-6 md:mt-0">
          <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-white/10 rounded-full blur-3xl right-0"></div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0"
          >
            <img
            src={profileImg}
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          />

          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_60%,rgba(255,255,255,0.3)_100%)]" />
        </motion.div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 md:p-0"
            onClick={() => setOpen(false)}
          >
            <motion.img src={profileImg} className="w-full max-w-lg rounded-md" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;