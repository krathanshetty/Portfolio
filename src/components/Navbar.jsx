import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-5 w-full">

        <div className="text-xl sm:text-2xl font-bold text-indigo-300">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={600}
            offset={-70}
            className="hover:text-indigo-400 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Portfolio.
          </ScrollLink>
        </div>

        <button
          className="md:hidden text-indigo-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex gap-6 lg:gap-8 text-indigo-300 text-sm uppercase tracking-widest font-semibold">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <ScrollLink
                to={id}
                smooth={true}
                duration={600}
                offset={0}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/90 backdrop-blur-lg text-indigo-300 font-semibold tracking-widest text-sm uppercase">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <ScrollLink
                to={id}
                smooth={true}
                duration={600}
                offset={0}
                onClick={toggleMenu}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}