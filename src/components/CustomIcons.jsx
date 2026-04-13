import { motion } from "framer-motion";

const CustomIcons = () => {
  const base = import.meta.env.BASE_URL;

  const icons = [
    { src: `${base}icons/html.svg`, name: "HTML" },
    { src: `${base}icons/css.svg`, name: "CSS" },
    { src: `${base}icons/javascript.svg`, name: "Javascript" },
    { src: `${base}icons/typescript.svg`, name: "typescript" },
    { src: `${base}icons/react.svg`, name: "React" },
    { src: `${base}icons/tailwind.svg`, name: "Tailwind" },
    { src: `${base}icons/nodejs.svg`, name: "nodeJS" },
    { src: `${base}icons/nextjs.svg`, name: "nextJS" },
    { src: `${base}icons/vite.svg`, name: "Vite" },
    { src: `${base}icons/bootstrap.svg`, name: "boostrap" },
    { src: `${base}icons/vercel.svg`, name: "vercel" },
    { src: `${base}icons/github-wordmark.svg`, name: "github for version control" },
    
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex gap-6 mt-6 flex-wrap"
    >
      {icons.map((icon, i) => (
        <motion.div key={i} variants={item} className="group relative">
          <img
            src={icon.src}
            alt={icon.name}
            className="w-12 h-12 transition duration-300 
                       group-hover:scale-110 
                       group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          />

          {/* TOOLTIP */}
          <span className="absolute left-1/2 -translate-x-1/2 top-14 
                           opacity-0 group-hover:opacity-100
                           text-xs bg-gray-800 text-white px-2 py-1 rounded
                           transition duration-300 whitespace-nowrap">
            {icon.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CustomIcons;