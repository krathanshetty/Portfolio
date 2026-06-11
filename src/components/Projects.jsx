import React, { useState, useRef, useEffect } from "react";
import BlackHoleBackground from "./BlackHoleBackground";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "soc-dashboard",
    title: "Real-Time SOC Simulation Dashboard",
    date: "Mar 2026 — Apr 2026",
    tech: ["React", "Flask", "MongoDB", "WebSockets"],
    desc: "Engineered a full-stack SOC simulation platform to detect brute force, port scanning, and malware activity with real-time alert streaming and live event visualization.",
    link: "#",
  },

  {
    id: "cti-dashboard",
    title: "Cyber Threat Intelligence Dashboard",
    date: "May 2025 — Jun 2025",
    tech: ["Flask", "MongoDB", "VirusTotal", "GreyNoise"],
    desc: "Designed a threat intelligence platform for real-time IP analysis and threat enrichment using VirusTotal and GreyNoise integrations.",
    link: "#",
  },

  {
    id: "personal-firewall",
    title: "Personal Firewall",
    date: "Apr 2025",
    tech: ["Python", "Scapy", "Tkinter"],
    desc: "Implemented a desktop firewall for packet monitoring and rule-based traffic filtering with real-time packet analysis and visualization.",
    link: "#",
  },

  {
    id: "gym-management",
    title: "Gym Management Website",
    date: "Dec 2025 — Jan 2026",
    tech: ["React.js", "JavaScript", "CSS"],
    desc: "Developed a responsive web application to manage user interactions and gym activities with reusable components and optimized UI/UX.",
    link: "#",
  },

  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    date: "Nov 2025",
    tech: ["React", "Vite", "TailwindCSS"],
    desc: "Built a modern developer portfolio showcasing projects, certifications, skills, and experience with performance-focused design.",
    link: "#",
  },

  {
    id: "credential-harvesting",
    title: "Credential Harvesting Simulation",
    date: "Jul 2025",
    tech: ["Kali Linux", "SET Toolkit"],
    desc: "Conducted a controlled ethical hacking simulation to demonstrate phishing and credential capture techniques in a safe environment.",
    link: "#",
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveId(null);
      }
    }

    document.addEventListener("pointerdown", onDocClick);

    return () => {
      document.removeEventListener("pointerdown", onDocClick);
    };
  }, []);

  const visibleId = activeId || hoveredId;
  const visibleProject = projects.find((p) => p.id === visibleId);

  return (
    <section
      id="projects"
      className="scroll-mt-24 relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-16"
    >
      <BlackHoleBackground />

      <div
        ref={containerRef}
        className="relative z-20 max-w-7xl w-full px-4 sm:px-6"
      >
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="flex flex-col gap-4 max-h-[60vh] lg:max-h-[70vh] overflow-auto pr-2 hide-scrollbar">
              {projects.map((p) => {
                const isDim =
                  hoveredId && hoveredId !== p.id && !activeId;

                const isActive = activeId === p.id;

                return (
                  <article
                    key={p.id}
                    role="button"
                    tabIndex={0}
                    onMouseEnter={() => setHoveredId(p.id)}
                    onMouseLeave={() =>
                      setHoveredId((id) => (id === p.id ? null : id))
                    }
                    onClick={() =>
                      setActiveId((cur) =>
                        cur === p.id ? null : p.id
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveId((cur) =>
                          cur === p.id ? null : p.id
                        );
                      }

                      if (e.key === "Escape") {
                        setActiveId(null);
                      }
                    }}
                    className={`relative flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200
                    ${
                      isActive
                        ? "scale-[1.02] shadow-2xl z-20"
                        : "shadow-md"
                    }
                    ${isDim ? "opacity-40" : "opacity-100"}
                    hover:opacity-100
                    bg-gradient-to-br from-[#000b28] to-[#000000]
                    hover-lift`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs sm:text-sm text-white font-semibold">
                          {p.date}
                        </div>

                        <div className="text-xs text-white/60">
                          {isActive ? "Open" : "Preview"}
                        </div>
                      </div>

                      <h3 className="text-indigo-300 font-bold text-base sm:text-lg mt-2">
                        {p.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] text-white/80 bg-black/20 px-2 py-1 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="flex-1 min-h-[40vh]">
            <div className="h-full w-full rounded-2xl bg-indigo-400/5 border border-indigo-300/10 p-4 sm:p-6 flex items-center justify-center">
              {!visibleProject && (
                <div className="text-center px-2 sm:px-6">
                  <h3 className="text-xl sm:text-2xl text-indigo-300 font-Orbitron font-semibold mb-3">
                    Welcome to the project space
                  </h3>

                  <p className="text-white/80 max-w-xl text-sm sm:text-base">
                    Hover a project on the left (or tap it) to see details
                    here — tech stack, description, and quick links.
                    This area expands to provide a focused view while
                    other cards dim for clarity.
                  </p>
                </div>
              )}

              {visibleProject && (
                <div className="w-full max-w-3xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-indigo-300 font-semibold">
                        {visibleProject.date}
                      </div>

                      <h3 className="text-white font-bold text-xl sm:text-2xl mt-1">
                        {visibleProject.title}
                      </h3>
                    </div>

                    <a
                      href={visibleProject.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) =>
                        visibleProject.link === "#" &&
                        e.preventDefault()
                      }
                      className="text-indigo-300 hover:text-indigo-400 ml-4 text-2xl"
                      aria-label={`Open ${visibleProject.title}`}
                    >
                      <FaGithub />
                    </a>
                  </div>

                  <p className="mt-4 text-white/90 text-sm leading-relaxed">
                    {visibleProject.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {visibleProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-white/80 bg-black/20 px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 justify-end">
                    <button
                      onClick={() => setActiveId(null)}
                      className="text-xs px-3 py-2 rounded-md border border-white/10 text-white/90 hover:bg-white/5 transition"
                    >
                      Close
                    </button>

                    <a
                      href={visibleProject.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) =>
                        visibleProject.link === "#" &&
                        e.preventDefault()
                      }
                      className="text-xs px-3 py-2 rounded-md bg-indigo-300 text-black font-semibold hover:scale-105 transition"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}