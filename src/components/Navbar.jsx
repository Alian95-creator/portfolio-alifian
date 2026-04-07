import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl cursor-pointer">Alian95-creator</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
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
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 bg-[#020617]/95 flex flex-col items-center justify-center space-y-6 text-2xl text-white z-40"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
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