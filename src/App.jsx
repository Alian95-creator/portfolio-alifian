import React from "react";
import { motion } from "framer-motion"; // import framer-motion untuk animasi
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// Optional: nanti bisa ditambahkan Profile dan Footer
// import Profile from "./components/Profile";
// import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}        // kondisi awal: transparan
      animate={{ opacity: 1 }}        // kondisi target: muncul
      exit={{ opacity: 0 }}           // saat keluar halaman (opsional)
      transition={{ duration: 0.8 }}  // durasi animasi
      className="font-sans text-gray-900"
    >
      <Navbar />
      {/* Kalau mau, bisa tambahkan Profile di sini */}
      {/* <Profile /> */}
      <About />
      <Projects />
      <Contact />
      {/* Footer juga bisa ditambahkan di sini */}
      {/* <Footer /> */}
    </motion.div>
  );
}

export default App;