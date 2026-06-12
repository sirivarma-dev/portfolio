import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import { profile, interests } from "../data/portfolioData.js";
import { SparkIcon } from "./Icons.jsx";
import "./About.css";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__lead">
          <SectionHeader eyebrow="01 — About" title="Turning AI ideas into working software." />
          <Reveal as="p" className="about__text" delay={1}>
            {profile.summary}
          </Reveal>
        </div>

        <Reveal className="about__interests" delay={2}>
          <span className="about__interests-label">
            <SparkIcon width="16" height="16" /> Areas of interest
          </span>
          <ul className="about__interest-list">
            {interests.map((i) => (
              <li key={i.title} className="about__interest">
                <strong>{i.title}</strong>
                <span>{i.description}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
