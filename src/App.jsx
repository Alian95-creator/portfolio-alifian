import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="font-sans text-gray-900 bg-[#020617]"
    >
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;