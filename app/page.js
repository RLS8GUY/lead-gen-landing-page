'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen p-6 bg-white text-black flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Find Out What Your Home is Worth
      </h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Whether you're selling or just curious, get a no-pressure home valuation—or book a buyer consultation to plan your next move.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 p-6 bg-gray-100 rounded-xl shadow-md"
      >
        <input
          className="w-full p-3 rounded-md border border-gray-300"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-3 rounded-md border border-gray-300"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full p-3 rounded-md border border-gray-300"
          name="message"
          placeholder="Tell me what you're looking for (buying, selling, or just curious)"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800"
        >
          Get In Touch
        </button>
      </form>

      <div className="mt-10 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4">What Clients Are Saying</h2>
        <blockquote className="bg-gray-100 p-4 rounded-xl shadow-sm mb-4">
          "Chris made the whole process so easy. We got more than we expected for our home and he handled everything like a pro!" – Sarah T.
        </blockquote>
        <blockquote className="bg-gray-100 p-4 rounded-xl shadow-sm mb-4">
          "He kept us sane during a crazy market. Responsive, respectful, and just a great guy all around." – Mark & Jen P.
        </blockquote>
        <blockquote className="bg-gray-100 p-4 rounded-xl shadow-sm">
          "No BS, just results. If you're buying or selling in Arizona, Chris is your guy." – James L.
        </blockquote>
      </div>
    </main>
  );
}
