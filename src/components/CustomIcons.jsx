import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/react.png";
import tailwindIcon from "../assets/icons/tailwind.png";

const CustomIcons = () => {
  const icons = [htmlIcon, cssIcon, jsIcon, reactIcon, tailwindIcon];

  return (
    <div className="flex gap-4 mt-4">
      {icons.map((icon, i) => (
        <img
          key={i}
          src={icon}
          alt="tech"
          className="w-8 h-8 object-contain hover:scale-110 transition"
        />
      ))}
    </div>
  );
};

export default CustomIcons;