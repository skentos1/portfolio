"use client";

import React, { useState } from "react";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("All fields are required.");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage(data.error || "Error sending message.");
      }
    } catch (error) {
      setStatusMessage("Error sending message. Try again.");
    }

    setIsSending(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Get in Touch</h2>

        {statusMessage && (
          <p className={`text-center mb-4 ${statusMessage.includes("Error") ? "text-red-400" : "text-green-400"}`}>
            {statusMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 p-3 rounded-lg bg-gray-700 text-white focus:ring focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 p-3 rounded-lg bg-gray-700 text-white focus:ring focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Message Input */}
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-10 p-3 h-32 rounded-lg bg-gray-700 text-white focus:ring focus:ring-purple-500 outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
