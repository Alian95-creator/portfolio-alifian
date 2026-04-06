export default function Navbar() {
  return (
    <div className="fixed w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10 px-10 py-4 flex justify-between">
      <h1 className="text-xl font-bold glow-text">Alifian</h1>

      <div className="space-x-8 text-sm">
        <a href="#about" className="hover:text-[#8b7d7b] transition">About</a>
        <a href="#projects" className="hover:text-[#8b7d7b] transition">Projects</a>
        <a href="#contact" className="hover:text-[#8b7d7b] transition">Contact</a>
      </div>
    </div>
  );
}