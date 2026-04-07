import React from "react";
import htmlIcon from "../assets/icon/html.svg";
import cssIcon from "../assets/icon/css.svg";
import jsIcon from "../assets/icon/javascript.svg";
import reactIcon from "../assets/icon/react.svg";
import nodeIcon from "../assets/icon/nodejs.svg";
import tailwindIcon from "../assets/icon/tailwind.svg";

const icons = [htmlIcon, cssIcon, jsIcon, reactIcon, nodeIcon, tailwindIcon];

export default function CustomIcons() {
  return (
    <div className="flex gap-4 mt-4">
      {icons.map((icon, idx) => (
        <img
          key={idx}
          src={icon}
          alt="tech icon"
          className="w-8 h-8 cursor-pointer transform transition-transform duration-300 hover:scale-125"
        />
      ))}
    </div>
  );
}