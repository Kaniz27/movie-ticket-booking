import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const phone = "+91829431275";

    const text =
      `New Inquiry:\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Subject: ${form.subject}\n` +
      `Message: ${form.message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0b0e17] text-white px-6 py-12">
      
      {/* CENTER CONTAINER */}
      <div className="container mx-auto px-24">

        <h1 className="text-5xl title font-bold text-center">
          Contact <span className="text-red-600 title">Us</span>
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Have questions about movie bookings or special events? Our team is here to help you!
        </p>

        {/* MAIN FLEX */}
        <div className="mt-10 flex flex-col lg:flex-row gap-8 justify-center">

          {/* LEFT BOX – FORM */}
          <div className="relative bg-[#111827] w-full lg:w-[45%] rounded-xl p-8 shadow-xl shadow-red-600/40">
            <div className="absolute -top-3 left-5 bg-red-600 text-xs px-4 py-1 rounded-full">
              🎫 BOOKING SUPPORT
            </div>

            <h3 className="text-xl font-semibold mb-5">Send us a Message</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Name */}
              <div>
                <label className="text-gray-300">Full Name *</label>
                <input
                  name="name"
                  onChange={handleChange}
                  className="w-full mt-1 bg-[#1f273a] text-white p-3 rounded-lg outline-none"
                  type="text"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-300">Email Address *</label>
                <input
                  name="email"
                  onChange={handleChange}
                  className="w-full mt-1 bg-[#1f273a] text-white p-3 rounded-lg outline-none"
                  type="email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-gray-300">Phone Number *</label>
                <input
                  name="phone"
                  onChange={handleChange}
                  className="w-full mt-1 bg-[#1f273a] text-white p-3 rounded-lg outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-gray-300">Subject *</label>
                <select
                  name="subject"
                  onChange={handleChange}
                  className="w-full mt-1 bg-[#1f273a] text-white p-3 rounded-lg outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="Ticket Booking">Ticket Booking</option>
                  <option value="Show Time">Show Time</option>
                  <option value="Event Inquiry">Event Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-gray-300">Message *</label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  className="w-full mt-1 bg-[#1f273a] text-white p-3 rounded-lg outline-none h-24"
                ></textarea>
              </div>
            </div>

            <button
              onClick={sendToWhatsApp}
              className="w-full bg-red-600 hover:bg-red-700 mt-5 p-3 rounded-full text-lg font-medium"
            >
              Send via WhatsApp 🚀
            </button>
          </div>

          {/* RIGHT BOX – INFO */}
          <div className="relative bg-[#111827] w-full lg:w-[45%] rounded-xl p-8 shadow-xl shadow-red-600/40 h-fit">
            <div className="absolute -top-3 left-5 bg-red-600 text-xs px-4 py-1 rounded-full">
              🍿 CINEMA INFO
            </div>

            <h3 className="text-xl font-semibold mb-5">Contact Information</h3>

            <p className="my-2">
              <span className="font-semibold">📞 Booking Hotline:</span> +91 569863638
            </p>

            <p className="my-2">
              <span className="font-semibold">📧 Email:</span> bookings@cineplex.com
            </p>

            <p className="my-2">
              <span className="font-semibold">📍 Main Theater:</span> 123 Cinema Street, STAR Cineplex,Dkaka 
            </p>

            <div className="mt-5 p-4 bg-[#1e1e1e] border-l-4 border-orange-400 rounded-md">
              <h4 className="font-semibold">⚠ Urgent Show-Related Issues</h4>
              <p className="text-gray-300 text-sm">HOTLINE: +91 8294341275</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
