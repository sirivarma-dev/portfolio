import { useScrollReveal } from "../hooks/useScrollReveal.js";

/**
 * Wraps children and fades/slides them in when scrolled into view.
 * Usage: <Reveal as="div" delay={1}>...</Reveal>
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay,
  className = "",
  ...rest
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <Tag
      ref={ref}
      data-delay={delay}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
