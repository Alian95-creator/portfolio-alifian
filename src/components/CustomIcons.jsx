const CustomIcons = () => {
  const base = import.meta.env.BASE_URL;

  const icons = [
    `${base}icons/html.svg`,
    `${base}icons/css.svg`,
    `${base}icons/javascript.svg`,
    `${base}icons/react.svg`,
    `${base}icons/tailwind.svg`,
    `${base}icons/vite.svg`,
  ];

  return (
    <div className="flex gap-5 mt-5">
      {icons.map((icon, i) => (
        <img
          key={i}
          src={icon}
          alt="tech"
          className="w-10 h-10 hover:scale-110 transition"
        />
      ))}
    </div>
  );
};

export default CustomIcons;