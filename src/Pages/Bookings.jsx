import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import toast from "react-hot-toast";

export function Bookings({ user }) {
  const [bookings, setBookings] = useState([]);
  const [movie, setMovie] = useState("");
  const [selectedSeat, setSelectedSeat] = useState([]);

  // Generate 50 seats (A1–A10, B1–B10, C1–C10, D1–D10, E1–E10)
  const seatRows = ["A", "B", "C", "D", "E"];
  const seats = seatRows.flatMap((row) =>
    Array.from({ length: 10 }, (_, i) => `${row}${i + 1}`)
  );

  useEffect(() => {
    if (!user) return;
    const fetchBookings = async () => {
      const q = query(collection(db, "bookings"), where("userId", "==", user.uid));
      const snap = await getDocs(q);
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setBookings(list);
    };
    fetchBookings();
  }, [user]);

  const saveBooking = async () => {
    if (!movie || selectedSeat.length === 0) {
      toast.error("Movie & seat select kor");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        movie,
        seats: selectedSeat,
        userId: user.uid,
        time: new Date().toISOString(),
      });

      toast.success("Booking done");
      setMovie("");
      setSelectedSeat([]);
    } catch (err) {
      toast.error("Error: " + err.message);
    }
  };

  const toggleSeat = (seat) => {
    setSelectedSeat((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="mx-auto container px-24 py-10">
      <h1 className="text-5xl title text-red-500 font-bold mb-6">Book Your Seat</h1>

      <div className="mb-6">
        <label className="block text-lg mb-2">Movie Name</label>
        <input
          className="border p-2 w-full rounded"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Movie name"
        />
      </div>

      <h2 className="text-xl font-semibold mb-3">Select Seats (50 Total)</h2>

      <div className="grid grid-cols-5 text-black gap-4 mb-8 text-center">
        {seats.map((seat) => {
          const selected = selectedSeat.includes(seat);
          return (
            <button
              key={seat}
              onClick={() => toggleSeat(seat)}
              className={`px-4 py-2 rounded border text-sm font-semibold ${
                selected ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {seat}
            </button>
          );
        })}
      </div>

      <button
        onClick={saveBooking}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg"
      >
        Confirm Booking
      </button>

      <h2 className="text-5xl font-bold mt-10 title text-red-500  mb-4">My Bookings</h2>
      <ul className="space-y-3">
        {bookings.map((b) => (
          <li key={b.id} className="border p-3 rounded bg-gray-100 text-black">
            <strong>{b.movie}</strong> — Seats: {b.seats?.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
