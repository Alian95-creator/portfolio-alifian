import { useState, useEffect, useRef } from "react";
import profileImg from "../assets/profile.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import CustomIcons from "../components/CustomIcons";

const About = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  // 🔥 UPGRADED POSITIONING
  const messages = [
    "Alifian",
    "Product-minded Frontend Developer",
  ];

  const [msgIndex, setMsgIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const imgRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (text.length < messages[msgIndex].length) {
        timeout = setTimeout(() => {
          setText(messages[msgIndex].slice(0, text.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(messages[msgIndex].slice(0, text.length - 1));
        }, 80);
      } else {
        setTyping(true);
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, typing, msgIndex]);

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

          {/* 🔥 UPGRADED DESCRIPTION */}
          <p
            className="text-gray-400 mt-6 leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)" }}
          >
            I’m a frontend developer who focuses on product thinking and user experience.
            <br /><br />
            Instead of just building interfaces, I try to understand the user problem first —
            what confuses them, what slows them down, and how the experience can feel more intuitive.
            <br /><br />
            I enjoy turning complex ideas into simple, fast, and usable interfaces.
            For me, great UI is not just about visuals — it’s about reducing friction and making interaction feel natural.
          </p>

          {/* 🔥 UX SIGNAL */}
          <p className="text-gray-500 text-sm mt-4">
            I care about how users think, not just how interfaces look.
          </p>

          {/* SOCIAL */}
          <div className="mt-6">
            <p className="text-gray-500 text-sm mb-3">Connect with me</p>

            <div className="flex gap-5 text-2xl text-gray-400">
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
          </div>

          {/* 🔥 CTA IMPROVED */}
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1pPb9eJ1QlU3VEMw3T7s01iMBOKVb2LQw/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 inline-flex items-center gap-2"
            >
              View Resume
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