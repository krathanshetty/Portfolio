import React, { useState } from "react";
import { motion } from "framer-motion";
import StarfieldBackground from "./StarfieldBackground";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "TailwindCSS"],
  },
  {
    title: "Backend",
    skills: ["Flask (Python)"],
  },
  {
    title: "APIs",
    skills: ["RESTful APIs", "VirusTotal", "GreyNoise"],
  },
  {
    title: "Cybersecurity",
    skills: [
      "Threat Analysis",
      "Incident Response",
      "Vulnerability Assessment",
      "Networking Fundamentals",
      "Security Fundamentals",
    ],
  },
  {
    title: "Operations",
    skills: [
      "Inventory Management",
      "Asset Tracking",
      "Field Operations",
      "Operational Reporting",
      "Stakeholder Coordination",
    ],
  },
  {
    title: "Programming",
    skills: ["Python", "Java"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Remote Desktop", "MXToolbox"],
  },
  {
    title: "Operating Systems",
    skills: ["Linux CLI", "Windows OS"],
  },
  {
    title: "Security Tools",
    skills: ["Nmap", "Nessus Essentials", "Wireshark"],
  },
];

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const items = [...skillGroups, ...skillGroups];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#000000] via-[#020304] to-[#010314] py-20"
    >
      <StarfieldBackground />

      <div className="relative z-20 w-full max-w-none">
        <h2 className="text-4xl font-bold text-indigo-300 text-center mb-4">
          Technical Skills
        </h2>

        <p className="text-white/60 text-center max-w-3xl mx-auto mb-12 px-4">
          Technologies, tools, cybersecurity platforms, and operational
          competencies acquired throughout my academic and professional journey.
        </p>

        {/* DESKTOP VERSION - HIDDEN ON MOBILE */}
        <div className="hidden md:block">
          <div className="overflow-hidden w-screen">
            <div className="skills-track">
              {items.map((group, index) => (
                <div
                  key={`${group.title}-${index}`}
                  className="
                    w-[260px]
                    h-[260px]
                    flex-shrink-0
                    bg-black/30
                    backdrop-blur-md
                    border border-indigo-300/10
                    rounded-2xl
                    p-6
                    transition-all
                    duration-300
                    hover:border-indigo-300/40
                    hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]
                  "
                >
                  <h3 className="text-indigo-300 text-xl font-bold mb-5">
                    {group.title}
                  </h3>

                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="
                          text-white/80
                          text-sm
                          hover:text-indigo-300
                          transition-colors
                        "
                      >
                        • {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mt-8">
            Hover over the skills section to pause scrolling
          </p>

          <style>{`
            .skills-track {
              display: flex;
              align-items: stretch;
              gap: 14px;
              width: max-content;
              animation: skillsScroll 45s linear infinite;
            }

            .skills-track:hover {
              animation-play-state: paused;
            }

            @keyframes skillsScroll {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            @media (max-width: 768px) {
              .skills-track {
                gap: 10px;
              }

              .skills-track > div {
                width: 220px !important;
                height: 240px !important;
              }
            }
          `}</style>
        </div>

        {/* MOBILE VERSION - ACCORDION */}
        <div className="md:hidden px-4 max-w-2xl mx-auto">
          <div className="flex flex-col gap-3">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                className="w-full"
                initial={false}
              >
                <motion.button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === group.title ? null : group.title
                    )
                  }
                  className="
                    w-full
                    bg-black/30
                    backdrop-blur-md
                    border border-indigo-300/10
                    rounded-2xl
                    p-4
                    transition-all
                    duration-300
                    active:border-indigo-300/40
                    active:shadow-[0_0_20px_rgba(99,102,241,0.25)]
                    flex
                    items-center
                    justify-between
                  "
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-indigo-300 text-lg font-bold text-left">
                    {group.title}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: expandedCategory === group.title ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-2"
                  >
                    <svg
                      className="w-5 h-5 text-indigo-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height:
                      expandedCategory === group.title ? "auto" : 0,
                    opacity: expandedCategory === group.title ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-black/20 backdrop-blur-md border border-indigo-300/10 border-t-0 rounded-b-2xl p-4">
                    <div className="space-y-3">
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          className="text-white/80 text-sm leading-relaxed"
                        >
                          • {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}