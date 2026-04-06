export default function Navbar() {
  return (
    <div className="fixed w-full z-50 bg-black/50 backdrop-blur-md flex justify-between px-8 py-4">
      <h1 className="text-xl font-bold text-[#8b7d7b]">Alifian</h1>
      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}