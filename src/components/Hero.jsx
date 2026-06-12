import NetworkBackground from "./NetworkBackground.jsx";
import { profile, contact } from "../data/portfolioData.js";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  DownloadIcon,
  ArrowUpRight,
  MapPinIcon,
} from "./Icons.jsx";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <NetworkBackground />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__status" />
          Available for internships &amp; roles
        </p>

        <h1 className="hero__name">{profile.name}</h1>

        <p className="hero__title">{profile.title}</p>
        <p className="hero__subtitle">
          {profile.subtitle}
          <span className="hero__loc">
            <MapPinIcon width="15" height="15" /> {profile.location}
          </span>
        </p>

        <p className="hero__summary">{profile.summary}</p>

        <div className="hero__cta">
          <a
            className="btn btn-primary"
            href={contact.resume}
            download
            aria-label="Download résumé (PDF)"
          >
            <DownloadIcon width="18" height="18" /> Download Résumé
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch <ArrowUpRight width="18" height="18" />
          </a>
        </div>

        <div className="hero__socials">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>

        <div className="hero__stats">
          {profile.stats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to content">
        <span className="hero__scroll-line" />
        Scroll
      </a>
    </section>
  );
}
