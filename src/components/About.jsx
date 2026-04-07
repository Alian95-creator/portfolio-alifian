import profile from "../assets/profile.png";
import CustomIcons from "./CustomIcons";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] px-6">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-gray-400">Alifian</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            I am a passionate Frontend Developer focused on building modern,
            responsive, and user-friendly interfaces using React and Tailwind.
          </p>

          {/* ICONS */}
          <CustomIcons />
        </div>

        {/* RIGHT (IMAGE) */}
        <div className="relative flex justify-center items-center">

          {/* GLOW HALUS */}
          <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          {/* WRAPPER FOTO */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">

            {/* IMAGE */}
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />

            {/* GRADIENT PUTIH DI PINGGIR */}
            <div className="absolute inset-0 rounded-full pointer-events-none
              bg-[radial-gradient(circle,transparent_60%,rgba(255,255,255,0.3)_100%)]">
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;