import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db, auth, provider } from "../firebase";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { signInWithPopup, signOut } from "firebase/auth";

export default function Contact() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ comment: "", rating: 5 });
  const [user, setUser] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Auth
  useEffect(() => {
    auth.onAuthStateChanged((u) => setUser(u));
  }, []);

  // Reviews listener
  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("date", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const revs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(revs);
    });
    return () => unsub();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login failed:", err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.comment) return;
    if (!user) return alert("Please login first!");

    setLoading(true);

    try {
      if (editingId) {
        const docRef = doc(db, "reviews", editingId);
        await updateDoc(docRef, {
          comment: form.comment,
          rating: Number(form.rating),
          date: new Date(),
        });
        setEditingId(null);
      } else {
        await addDoc(collection(db, "reviews"), {
          uid: user.uid,
          name: user.displayName,
          comment: form.comment,
          rating: Number(form.rating),
          date: new Date(),
        });
      }
      setForm({ comment: "", rating: 5 });
    } catch (err) {
      console.error("Failed to submit:", err.message);
    }
    setLoading(false);
  };

  const handleEdit = (review) => {
    if (user?.uid !== review.uid) return alert("You can only edit your review!");
    setForm({ comment: review.comment, rating: review.rating });
    setEditingId(review.id);
  };

  const handleDelete = async (review) => {
    if (user?.uid !== review.uid) return alert("You can only delete your review!");
    try {
      await deleteDoc(doc(db, "reviews", review.id));
    } catch (err) {
      console.error("Delete failed:", err.message);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-16">

      {/* 🔥 UPGRADED HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-white">
          What People Say
        </h2>
        <p className="text-gray-500 mt-2">
          Real feedback from users interacting with my projects and portfolio.
        </p>
      </div>

      {/* LOGIN */}
      <div className="mb-6 max-w-md">
        {!user ? (
          <button
            onClick={handleLogin}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign in to leave feedback
          </button>
        ) : (
          <div className="flex items-center gap-4 text-gray-300">
            <span>Hi, {user.displayName}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM (UX IMPROVED LABELING) */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#0f172a] p-6 rounded-xl space-y-4 border border-white/10"
        >
          <h3 className="text-white font-semibold">
            Leave a short feedback
          </h3>

          <textarea
            placeholder="What do you think about my work?"
            className="w-full p-3 rounded bg-[#020617] text-white"
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />

          <select
            className="w-full p-3 rounded bg-[#020617] text-white"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
          >
            <option value="5">Excellent (⭐⭐⭐⭐⭐)</option>
            <option value="4">Great (⭐⭐⭐⭐)</option>
            <option value="3">Good (⭐⭐⭐)</option>
          </select>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!user || loading}
            className="bg-white text-black px-6 py-2 rounded font-medium w-full disabled:opacity-50"
          >
            {editingId ? "Update Feedback" : "Submit Feedback"}
          </motion.button>
        </motion.form>

        {/* REVIEWS LIST (SOCIAL PROOF STYLE) */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto">

          {reviews.length === 0 && (
            <p className="text-gray-400">
              No feedback yet — be the first to leave one 👀
            </p>
          )}

          <AnimatePresence>
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                className="bg-[#0f172a] p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.03 }}
              >

                {/* USER */}
                <div className="flex items-center gap-3">
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${r.name}`}
                    className="w-10 h-10 rounded-full bg-white"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-white">{r.name}</h4>
                      <span className="text-xs text-gray-500">
                        {r.date?.toDate
                          ? r.date.toDate().toLocaleString()
                          : new Date(r.date.seconds * 1000).toLocaleString()}
                      </span>
                    </div>

                    <p className="text-gray-400 mt-1">
                      {r.comment}
                    </p>

                    <p className="text-yellow-400 mt-1">
                      {"⭐".repeat(r.rating)}
                    </p>
                  </div>
                </div>

                {/* ACTION */}
                {user?.uid === r.uid && (
                  <div className="flex gap-4 mt-3 text-sm">
                    <button
                      onClick={() => handleEdit(r)}
                      className="text-blue-400 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(r)}
                      className="text-red-400 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                )}

              </motion.div>
            ))}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}