export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://wa.me/886902400703", "_blank");
  };

  return (
    <section id="contact" className="p-10 pt-24 text-center">

      <h2 className="text-3xl mb-8 glow-text">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
      >

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 bg-[#1a1a1a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7d7b]"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-[#1a1a1a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7d7b]"
        />

        <textarea
          placeholder="Message"
          rows="4"
          className="w-full p-3 bg-[#1a1a1a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7d7b]"
        />

        <button
          className="bg-[#8b7d7b] text-black px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}