import { db } from "../firebase";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    comment: "",
    rating: 5,
  });

  const [editingId, setEditingId] = useState(null);

  // 🔥 LOAD
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews"));

    if (saved && saved.length > 0) {
      setReviews(saved);
    }
  }, []);

  // 🔥 SAVE
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  // 🔥 SUBMIT / UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment) return;

    if (editingId) {
      // UPDATE
      const updated = reviews.map((r) =>
        r.id === editingId
          ? { ...r, ...form, rating: Number(form.rating) }
          : r
      );
      setReviews(updated);
      setEditingId(null);
    } else {
      // CREATE
      const newReview = {
        ...form,
        rating: Number(form.rating),
        id: Date.now(),
        date: new Date().toLocaleString(),
      };
      setReviews([newReview, ...reviews]);
    }

    setForm({ name: "", comment: "", rating: 5 });
  };

  // 🔥 DELETE
  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  // 🔥 EDIT
  const handleEdit = (review) => {
    setForm({
      name: review.name,
      comment: review.comment,
      rating: review.rating,
    });
    setEditingId(review.id);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-16">
      <h2 className="text-4xl font-bold mb-10 text-white">
        Reviews
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#0f172a] p-6 rounded-xl space-y-4 border border-white/10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded bg-[#020617] text-white"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <textarea
            placeholder="Write your review..."
            className="w-full p-3 rounded bg-[#020617] text-white"
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />

          <select
            className="w-full p-3 rounded bg-[#020617] text-white"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
          >
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
          </select>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2 rounded font-medium w-full"
          >
            {editingId ? "Update Review" : "Submit Review"}
          </motion.button>
        </motion.form>

        {/* REVIEW LIST */}
        <div className="space-y-4">

          {reviews.length === 0 && (
            <p className="text-gray-400">No reviews yet 👀</p>
          )}

          <AnimatePresence>
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                className="bg-[#0f172a] p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-center gap-3">

                  {/* 🔥 AVATAR */}
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${r.name}`}
                    alt="avatar"
                    className="w-10 h-10 rounded-full bg-white"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-white">{r.name}</h4>
                      <span className="text-xs text-gray-500">{r.date}</span>
                    </div>

                    <p className="text-gray-400 mt-1">{r.comment}</p>

                    <p className="text-yellow-400 mt-1">
                      {"⭐".repeat(r.rating)}
                    </p>
                  </div>
                </div>

                {/* 🔥 ACTION BUTTONS */}
                <div className="flex gap-4 mt-3 text-sm">
                  <button
                    onClick={() => handleEdit(r)}
                    className="text-blue-400 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(r.id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}