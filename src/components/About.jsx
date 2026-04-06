import { useState } from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

export default function About() {
  const [zoom, setZoom] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center px-10 pt-24">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* FOTO */}
    <motion.div
      whileHover={{ scale: 1.08, rotate: -3 }}
      className="border border-white/10 p-2 rounded-2xl glow-card"
    >
      <img src="/profile.png" className="rounded-xl" />
    </motion.div>

    {/* TEXT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-4 glow-text">
        Hi, I'm Alifian 👋
      </h2>

      <p className="text-gray-400 leading-relaxed">
        A self-taught frontend developer with one year of experience building modern web applications.
        I started from scratch, learning HTML, CSS, and JavaScript independently, then advancing into
        React, Node.js, and modern tools like Vite, Git, and GitHub.

        <br /><br />

        I focus on creating clean, responsive, and user-friendly interfaces, continuously improving
        my skills through real-world projects.
      </p>
    </motion.div>

  </div>
</section>
  );
}