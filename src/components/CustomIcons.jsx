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