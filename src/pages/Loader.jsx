import { useEffect } from "react";
import { motion } from "framer-motion";

export default function FadingRingsLoader({ onPulseComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onPulseComplete();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onPulseComplete]);

  const ringColors = ["border-blue-500", "border-purple-500", "border-pink-500"];

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[bg-main] text-white relative">
      {/* Expanding Rings Animation with Subtle Glow */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute h-16 w-16 rounded-full border ${ringColors[i % ringColors.length]}`}
          animate={{ scale: [1, 2, 1], opacity: [1, 0.7, 0.3] }}
          transition={{ duration: 1.5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ boxShadow: `0 0 ${4 + i * 2}px rgba(255, 255, 255, 0.4)` }} // Subtle glow effect
        />
      ))}

      {/* Loading Text - Positioned Lower */}
      <motion.p
        className="absolute mt-48 text-lg font-medium text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Loading...
      </motion.p>
    </div>
  );
}