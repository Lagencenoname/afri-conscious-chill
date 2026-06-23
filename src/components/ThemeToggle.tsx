import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Switcher de thème (clair ⇄ sombre), style « soft toggle ».
 * `variant` adapte les couleurs au contexte (clair = header transparent, etc.).
 */
const ThemeToggle = ({
  variant = "auto",
  className = "",
}: {
  variant?: "auto" | "onDark";
  className?: string;
}) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (resolvedTheme ?? theme) === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");

  const track =
    variant === "onDark"
      ? "border-white/25 bg-white/10"
      : "border-[hsl(var(--border))] bg-[hsl(var(--surface))] dark:border-white/20 dark:bg-white/10";

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      className={`relative inline-flex h-8 w-14 items-center rounded-full border transition-colors duration-300 ${track} ${className}`}
    >
      {/* Pastille coulissante */}
      <span
        className={`absolute flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))] text-white shadow-md transition-transform duration-300 ${
          mounted && isDark ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {mounted && isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  );
};

export default ThemeToggle;
