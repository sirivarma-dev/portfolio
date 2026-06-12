import Reveal from "./Reveal.jsx";

/**
 * Consistent header used across every section to keep the page cohesive.
 */
export default function SectionHeader({ eyebrow, title, intro }) {
  return (
    <Reveal className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      {title && <h2 className="section-title">{title}</h2>}
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}
