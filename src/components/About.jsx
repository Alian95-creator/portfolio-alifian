import { useState, useEffect, useRef } from "react";
import profileImg from "../assets/profile.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import CustomIcons from "../components/CustomIcons";

const About = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const messages = ["Alifian", "Frontend Developer"];
  const [msgIndex, setMsgIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const imgRef = useRef(null);
  const [scale, setScale] = useState(1);

  // 🔥 typing & backspace effect
  useEffect(() => {
    let timeout;
    if (typing) {
      if (text.length < messages[msgIndex].length) {
        timeout = setTimeout(() => {
          setText(messages[msgIndex].slice(0, text.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(messages[msgIndex].slice(0, text.length - 1));
        }, 100);
      } else {
        setTyping(true);
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, typing, msgIndex]);

  // 🔥 proximity detection
  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const imgCenterX = rect.left + rect.width / 2;
    const imgCenterY = rect.top + rect.height / 2;
    const distanceX = e.clientX - imgCenterX;
    const distanceY = e.clientY - imgCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const maxDistance = 200;
    const minScale = 1;
    const maxScale = 1.2;

    const newScale =
      distance < maxDistance
        ? maxScale - (distance / maxDistance) * (maxScale - minScale)
        : minScale;

    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-24 min-h-screen flex items-center justify-center px-6 md:px-16 py-20 md:py-32"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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

          {/* SOCIAL */}
          <div className="flex gap-5 mt-6 text-2xl text-gray-400">
            <a href="https://www.linkedin.com/in/alifian-candra-7259b5190/" target="_blank">
              <FaLinkedin className="hover:text-white hover:scale-125 hover:-translate-y-1 transition duration-300 cursor-pointer" />
            </a>
            <a href="https://github.com/Alian95-creator" target="_blank">
              <FaGithub className="hover:text-white hover:scale-125 hover:-translate-y-1 transition duration-300 cursor-pointer" />
            </a>
            <a href="https://x.com/Alian95_creator">
              <FaTwitter className="hover:text-white hover:scale-125 hover:-translate-y-1 transition duration-300 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/convertweb88/">
              <FaInstagram className="hover:text-white hover:scale-125 hover:-translate-y-1 transition duration-300 cursor-pointer" />
            </a>
          </div>

          {/* DOWNLOAD CV */}
          <div className="mt-6">
            <a
            href="https://drive.google.com/file/d/1pPb9eJ1QlU3VEMw3T7s01iMBOKVb2LQw/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 inline-flex items-center gap-2"
            >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
          />
          </svg>
          Download CV
          </a>
        </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl"></div>

            <motion.div
              ref={imgRef}
              animate={{
                scale: scale,
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                scale: { type: "spring", stiffness: 120, damping: 15 },
                y: { duration: 6, repeat: Infinity },
                rotate: { duration: 6, repeat: Infinity }
              }}
              className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img src={profileImg} />
            </motion.div>
          </div>

          {/* TECH STACK */}
          <h3 className="text-white mt-8 mb-4 text-lg font-semibold">
            Tech Stack
          </h3>

          <div className="flex justify-center">
            <CustomIcons />
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={profileImg}
              className="w-full max-w-lg rounded-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;