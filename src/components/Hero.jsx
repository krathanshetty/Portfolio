import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import StarBackground from './StarBackground';
import TypewriterText from './TypewriterText';
import { FaLinkedin, FaGithub, FaInstagram, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { Link as ScrollLink } from 'react-scroll';
import astronautImg from '../assets/astronaut.png';

const ViteLogo = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 256 257"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
  >
    <path
      d="M255.153 37.938L134.574 252.976c-4.132 7.42-14.722 7.52-18.986.18L.875 37.98c-4.692-8.036 2.04-17.98 11.42-16.7l115.81 16.54a10.18 10.18 0 003.03 0l111.59-16.5c9.36-1.39 16.14 8.48 11.48 16.53z"
      fill="currentColor"
      opacity="0.28"
    />
    <path
      d="M185.432.063l-92.34 14.19c-2.671.42-4.73 2.7-4.98 5.39l-8.19 88.78a6.13 6.13 0 008.42 6.3l25.25-9.88c2.83-1.11 6 .16 7.19 2.95l28.09 65.86c1.17 2.75 5.05 2.75 6.23 0l39.02-91.47a6.17 6.17 0 00-3.85-8.2l-26.06-7.71c-2.89-.86-4.52-3.9-3.63-6.77l17.45-56.59c.88-2.86-1.74-5.72-4.72-5.27z"
      fill="currentColor"
    />
  </svg>
);

export default function Hero() {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);

  const smoothX = useSpring(mvX, { stiffness: 140, damping: 22 });
  const smoothY = useSpring(mvY, { stiffness: 140, damping: 22 });

  const rotate = useTransform(smoothX, (v) => v / 8);

  const handleMouseMove = (e) => {
    const maxShift = 40;
    const px = (e.clientX / window.innerWidth - 0.5) * maxShift;
    const py = (e.clientY / window.innerHeight - 0.5) * maxShift;

    mvX.set(px);
    mvY.set(py);
  };

  const handleMouseLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full overflow-x-hidden overflow-y-visible bg-gradient-to-b from-black via-[#0a0f1a] to-[#010314] text-white relative"
    >
      <StarBackground />

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="
          hidden sm:block
          absolute
          top-24
          right-[-30px]
          md:right-[-40px]
          lg:right-0
          w-[220px]
          sm:w-[280px]
          md:w-[320px]
          lg:w-[380px]
          xl:w-[450px]
          h-[300px]
          sm:h-[380px]
          md:h-[440px]
          lg:h-[520px]
          xl:h-[580px]
          pointer-events-none
          select-none
          bg-no-repeat
          bg-right
          bg-contain
        "
        style={{
          x: smoothX,
          y: smoothY,
          rotate,
          backgroundImage: `url(${astronautImg})`,
          willChange: 'transform',
        }}
      />

      {/* MOBILE HERO */}
      <div
        className="
          flex
          md:hidden
          flex-col
          min-h-[calc(100svh-4rem)]
          w-full
          px-5
          sm:px-6
          z-30
          fade-in
          pt-24
        "
      >
        {/* Top Section - Greeting & Heading */}
        <div className="flex flex-col items-center text-center z-40 pt-12 sm:pt-16">
          <div className="text-sm sm:text-base text-indigo-300 font-Orbitron font-semibold tracking-wider mb-2">
            Welcome
          </div>

          <h1 className="text-4xl sm:text-5xl font-black font-Orbitron text-white leading-tight mb-1">
            Hi There,
          </h1>

          <h2 className="text-3xl sm:text-4xl font-bold font-Orbitron text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-400 leading-tight">
            I'm Krathan N Shetty
          </h2>

          <div className="mt-8 text-indigo-300 text-xs sm:text-sm font-Orbitron max-w-xs z-40 leading-relaxed tracking-wide">
            <TypewriterText
              text="> &nbsp; Operations Professional &nbsp; | &nbsp; Web Developer &nbsp; | &nbsp; Security Analyst "
              speed={50}
            />
          </div>

          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            className="z-50 mt-10 inline-block px-8 py-3 font-bold text-sm sm:text-base border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-black transition-all duration-300 rounded-lg shadow-lg cursor-pointer"
          >
            Explore My Work
          </ScrollLink>
        </div>

        {/* Middle Section - Social Icons */}
        <div className="flex justify-center gap-5 z-50 relative mt-10 flex-shrink-0">
          <a
            href="https://www.linkedin.com/in/shettykrathan"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-125 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-indigo-300 hover:text-indigo-200 text-2xl" />
          </a>

          <a
            href="https://github.com/krathanshetty"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-125 transition-transform duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-indigo-300 hover:text-indigo-200 text-2xl" />
          </a>

          <a
            href="https://instagram.com/_shetty_krathan_"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-125 transition-transform duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-indigo-300 hover:text-indigo-200 text-2xl" />
          </a>
        </div>

        {/* Flexible Spacer */}
        <div className="flex-grow" />

        {/* Bottom Section - Made With */}
        <div className="flex flex-col items-center gap-4 z-50 pb-10 flex-shrink-0">
          <div className="text-xs font-Orbitron text-indigo-300 font-semibold tracking-wider">
            CRAFTED WITH
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center justify-center p-2 sm:p-2.5 border border-indigo-400 rounded-lg bg-black/40 hover:bg-black/60 transition-colors duration-300">
              <FaReact className="text-indigo-300 text-lg sm:text-xl" />
            </div>

            <div className="flex items-center justify-center p-2 sm:p-2.5 border border-indigo-400 rounded-lg bg-black/40 hover:bg-black/60 transition-colors duration-300">
              <ViteLogo className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-300" />
            </div>

            <div className="flex items-center justify-center p-2 sm:p-2.5 border border-indigo-400 rounded-lg bg-black/40 hover:bg-black/60 transition-colors duration-300">
              <SiTailwindcss className="text-indigo-300 text-lg sm:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP HERO */}
      <div
        className="
          hidden
          md:flex
          flex-col
          md:flex-row
          items-center
          justify-between
          min-h-screen
          w-full
          px-5
          sm:px-6
          md:px-20
          z-30
          fade-in
        "
      >
        <div
          className="
            w-full
            md:w-1/2
            text-center
            md:text-left
            flex
            flex-col
            items-center
            md:items-start
            md:ml-20
            lg:pr-20
            z-40
            justify-start
            md:pt-0
          "
        >
          <div className="md:mt-24 md:mb-12 z-40">
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold font-Orbitron text-white leading-tight z-40">
              Hi There,
              <br />
              I'm <span className="text-indigo-300">Krathan N Shetty</span>
            </h1>

            <div
              className="
                mt-4
                text-indigo-300
                text-sm
                sm:text-lg
                font-Orbitron
                max-w-full
                break-words
                z-40
              "
            >
              <TypewriterText
                text="> &nbsp; Operations Professional &nbsp; | &nbsp; Web Developer &nbsp; | &nbsp; Security Analyst "
                speed={50}
              />
            </div>

            <ScrollLink
              to="about"
              smooth={true}
              duration={600}
              className="z-50 mt-6 inline-block px-6 py-3 font-bold border border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-black transition-all duration-300 rounded-lg shadow-md cursor-pointer"
            >
              About Me
            </ScrollLink>
          </div>

          <div
            className="
              mt-8
              md:mt-36
              flex
              justify-center
              md:justify-start
              gap-4
              z-50
              relative
            "
          >
            <a
              href="https://www.linkedin.com/in/shettykrathan"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-indigo-300 hover:text-indigo-400 text-2xl transition duration-300" />
            </a>

            <a
              href="https://github.com/krathanshetty"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <FaGithub className="text-indigo-300 hover:text-indigo-400 text-2xl transition duration-300" />
            </a>

            <a
              href="https://instagram.com/_shetty_krathan_"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <FaInstagram className="text-indigo-300 hover:text-indigo-400 text-2xl transition duration-300" />
            </a>
          </div>
        </div>

        <div
          className="
            w-full
            md:w-1/2
            relative
            flex
            items-center
            justify-center
            md:justify-end
            mt-10
            md:mt-0
            md:translate-y-64
            md:-translate-x-20
            z-40
          "
        >
          <div className="w-full max-w-md px-4 md:px-0 flex items-center justify-center md:justify-end z-50">
            <div className="flex items-center space-x-3 bg-transparent">
              <div className="text-xs sm:text-sm text-indigo-300 font-semibold mr-2">
                Made With
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center p-2 border border-indigo-400 rounded-lg bg-black/20 cursor-pointer hover-neon z-50">
                  <FaReact className="text-indigo-300 text-xl" />
                </div>

                <div className="flex items-center justify-center p-2 border border-indigo-400 rounded-lg bg-black/20 cursor-pointer hover-neon z-50">
                  <ViteLogo className="w-5 h-5 text-indigo-300" />
                </div>

                <div className="flex items-center justify-center p-2 border border-indigo-400 rounded-lg bg-black/20 cursor-pointer hover-neon z-50">
                  <SiTailwindcss className="text-indigo-300 text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}