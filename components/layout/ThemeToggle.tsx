"use client";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      style={{
        background: theme === "dark"
          ? "linear-gradient(135deg, #1e3bbf, #0d1a5e)"
          : "linear-gradient(135deg, #7598ff, #aac0ff)",
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        className="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center shadow-md"
        animate={{
          x: theme === "dark" ? 28 : 2,
          background: theme === "dark" ? "#162580" : "#ffffff",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.span
              key="moon"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <Moon size={14} className="text-blue-300" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <Sun size={14} className="text-yellow-500" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
