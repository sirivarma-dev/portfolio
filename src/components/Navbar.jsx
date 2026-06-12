import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { SunIcon, MoonIcon } from "./Icons.jsx";
import { profile } from "../data/portfolioData.js";
import "./Navbar.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" aria-label="Back to top">
          <span className="nav__mark">{initials}</span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className={`nav__burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="nav__mobile-link"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
