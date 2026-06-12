import { profile, contact } from "../data/portfolioData.js";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__role">{profile.title}</span>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer__socials">
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon width="18" height="18" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon width="18" height="18" />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <MailIcon width="18" height="18" />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {profile.name}. All rights reserved.
        </span>
        <span className="footer__built">Built with React &amp; Vite</span>
      </div>
    </footer>
  );
}
