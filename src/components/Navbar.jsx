import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Reviews", href: "#contact" },
  ];

  // 🔥 Detect scroll navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = menuItems.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((sec, i) => {
        if (!sec) return;
        const top = sec.offsetTop - 100;
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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-white font-bold text-lg cursor-pointer">
          Alifian
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`transition relative ${
                active === item.href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}

              {/* underline active */}
              {active === item.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"
                />
              )}
            </a>
          ))}
        </div>

        {/* HAMBURGER */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={25} /> : <HiMenu size={25} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 w-2/3 h-full bg-[#020617] flex flex-col items-start pt-24 pl-8 space-y-6 text-xl z-40"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.4 }}
          >
            {menuItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`${
                  active === item.href
                    ? "text-white"
                    : "text-gray-400"
                }`}
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