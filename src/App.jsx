import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className="scroll-smooth bg-[#020617] text-white"
    >
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="relative z-10"
      style={{
        backgroundPosition: `${pos.x * 0.02}px ${pos.y * 0.02}px`
      }}
    >
      <Navbar />

      <main>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
      </div>
    </motion.div>
  );
}

export default App;