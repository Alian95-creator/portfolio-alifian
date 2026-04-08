import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [reviews, setReviews] = useState([
    { name: "John", comment: "Amazing portfolio!", rating: 5 },
    { name: "Sarah", comment: "Very clean UI 🔥", rating: 4 },
  ]);

  const [form, setForm] = useState({
    name: "",
    comment: "",
    rating: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment) return;

    setReviews([form, ...reviews]);
    setForm({ name: "", comment: "", rating: 5 });
  };

  return (
    <section
    id="contact"
    className="py-20 md:py-32 px-6 md:px-16">
      <h2 className="text-4xl font-bold mb-10">Reviews</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#0f172a] p-6 rounded-xl space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded bg-[#020617] outline-none"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <textarea
            placeholder="Write your review..."
            className="w-full p-3 rounded bg-[#020617] outline-none"
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />

          <select
            className="w-full p-3 rounded bg-[#020617]"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
          >
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
          </select>

          <button className="bg-white text-black px-6 py-2 rounded hover:scale-105 transition">
            Submit
          </button>
        </motion.form>

        {/* REVIEW LIST */}
        <div className="space-y-4">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="bg-[#0f172a] p-4 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h4 className="font-bold">{r.name}</h4>
              <p className="text-gray-400">{r.comment}</p>
              <p className="text-yellow-400">{"⭐".repeat(r.rating)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}