import React from "react";
import { motion } from "framer-motion";
import resumePDF from "../Resume.pdf";
import StarBackground from "./StarBackground";

export default function Resume() {
  return (
    <section
      id="resume"
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-white
        bg-gradient-to-b
        from-black
        via-[#0b0f1e]
        to-[#02040a]
        overflow-hidden
        px-4
        py-16
      "
    >
      <StarBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative
          w-[95%]
          sm:w-[90%]
          md:w-[85%]
          max-w-3xl
          bg-white/5
          backdrop-blur-xl
          border
          border-indigo-400/20
          rounded-xl
          p-4
          sm:p-6
          hover-neon
          animate-float-slow
          shadow-[0_0_35px_rgba(99,102,241,0.25)]
        "
      >
        <div className="relative text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-indigo-200 mb-4">
            Resume Preview
          </h3>

          <div
            className="
              w-full
              h-56
              sm:h-72
              md:h-80
              bg-black/40
              border
              border-indigo-300/20
              rounded-lg
              overflow-hidden
              shadow-inner
              custom-pdf-container
              hide-scrollbar
            "
          >
            <iframe
              src={resumePDF + "#toolbar=0&navpanes=0&scrollbar=0"}
              title="Resume Preview"
              className="w-full h-full hide-scrollbar"
            />
          </div>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
              mt-6
            "
          >
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6
                py-3
                bg-indigo-500
                hover:bg-indigo-600
                text-white
                font-semibold
                rounded-lg
                shadow-lg
                hover:shadow-indigo-500/40
                transition
                text-center
              "
            >
              Open Resume
            </a>

            <a
              href={resumePDF}
              download="Resume.pdf"
              className="
                px-6
                py-3
                bg-white/10
                hover:bg-white/20
                text-indigo-300
                font-semibold
                border
                border-indigo-300/40
                rounded-lg
                shadow-lg
                hover:shadow-indigo-400/40
                transition
                text-center
              "
            >
              Download PDF
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}