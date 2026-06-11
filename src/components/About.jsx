import React from "react";
import { motion } from "framer-motion";
import StarfieldBackground from "./StarfieldBackground";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiGit,
  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
  SiCyberdefenders,
} from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";


const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-indigo-300" /> },
  { name: "CSS", icon: <SiCss3 className="text-indigo-300" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-indigo-300" /> },
  { name: "React", icon: <SiReact className="text-indigo-300" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-indigo-300" /> },
  { name: "Python", icon: <SiPython className="text-indigo-300" /> },
  { name: "Git", icon: <SiGit className="text-indigo-300" /> },
  { name: "C", icon: <SiC className="text-indigo-300" /> },
  { name: "C++", icon: <SiCplusplus className="text-indigo-300" /> },
  {
    name: "CyberSecurity",
    icon: <SiCyberdefenders className="text-indigo-300" />,
  },
];

const timelineItems = [
  {
    year: "Jun 2026 - Present",
    logo: "/instaworklogo.png",
    title: "Inter-State Field Officer (IFO)",
    company: "Instawork",
    desc: "Managing interstate field operations, inventory audits, asset tracking, and operational coordination."  },

  {
    year: "Nov 2025 - Jan 2026",
    logo: "/tenlogo.jpg",
    title: "Frontend Developer Intern",
    company: "TEN",
    desc: "Built responsive web applications and reusable UI components using React.js and TailwindCSS."  },

  {
    year: "May 2025 - Jun 2025",
    logo: "/elevatelogo.jpg",
    title: "Cyber Security Intern",
    company: "Elevate Labs",
    desc: "Built a Flask-based Cyber Threat Intelligence Dashboard using VirusTotal and GreyNoise APIs."  },

  {
    year: "Aug 2023 - May 2026",
    logo: "/nittelogo.jpg",
    title: "Bachelor of Computer Applications (Cybersecurity)",
    company: "Nitte Institute of Professional Education",
    desc: "Earned a BCA in Cybersecurity with expertise in networking, security, programming, and web development."  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative min-h-screen w-full px-4 py-20 lg:py-28 flex items-center justify-center text-indigo-300 bg-gradient-to-b from-[#010314] via-[#020304] to-[#000000]"
    >
      <StarfieldBackground />

      <div className="font-orbitron w-full">
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-12 md:translate-y-14">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative w-full max-w-lg mx-auto md:mx-0 animate-float-slow"
              >
                <div
                  className="relative bg-black/30 backdrop-blur-md
                                border border-indigo-300/10 rounded-2xl
                                p-6 shadow-xl overflow-hidden"
                >
                  <div className="mb-4">
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-white font-bold text-xl tracking-wider"
                    >
                      Krathan N Shetty
                    </motion.div>

                    <div className="text-indigo-300 text-sm mt-1 tracking-wider">
                      Security Analyst • Web Developer
                    </div>
                  </div>

                  <div className="text-white/70 text-xs tracking-widest leading-relaxed">
                    Developing my skills in security analysis and web
                    application development. I’ve built a few hands-on projects
                    in web development and security tooling, and I’m working
                    toward becoming a Web Developer or a Security Analyst.
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {skills.map((s) => (
                      <motion.span
                        key={s.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.28 }}
                        className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-black/20 border border-indigo-300/10 shadow-sm hover:bg-black/30 hover:border-indigo-300/20 hover:scale-105 transition"
                      >
                        {s.icon}
                        <span className="text-white/80">{s.name}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl
                                border border-indigo-300/5 blur-sm"
                />
                <motion.div
            className="grid grid-cols-2 gap-4 items-center justify-center translate-y-14 w-full max-w-md mx-auto px-4 md:px-0"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
          >
            <ScrollLink to="projects" smooth={true} duration={600}>
              <div
                className="bg-black/30 backdrop-blur-sm border border-indigo-300/10
                  rounded-lg p-4 text-center hover:bg-black/40 hover-lift cursor-pointer"
              >
                <div className="text-3xl font-bold text-indigo-300">6+</div>
                <div className="text-xs text-white/60">Projects</div>
              </div>
            </ScrollLink>

            <ScrollLink to="certifications" smooth={true} duration={600}>
              <div
                className="bg-black/30 backdrop-blur-sm border border-indigo-300/10
                  rounded-lg p-4 text-center hover:bg-black/40 hover-lift cursor-pointer"
              >
                <div className="text-3xl font-bold text-indigo-300">15+</div>
                <div className="text-xs text-white/60">Certifications</div>
              </div>
            </ScrollLink>
          </motion.div>
              </motion.div>
            </div>

            <div className="space-y-10">
              <div className="-translate-y-3">
                <div className="relative pl-8">
                  <div
                    className="absolute left-2 top-0 bottom-0 w-[2px]
                                  bg-gradient-to-b from-indigo-300/70 to-transparent rounded"
                  />

                  <ul className="space-y-8">
  {timelineItems.map((t) => (
    <li key={t.title} className="relative">
      <div
        className="
          absolute
          -left-5
          top-0
          w-10
          h-10
          rounded-full
          bg-white
          border
          border-indigo-300/30
          overflow-hidden
          flex
          items-center
          justify-center
          shadow-lg
        "
      >
        <img
          src={t.logo}
          alt={t.company}
          className="w-8 h-8 object-contain"
        />
      </div>

      <div className="ml-10">
        <span className="text-[11px] text-white/50 font-semibold">
          {t.year}
        </span>

        <h3 className="text-indigo-300 font-bold text-sm mt-1 leading-tight">
          {t.title}
        </h3>

        <div className="text-white text-xs font-medium mt-1">
          {t.company}
        </div>

        <p className="text-white/70 text-xs leading-relaxed mt-2 max-w-lg">
          {t.desc}
        </p>
      </div>
    </li>
  ))}
</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}