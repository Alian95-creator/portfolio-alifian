import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className="bg-[#020617] text-white"
    >
      <Navbar />

      <main>
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;