import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import { education, certifications } from "../data/portfolioData.js";
import "./Timeline.css";
import "./Education.css";

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container education__grid">
        {/* Education timeline */}
        <div className="education__col">
          <SectionHeader eyebrow="05 — Education" title="Academic background" />
          <div className="timeline education__timeline">
            {education.map((e, idx) => (
              <Reveal className="timeline__item" key={idx} delay={1}>
                <span className="timeline__node" />
                <div className="timeline__card card">
                  <div className="timeline__head">
                    <h3 className="timeline__role education__degree">
                      {e.degree}
                    </h3>
                    <span className="timeline__period">{e.period}</span>
                  </div>
                  <p className="timeline__org">{e.institution}</p>
                  {e.detail && <p className="timeline__detail">{e.detail}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="education__col">
          <SectionHeader eyebrow="06 — Credentials" title="Certifications" />
          <div className="certs">
            {certifications.map((c, idx) => (
              <Reveal
                className="certs__item card"
                key={c.name}
                delay={(idx % 3) + 1}
              >
                <span className="certs__bullet" />
                <div>
                  <h3 className="certs__name">{c.name}</h3>
                  <p className="certs__issuer">{c.issuer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
