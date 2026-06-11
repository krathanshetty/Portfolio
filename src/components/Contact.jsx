import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import StarfieldBackground from "./StarfieldBackground";

const EMAILJS_SERVICE_ID = "service_4gizsd6";
const EMAILJS_TEMPLATE_ID = "template_laog121";
const EMAILJS_PUBLIC_KEY = "j0TNjYsihi8faJJuj";

export default function ContactMissionControl() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    hp: "",
  });

  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    const errs = {};

    if (!form.name.trim()) errs.name = "Name is required";

    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      errs.email = "Email looks invalid";

    if (!form.message.trim()) errs.message = "Message is required";

    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("sending");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      from_phone: form.phone,
      message: form.message,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          hp: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      });
  }

  const contactCard = {
    email: "shettykrathann@gmail.com",
    phone: "+91 9686895096",
    location: "Mangaluru, India",
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-[#000000] via-[#070016] to-[#070016] text-white overflow-hidden"
    >
      <StarfieldBackground />

      <div className="mx-auto max-w-6xl min-h-screen px-4 sm:px-6 py-8 md:translate-y-20">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="md:col-span-2 flex">
            <div className="w-full rounded-2xl p-6 hover-lift bg-gradient-to-br from-[#071026] to-[#06101a] border border-indigo-900/30 shadow-lg flex flex-col overflow-hidden">
              <h2 className="text-xl font-semibold text-indigo-200 mb-3">
                Send a Message
              </h2>

              <p className="text-sm text-indigo-100/60 mb-4">
                Share your thoughts or feedback
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col gap-3"
                noValidate
              >
                <input
                  name="hp"
                  value={form.hp}
                  onChange={handleChange}
                  placeholder="Leave blank"
                  className="hidden"
                  autoComplete="off"
                />

                <div>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full bg-transparent border rounded-md px-3 py-2 text-sm outline-none placeholder-indigo-200/30 focus:ring-2 focus:ring-indigo-300 ${
                      errors.name
                        ? "border-red-400"
                        : "border-indigo-900/30"
                    }`}
                  />

                  {errors.name && (
                    <div className="text-xs text-red-300 mt-1">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full bg-transparent border rounded-md px-3 py-2 text-sm outline-none placeholder-indigo-200/30 focus:ring-2 focus:ring-indigo-300 ${
                      errors.email
                        ? "border-red-400"
                        : "border-indigo-900/30"
                    }`}
                  />

                  {errors.email && (
                    <div className="text-xs text-red-300 mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  className="w-full bg-transparent border border-indigo-900/30 rounded-md px-3 py-2 text-sm outline-none placeholder-indigo-200/30 focus:ring-2 focus:ring-indigo-300"
                />

                <div className="flex-1">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message or Feedback"
                    rows={6}
                    className={`w-full h-full bg-transparent border rounded-md px-3 py-2 text-sm outline-none placeholder-indigo-200/30 focus:ring-2 focus:ring-indigo-300 ${
                      errors.message
                        ? "border-red-400"
                        : "border-indigo-900/30"
                    }`}
                  />

                  {errors.message && (
                    <div className="text-xs text-red-300 mt-1">
                      {errors.message}
                    </div>
                  )}
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-300/80 to-indigo-400/60 hover:scale-[1.02] transition-transform shadow-md text-black ${
                      status === "sending"
                        ? "opacity-70 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {status === "sending"
                      ? "Sending..."
                      : status === "sent"
                      ? "Message Sent"
                      : "Send Message"}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                        hp: "",
                      });
                      setStatus(null);
                      setErrors({});
                    }}
                    className="text-xs px-3 py-2 rounded-md bg-white/3"
                  >
                    Reset
                  </button>

                  <div className="sm:ml-auto text-sm text-center sm:text-left">
                    {status === "error" && (
                      <span className="text-red-300">
                        Failed to send. Try again.
                      </span>
                    )}

                    {status === "sent" && (
                      <span className="text-green-300">
                        Thanks — I got your message.
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl hover-scale p-6 bg-gradient-to-br from-[#071026] to-[#06101a] border border-indigo-900/30 shadow-lg overflow-hidden">
              <h3 className="text-lg font-semibold text-indigo-200 mb-2">
                Contact
              </h3>

              <div className="text-sm text-indigo-100/60 space-y-3">
                <div>
                  <div className="text-xs font-mono text-indigo-100/60">
                    Email
                  </div>

                  <a
                    href={`mailto:${contactCard.email}`}
                    className="text-sm font-medium text-indigo-100"
                  >
                    {contactCard.email}
                  </a>
                </div>

                <div>
                  <div className="text-xs font-mono text-indigo-100/60">
                    Phone
                  </div>

                  <a
                    href={`tel:${contactCard.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-medium text-indigo-100"
                  >
                    {contactCard.phone}
                  </a>
                </div>

                <div>
                  <div className="text-xs font-mono text-indigo-100/60">
                    Location
                  </div>

                  <div className="text-sm font-medium text-indigo-100">
                    {contactCard.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 hover-scale bg-gradient-to-br from-[#071026] to-[#06101a] border border-indigo-900/30 shadow-lg overflow-hidden">
              <h3 className="text-lg font-semibold text-indigo-200 mb-2">
                Connect
              </h3>

              <p className="text-sm text-indigo-100/60 mb-4">
                Find me on socials — click any icon to open the exact profile.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
                <a
                  href="https://instagram.com/_shetty_krathan_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover-neon justify-center w-10 h-10 rounded-md bg-white/4 hover:bg-white/6"
                >
                  <FaInstagram className="text-indigo-100" />
                </a>

                <a
                  href="https://github.com/krathanshetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover-neon justify-center w-10 h-10 rounded-md bg-white/4 hover:bg-white/6"
                >
                  <FaGithub className="text-indigo-100" />
                </a>

                <a
                  href="https://www.linkedin.com/in/shettykrathan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover-neon justify-center w-10 h-10 rounded-md bg-white/4 hover:bg-white/6"
                >
                  <FaLinkedin className="text-indigo-100" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full blur-3xl bg-gradient-to-r from-indigo-300/20 to-purple-500/10 opacity-40 pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full blur-3xl bg-gradient-to-r from-purple-600/10 to-indigo-300/10 opacity-30 pointer-events-none" />
    </section>
  );
}