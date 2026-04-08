import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Reviews", href: "#contact" },
  ];

  // 🔥 scroll detection + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = menuItems.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((sec, i) => {
        if (!sec) return;
        const top = sec.offsetTop - 120;
        const bottom = top + sec.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(menuItems[i].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* 🔥 LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-white font-bold text-lg cursor-pointer tracking-wide"
        >
          Alifian
        </motion.h1>

        {/* 🔥 DESKTOP MENU */}
        <div className="hidden md:flex gap-8 relative">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`relative transition duration-300 ${
                active === item.href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {/* hover text lift */}
              <motion.span whileHover={{ y: -2 }}>
                {item.name}
              </motion.span>

              {/* 🔥 ACTIVE UNDERLINE (SMOOTH) */}
              {active === item.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* 🔥 HAMBURGER */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)}>
            <motion.div
              key={open ? "close" : "menu"}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {open ? <HiX size={26} /> : <HiMenu size={26} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* menu panel */}
            <motion.div
              className="fixed top-0 right-0 w-2/3 h-full bg-[#020617] flex flex-col items-start pt-28 pl-8 space-y-8 text-xl z-40 border-l border-white/10"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {menuItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  whileHover={{ x: 10 }}
                  className={`${
                    active === item.href
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}