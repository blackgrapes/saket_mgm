"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
    tempErrors.name = "Name is required.";
  } else if (formData.name.trim().length < 2) {
    tempErrors.name = "Name must be at least 2 characters.";
  }
    if (!formData.subject.trim()) {
    tempErrors.subject = "subject is required.";
  } else if (formData.subject.trim().length < 3) {
    tempErrors.subject = "subject must be at least 3 characters.";
  }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    else if (formData.message.length < 10)
      tempErrors.message = "Message should be at least 10 characters.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus(`❌ ${data.error || "Something went wrong."}`);
      }
    } catch {
      setLoading(false);
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl ">
        <h1 className="text-2xl font-bold text-center mb-6">Send Us a Message</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${errors.name ? "border-red-500" : ""}`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${errors.email ? "border-red-500" : ""}`}
              placeholder="john.doe@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              autoComplete="off"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${errors.subject ? "border-red-500" : ""}`}
              placeholder="Inquiry about admissions"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>
          <div>
            <label className="block font-medium">Your Message</label>
            <textarea
              name="message"
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 ${errors.message ? "border-red-500" : ""}`}
              rows={5}
              placeholder="Type your message here..."
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && <p className="mt-4 text-center text-green-600">{status}</p>}
      </div>
    </div>
  );
}
