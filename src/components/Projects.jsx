import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/portfolioData.js";
import { GithubIcon, ArrowUpRight } from "./Icons.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="04 — Work"
          title="Selected projects"
          intro="A few things I've built — each focused on solving a real problem."
        />

        <div className="projects__grid">
          {projects.map((p, idx) => (
            <Reveal
              className={`projects__card card ${
                p.featured ? "is-featured" : ""
              }`}
              key={p.title}
              delay={(idx % 3) + 1}
            >
              <div className="projects__top">
                <div className="projects__index">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="projects__github"
                  aria-label={`${p.title} on GitHub`}
                >
                  <GithubIcon width="18" height="18" />
                </a>
              </div>

              <h3 className="projects__title">{p.title}</h3>
              <p className="projects__tagline">{p.tagline}</p>
              <p className="projects__desc">{p.description}</p>

              <ul className="projects__highlights">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="projects__tech">
                {p.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="projects__link"
              >
                View on GitHub <ArrowUpRight width="16" height="16" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
