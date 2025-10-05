"use client";

import { useState, useEffect } from "react";

export default function CounsellorBooking() {
    // Sample counsellors with free slots
    const initialCounsellors = [
        {
            id: 1,
            name: "Dr. Sharma",
            slots: ["2025-09-15 10:00", "2025-09-15 14:00", "2025-09-16 11:00"],
        },
        {
            id: 2,
            name: "Dr. Iyer",
            slots: ["2025-09-15 09:30", "2025-09-16 15:00", "2025-09-17 10:30"],
        },
        {
            id: 3,
            name: "Dr. Kapoor",
            slots: ["2025-09-18 12:00", "2025-09-19 16:00"],
        },
    ];

    const [name, setName] = useState("");
    const [selectedCounsellor, setSelectedCounsellor] = useState("");
    const [selectedSlot, setSelectedSlot] = useState("");
    const [bookings, setBookings] = useState([]);
    const [counsellors, setCounsellors] = useState(initialCounsellors);

    // Load saved bookings & counsellors from localStorage
    useEffect(() => {
        const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        const savedCounsellors =
            JSON.parse(localStorage.getItem("counsellors")) || initialCounsellors;

        setBookings(savedBookings);
        setCounsellors(savedCounsellors);
    }, []);

    // Save bookings & counsellors whenever they change
    useEffect(() => {
        localStorage.setItem("bookings", JSON.stringify(bookings));
        localStorage.setItem("counsellors", JSON.stringify(counsellors));
    }, [bookings, counsellors]);

    const handleBooking = (e) => {
        e.preventDefault();
        if (!name || !selectedCounsellor || !selectedSlot) {
            alert("Please fill all fields!");
            return;
        }

        const newBooking = {
            id: Date.now(),
            user: name,
            counsellor: selectedCounsellor,
            slot: selectedSlot,
        };

        setBookings([...bookings, newBooking]);

        // Remove the booked slot from counsellor availability
        setCounsellors(
            counsellors.map((c) =>
                c.name === selectedCounsellor
                    ? { ...c, slots: c.slots.filter((s) => s !== selectedSlot) }
                    : c
            )
        );

        // Reset form
        setName("");
        setSelectedCounsellor("");
        setSelectedSlot("");
    };

    const handleDelete = (id, counsellor, slot) => {
        setBookings(bookings.filter((b) => b.id !== id));

        // Return the slot back to counsellor's availability
        setCounsellors(
            counsellors.map((c) =>
                c.name === counsellor ? { ...c, slots: [...c.slots, slot] } : c
            )
        );
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#E5F4F2]">
            <h1 className="text-2xl font-bold mb-4">ManasCare Counsellor Booking</h1>

            {/* Booking Form */}
            <form
                onSubmit={handleBooking}
                className="bg-white shadow-md rounded-xl p-6 w-full max-w-md"
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />

                {/* Counsellor Dropdown */}
                <select
                    value={selectedCounsellor}
                    onChange={(e) => {
                        setSelectedCounsellor(e.target.value);
                        setSelectedSlot("");
                    }}
                    className="w-full p-2 mb-3 border rounded"
                >
                    <option value="">Select Counsellor</option>
                    {counsellors.map((c) => (
                        <option key={c.id} value={c.name}>
                            {c.name}
                        </option>
                    ))}
                </select>

                {/* Slots Dropdown */}
                <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                    disabled={!selectedCounsellor}
                >
                    <option value="">Select Slot</option>
                    {selectedCounsellor &&
                        counsellors
                            .find((c) => c.name === selectedCounsellor)
                            ?.slots.map((slot, i) => (
                            <option key={i} value={slot}>
                                {slot}
                            </option>
                        ))}
                </select>

                <button
                    type="submit"
                    className="w-full bg-[#009379] text-white py-2 rounded hover:bg-teal-700 transition"
                >
                    Book Session
                </button>
            </form>

            {/* Show Bookings */}
            <div className="mt-6 w-full max-w-md">
                <h2 className="text-lg font-semibold mb-2">Your Bookings</h2>
                {bookings.length === 0 ? (
                    <p className="text-gray-600">No bookings yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {bookings.map((b) => (
                            <li
                                key={b.id}
                                className="flex justify-between items-center bg-white p-3 rounded shadow"
                            >
                                <div>
                                    <p className="font-medium">{b.user}</p>
                                    <p className="text-sm text-gray-500">
                                        {b.counsellor} – {b.slot}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleDelete(b.id, b.counsellor, b.slot)}
                                    className="text-red-500 hover:underline"
                                >
                                    Cancel
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
