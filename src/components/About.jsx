import { useState } from "react";
import profile from "../assets/profile.png";

export default function About() {
  const [zoom, setZoom] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center px-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* FOTO */}
        <div
          onClick={() => setZoom(!zoom)}
          className={`border border-white/20 p-2 rounded-xl cursor-pointer transition duration-500 ${
            zoom ? "scale-110 -rotate-3" : ""
          }`}
        >
          <img src={profile} className="rounded-xl" />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            My name is Alifian, a self-taught frontend developer with one year of experience 
            in building modern web applications. I started learning independently from scratch, 
            focusing on HTML, CSS, and JavaScript, then advancing into React, Node.js, and modern 
            development tools like Vite, Git, and GitHub.
            <br /><br />
            I enjoy creating clean, responsive, and user-friendly interfaces while continuously 
            improving my skills through real-world projects. My goal is to grow as a professional 
            developer and build impactful digital experiences.
          </p>
        </div>

      </div>
    </section>
  );
}