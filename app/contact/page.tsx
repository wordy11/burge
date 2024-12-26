"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    // EmailJS service
    emailjs
      .send(
        "service_nz51qzt", // Replace with your service ID
        "template_lqgx7la", // Replace with your template ID
        formData as Record<string, unknown>, // Typecasting here
        "6u2hLPABowMp5jCrE" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setStatus("Success! Your message has been sent.");
          setFormData({ name: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          console.error("Email sending error:", error);
          setStatus("Sorry, there was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <div className="w-full py-16 bg-dark-gray-blue">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-white">Contact Us</h2>
        <p className="text-lg sm:text-xl text-white mb-12">
          We would love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <div className="bg-dark-gray-blue p-8 rounded-lg shadow-xl mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-3 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <div className={`mt-4 p-4 ${status.includes("error") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"} rounded`}>
              {status}
            </div>
          )}
        </div>

        {/* Contact Information */}
      </div>
    </div>
  );
};

export default ContactPage;
