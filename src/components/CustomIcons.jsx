const CustomIcons = () => {
  const icons = [
    "/icons/html.svg",
    "/icons/css.svg",
    "/icons/js.svg",
    "/icons/react.svg",
    "/icons/tailwind.svg",
  ];

  return (
    <div className="flex gap-5 mt-5">
      {icons.map((icon, i) => (
        <img
          key={i}
          src={icon}
          alt="tech"
          className="w-10 h-10 object-contain hover:scale-110 transition duration-300"
        />
      ))}
    </div>
  );
};

export default CustomIcons;