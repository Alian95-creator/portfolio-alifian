const CustomIcons = () => {
  const base = import.meta.env.BASE_URL;

  const icons = [
    { src: `${base}icons/html.svg`, name: "HTML" },
    { src: `${base}icons/css.svg`, name: "CSS" },
    { src: `${base}icons/javasript.svg`, name: "JavaScript" },
    { src: `${base}icons/react.svg`, name: "React" },
    { src: `${base}icons/tailwind.svg`, name: "Tailwind" },
    { src: `${base}icons/vite.svg`, name: "Vite" },
  ];

  return (
    <div className="flex gap-6 mt-6 flex-wrap">
      {icons.map((icon, i) => (
        <div key={i} className="group relative">
          
          <img
            src={icon.src}
            alt={icon.name}
            className="w-12 h-12 transition duration-300 
                       group-hover:scale-110 
                       group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
          />

          {/* TOOLTIP */}
          <span className="absolute left-1/2 -translate-x-1/2 top-14 
                           opacity-0 group-hover:opacity-100
                           text-xs bg-gray-800 text-white px-2 py-1 rounded
                           transition duration-300 whitespace-nowrap">
            {icon.name}
          </span>

        </div>
      ))}
    </div>
  );
};

export default CustomIcons;