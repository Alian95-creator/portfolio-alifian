import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // PARALLAX
  const ySmoke1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const ySmoke2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const ySmoke3 = useTransform(scrollY, [0, 1000], [0, 80]);

  // PARTICLES
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const arr = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#020617] text-white min-h-screen">
      
      {/* GRID BACKGROUND */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* SMOKE CINEMATIC */}
      <motion.div
        style={{ y: ySmoke1 }}
        animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="fixed top-[-150px] left-[-150px] w-[450px] h-[450px] bg-purple-400/20 blur-[120px] rounded-full z-0"
      />
      <motion.div
        style={{ y: ySmoke2 }}
        animate={{ x: [0, -60, 0], y: [0, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        className="fixed bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-blue-400/20 blur-[120px] rounded-full z-0"
      />
      <motion.div
        style={{ y: ySmoke3 }}
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 35, repeat: Infinity }}
        className="fixed top-[35%] left-[35%] w-[350px] h-[350px] bg-white/10 blur-[100px] rounded-full z-0"
      />

      {/* PARTICLES */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [p.y, p.y + 20, p.y], x: [p.x, p.x + 5, p.x] }}
          transition={{ duration: 10 + p.speed * 5, repeat: Infinity }}
          className="absolute bg-white/20 rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
          }}
        />
      ))}

      {/* CURSOR GLOW */}
      <motion.div
        animate={{ x: pos.x - 25, y: pos.y - 25 }}
        className="fixed w-20 h-20 bg-white/10 rounded-full pointer-events-none blur-2xl z-50"
      />

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div
          onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
          style={{
            backgroundPosition: `${pos.x * 0.02}px ${pos.y * 0.02}px`,
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
    </div>
  );
}

export default App;