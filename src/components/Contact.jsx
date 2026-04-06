export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://wa.me/886902400703", "_blank");
  };

  return (
    <section id="contact" className="p-10 text-center">
      <h2 className="text-3xl mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input placeholder="Name" className="w-full p-2 bg-[#1a1a1a]" />
        <input placeholder="Email" className="w-full p-2 bg-[#1a1a1a]" />
        <textarea placeholder="Message" className="w-full p-2 bg-[#1a1a1a]" />

        <button className="bg-[#8b7d7b] text-black px-6 py-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
}