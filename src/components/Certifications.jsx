import React from "react";
import StarfieldCertifications from "./Starfield2";

const certifications = [
  {
    id: 1,
    title: "PostgreSQL: Become an SQL Developer",
    issuer: "Simplilearn",
    date: "May 2026",
    detail: "",
    image: "/certs/postgresql.png",
  },

  {
    id: 2,
    title: "Connecting to MongoDB in Python",
    issuer: "MongoDB",
    date: "Feb 2026",
    detail: "",
    image: "/certs/mongodbpython.png",
  },

  {
    id: 3,
    title: "Relational to Document Model",
    issuer: "MongoDB",
    date: "Feb 2026",
    detail: "",
    image: "/certs/mongodbdocument.png",
  },

  {
    id: 4,
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "Aug 2025",
    detail: "",
    image: "/certs/forage2.png",
  },

  {
    id: 5,
    title: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet (Valid till 2027)",
    date: "Jul 2025",
    detail: "",
    image: "/certs/fortinet4.png",
  },

  {
    id: 6,
    title: "FCF - Getting Started in Cybersecurity 3.0",
    issuer: "Fortinet",
    date: "Jul 2025",
    detail: "",
    image: "/certs/fortinet.png",
  },

  {
    id: 7,
    title: "FCF - Introduction to the Threat Landscape 3.0",
    issuer: "Fortinet",
    date: "Jul 2025",
    detail: "",
    image: "/certs/fortinet2.png",
  },

  {
    id: 8,
    title: "FCF - Technical Introduction to Cybersecurity 2.0",
    issuer: "Fortinet",
    date: "Jul 2025",
    detail: "",
    image: "/certs/fortinet3.png",
  },

  {
    id: 9,
    title: "Cyber Job Simulation",
    issuer: "Forage",
    date: "Jul 2025",
    detail: "",
    image: "/certs/forage.png",
  },

  {
    id: 10,
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Mar 2025",
    detail: "",
    image: "/certs/cisco2.png",
  },

  {
    id: 11,
    title: "Introduction to Prompt Engineering",
    issuer: "Simplilearn",
    date: "Mar 2025",
    detail: "",
    image: "/certs/prompt.png",
  },

  {
    id: 12,
    title: "Introduction to Soft Skills",
    issuer: "TCS iON",
    date: "Mar 2025",
    detail: "",
    image: "/certs/tcs.png",
  },

  {
    id: 13,
    title: "Introduction to Credit Risk",
    issuer: "TCS iON",
    date: "Feb 2025",
    detail: "",
    image: "/certs/tcs2.png",
  },

  {
    id: 14,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Aug 2024",
    detail: "",
    image: "/certs/cisco.png",
  },

  {
    id: 15,
    title: "Python for Cybersecurity Professionals",
    issuer: "Cybrary",
    date: "Jun 2024",
    detail: "",
    image: "/certs/pythoncyber.png",
  },

  {
    id: 16,
    title: "Introduction to Ethical Hacking",
    issuer: "Great Learning",
    date: "Oct 2023",
    detail: "",
    image: "/certs/ethical.png",
  },

  {
    id: 17,
    title: "Python for Machine Learning",
    issuer: "Great Learning",
    date: "Sep 2023",
    detail: "",
    image: "/certs/pythonml.png",
  },
];

function CertCard({ c, onHover }) {
  return (
    <div className="card flex-shrink-0 w-[220px] sm:w-[240px] md:w-[300px] h-52 sm:h-56 md:h-60 mx-2 sm:mx-3 select-none">
      <div
        className="flip-card relative w-full h-full"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        onFocus={() => onHover(true)}
        onBlur={() => onHover(false)}
        tabIndex={0}
      >
        <div
          className="flip-inner relative w-full h-full transition-transform duration-700"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="flip-front absolute inset-0 bg-indigo-300/15 backdrop-blur-md border border-teal-300/20 rounded-xl p-4 flex flex-col justify-between"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-center md:translate-y-15">
              <h2 className="text-sm md:text-lg font-semibold text-white leading-tight">
                {c.title}
              </h2>

              <p className="text-xs text-white/60 mt-1">{c.issuer}</p>
            </div>

            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-white/50">ID: {c.id}</span>
              <span className="text-xs text-white/60">{c.date}</span>
            </div>
          </div>

          <div
            className="flip-back absolute inset-0 bg-black rounded-xl overflow-hidden border border-teal-300/20"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            {c.image ? (
              <img
                src={c.image}
                className="w-full h-full object-contain bg-black"
                alt={c.title}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/50">
                No Image
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="mt-2 text-xs text-white/50 text-center">
        Hover to flip
      </p>
    </div>
  );
}

export default function Certifications() {
  const marqueeRef = React.useRef(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const DURATION = 35;

  const items = React.useMemo(() => {
    const first = certifications.map((c, i) => ({
      ...c,
      _origIndex: i,
      _dup: 0,
    }));

    const second = certifications.map((c, i) => ({
      ...c,
      _origIndex: i,
      _dup: 1,
    }));

    return [...first, ...second];
  }, []);

  React.useLayoutEffect(() => {
    const track = marqueeRef.current;
    if (!track) return;

    const origCount = certifications.length;

    const computeWidth = () => {
      let w = 0;

      for (let i = 0; i < origCount; i++) {
        const el = track.children[i];
        if (el) w += el.getBoundingClientRect().width;
      }

      if (w < 50) w = 1000;

      track.style.setProperty("--marquee-distance", `${w}px`);
      track.style.setProperty("--marquee-duration", `${DURATION}s`);
    };

    computeWidth();

    const imgs = track.querySelectorAll("img");
    imgs.forEach((img) =>
      img.addEventListener("load", computeWidth, { once: true })
    );

    window.addEventListener("resize", computeWidth);

    return () => window.removeEventListener("resize", computeWidth);
  }, [DURATION]);

  return (
    <section
      id="certifications"
      className="scroll-mt-24 relative min-h-screen bg-gradient-b from-black via-[#020304] to-[#1b092a] overflow-hidden py-12"
    >
      <StarfieldCertifications />

      <div className="relative py-16 md:py-20 z-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-300 mb-6 px-4">
          Welcome to my Certifications
        </h1>

        <h5 className="text-xs sm:text-sm text-white/70 mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
          Here are some of the certifications I've earned in my journey. Each
          certification represents a milestone in my commitment to continuous
          learning and professional growth in the ever-evolving field of
          technology and cybersecurity.
        </h5>

        <div className="translate-y-4">
          <div className="w-full overflow-hidden px-2 sm:px-6">
            <div
              ref={marqueeRef}
              className={`marquee-track ${isPaused ? "paused" : ""}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {items.map((c, idx) => (
                <div
                  key={`cert-${c._origIndex}-${c._dup}-${idx}`}
                  className="marquee-item inline-block"
                >
                  <CertCard c={c} onHover={setIsPaused} />
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-white/50 px-4">
            Hover a card to view full certificate.
          </p>
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: max-content;
          animation: marquee var(--marquee-duration, ${DURATION}s) linear infinite;
        }

        .marquee-track.paused {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .marquee-track {
            gap: 8px;
          }
        }

        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(calc(var(--marquee-distance) * -1), 0, 0);
          }
        }

        .flip-card:hover .flip-inner,
        .flip-card:focus-within .flip-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}