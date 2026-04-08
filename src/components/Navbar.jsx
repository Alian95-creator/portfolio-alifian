import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import profilePic from "../assets/profile.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* kiri: salam pembuka/logo */}
        <div className="flex items-center gap-3">
          <h1 className="text-white font-bold text-lg md:text-xl">Wellcome in my website</h1>
        </div>

        {/* Kanan : Desktop Menu */}
        <div className="hidden md:flex gap-3 items-center">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-gray-300 hover:text-white transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-300">
            {open ? <HiX size={25} /> : <HiMenu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed top-0 right-0 w-2/3 h-full bg-[#020617]/95 flex flex-col items-start justify-start pt-20 pl-6 space-y-6 text-2xl text-white z-40"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4 }}
          >
            {menuItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="hover:text-gray-300 transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}