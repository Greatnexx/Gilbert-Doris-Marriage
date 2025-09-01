import { useState } from "react";

const RSVPSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with backend integration or email service
    console.log("RSVP Submitted:", form);
    alert("Thank you for your RSVP!");
    setForm({ name: "", email: "", attending: "", guests: "", message: "" });
  };

  return (
    <section className="bg-gray-100 py-20 px-4" id="rsvp">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">RSVP</h2>
        <p className="text-lg text-gray-600 mb-12">
          Let us know if you’ll be joining our special day!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6 animate-fade-in"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <select
            name="attending"
            value={form.attending}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Will you attend?</option>
            <option value="yes">Yes, I’ll be there!</option>
            <option value="no">Sorry, I can’t make it.</option>
          </select>

          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            placeholder="Number of Guests"
            min="0"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Any message for us?"
          rows="4"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="submit"
          className="bg-red-500 hover:bg-pink-600 transition text-white font-semibold py-3 px-8 rounded-lg w-full md:w-auto"
        >
          Submit RSVP
        </button>
      </form>
    </section>
  );
};

export default RSVPSection;
