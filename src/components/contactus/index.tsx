"use client";
import React, { useState } from 'react';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your form submission logic here (e.g., send data to an API)
        console.log("Email:", email);
        console.log("Message:", message);
    };

    return (
        <div className="max-w-lg mx-auto">
            <div className="text-center mb-4 text-gray-900">
                CONTACT US
            </div>
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Drop Us a Line
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-2 transition"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-medium text-gray-700">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-2 transition"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white uppercase font-semibold py-3 px-4 rounded hover:bg-blue-700 transition"
                >
                    Send Now
                </button>
            </form>
        </div>
    );
}
