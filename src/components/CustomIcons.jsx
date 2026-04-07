import React from "react";

const icons = [
  "/icon/html.svg",
  "/icon/css.svg",
  "/icon/javascript.svg",
  "/icon/react.svg",
  "/icon/nodejs.svg",
  "/icon/tailwind.svg",
];

export default function CustomIcons() {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {icons.map((icon, idx) => (
        <img
          key={idx}
          src={icon}
          alt="tech icon"
          className="w-12 h-12 sm:w-10 sm:h-10 cursor-pointer transform transition-transform duration-300 hover:scale-125"
        />
      ))}
    </div>
  );
}