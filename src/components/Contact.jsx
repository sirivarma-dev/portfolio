import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import { contact } from "../data/portfolioData.js";
import {
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  ArrowUpRight,
  DownloadIcon,
} from "./Icons.jsx";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__glow" aria-hidden="true" />

          <SectionHeader
            eyebrow="07 — Contact"
            title="Let's build something."
            intro="Open to internships and entry-level AI/ML and software roles. The fastest way to reach me is email."
          />

          <Reveal className="contact__actions" delay={1}>
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>
              <MailIcon width="18" height="18" /> Email me
            </a>
            <a className="btn btn-ghost" href={contact.resume} download>
              <DownloadIcon width="18" height="18" /> Download résumé
            </a>
          </Reveal>

          <Reveal className="contact__methods" delay={2}>
            <a className="contact__method" href={`mailto:${contact.email}`}>
              <MailIcon width="20" height="20" />
              <div>
                <span className="contact__method-label">Email</span>
                <span className="contact__method-value">{contact.email}</span>
              </div>
            </a>

            <a className="contact__method" href={`tel:${contact.phone}`}>
              <PhoneIcon width="20" height="20" />
              <div>
                <span className="contact__method-label">Phone</span>
                <span className="contact__method-value">{contact.phone}</span>
              </div>
            </a>

            <a
              className="contact__method"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon width="20" height="20" />
              <div>
                <span className="contact__method-label">GitHub</span>
                <span className="contact__method-value">
                  @{contact.github.split("/").pop()}
                </span>
              </div>
              <ArrowUpRight width="16" height="16" className="contact__ext" />
            </a>

            <a
              className="contact__method"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon width="20" height="20" />
              <div>
                <span className="contact__method-label">LinkedIn</span>
                <span className="contact__method-value">
                  in/{contact.linkedin.split("/in/").pop().replace(/\/$/, "")}
                </span>
              </div>
              <ArrowUpRight width="16" height="16" className="contact__ext" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
