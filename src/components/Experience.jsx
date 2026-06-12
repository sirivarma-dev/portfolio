import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import { experience } from "../data/portfolioData.js";
import "./Timeline.css";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="03 — Experience"
          title="Where I've worked"
          intro="Hands-on experience building and shipping AI features."
        />

        <div className="timeline">
          {experience.map((job, idx) => (
            <Reveal className="timeline__item" key={idx} delay={1}>
              <span className="timeline__node" />
              <div className="timeline__card card">
                <div className="timeline__head">
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__org">{job.company}</p>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__period">{job.period}</span>
                    <span className="timeline__loc">{job.location}</span>
                  </div>
                </div>

                <ul className="timeline__points">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                {job.tech && (
                  <div className="timeline__tech">
                    {job.tech.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
