import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import toast from "react-hot-toast";

export function Bookings({ user }) {
  const [bookings, setBookings] = useState([]);
  const [movie, setMovie] = useState("");
  const [seats, setSeats] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch user's bookings
  useEffect(() => {
    if (!user) return;

    const fetchBookings = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, "bookings"),
          where("userId", "==", user.uid)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBookings(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch bookings.");
      }
    };

    fetchBookings();
  }, [user]);

  const handleBooking = async () => {
    if (!movie.trim()) {
      toast.error("Please enter a movie name!");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "bookings"), {
        movie,
        seats: Number(seats),
        userId: user.uid,
        createdAt: new Date(),
      });
      setBookings((prev) => [
        ...prev,
        { id: docRef.id, movie, seats: Number(seats), userId: user.uid },
      ]);
      setMovie("");
      setSeats(1);
      toast.success("Booking successful!");
    } catch (error) {
      console.error(error);
      toast.error("Booking failed. Try again.");
    }
  };

  if (!user)
    return <p className="p-4 text-red-500">Please login to see your bookings.</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      <p>Welcome <strong>{user.email}</strong></p>

      {/* Booking Form */}
      <div className="my-4 p-4 border rounded-md flex flex-col md:flex-row gap-2 items-center">
        <input
          type="text"
          placeholder="Movie name"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          className="border px-2 py-1 rounded w-full md:w-1/2"
        />
        <input
          type="number"
          min={1}
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          className="border px-2 py-1 rounded w-24"
        />
        <button
          onClick={handleBooking}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
        >
          Book
        </button>
      </div>

      {/* Bookings List */}
      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul className="space-y-2 mt-4">
          {bookings.map((b) => (
            <li key={b.id} className="border p-2 rounded flex justify-between">
              <span>{b.movie}</span>
              <span>{b.seats} seat(s)</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
