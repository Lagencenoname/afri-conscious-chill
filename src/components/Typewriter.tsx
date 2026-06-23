import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms par caractère
  startDelay?: number; // ms avant de démarrer
  className?: string;
  caretClassName?: string;
}

/**
 * Effet « machine à écrire » : tape le texte caractère par caractère
 * avec un curseur clignotant. Respecte prefers-reduced-motion.
 */
const Typewriter = ({
  text,
  speed = 45,
  startDelay = 400,
  className,
  caretClassName,
}: TypewriterProps) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(text.length);
      setDone(true);
      return;
    }

    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            setDone(true);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span
        aria-hidden="true"
        className={`inline-block w-[0.08em] ${done ? "animate-pulse" : ""} ${caretClassName ?? ""}`}
        style={{
          borderRight: "0.08em solid currentColor",
          marginLeft: "0.04em",
        }}
      >
        &nbsp;
      </span>
    </span>
  );
};

export default Typewriter;
