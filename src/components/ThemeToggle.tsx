"use client";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed left-6 top-6 z-50 p-3 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 hover:bg-zinc-700/50 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-blue-500 text-xl" />
      )}
    </motion.button>
  );
}
