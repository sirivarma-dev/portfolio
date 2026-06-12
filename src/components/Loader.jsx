import { useEffect, useState } from "react";
import "./Loader.css";

/**
 * Brief branded loading animation shown on first paint.
 */
export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loader ${done ? "loader--hide" : ""}`} aria-hidden="true">
      <div className="loader__mark">
        <svg viewBox="0 0 64 64" width="56" height="56">
          <g
            className="loader__lines"
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
          >
            <line x1="20" y1="22" x2="44" y2="18" />
            <line x1="20" y1="22" x2="24" y2="44" />
            <line x1="44" y1="18" x2="46" y2="42" />
            <line x1="24" y1="44" x2="46" y2="42" />
          </g>
          <g className="loader__nodes" fill="var(--primary)">
            <circle cx="20" cy="22" r="4" />
            <circle cx="44" cy="18" r="4" />
            <circle cx="24" cy="44" r="4" />
            <circle cx="46" cy="42" r="4" />
          </g>
        </svg>
      </div>
      <span className="loader__text">Loading</span>
    </div>
  );
}
