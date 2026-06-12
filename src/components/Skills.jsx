import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import { skills } from "../data/portfolioData.js";
import { CpuIcon } from "./Icons.jsx";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="02 — Toolkit"
          title="Technical skills"
          intro="The languages, frameworks, and AI techniques I build with."
        />

        <div className="skills__grid">
          {skills.map((group, idx) => (
            <Reveal
              className="skills__card card"
              key={group.group}
              delay={(idx % 4) + 1}
            >
              <div className="skills__card-head">
                <CpuIcon width="18" height="18" />
                <h3>{group.group}</h3>
              </div>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
