"use client";

import { motion } from "framer-motion";

/**
 * Animated "vitals line" divider — a heartbeat-monitor motif used between
 * major sections. The line draws itself in on scroll, and the ECG spike
 * pulses gently on a loop, echoing the clinical monitoring theme of the
 * nursing subject matter.
 */
export function VitalsDivider({ tone = "gold" }: { tone?: "gold" | "cream" }) {
  const stroke = tone === "gold" ? "#C99A3E" : "#FAF6EC";

  return (
    <div className="w-full overflow-hidden py-1" aria-hidden="true">
      <svg viewBox="0 0 1200 28" preserveAspectRatio="none" className="h-6 w-full">
        <motion.path
          d="M0 14 H420 L440 4 L458 26 L474 10 L486 18 L500 14 H1200"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="458"
          cy="26"
          r="3.5"
          fill={stroke}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.6, 1, 0],
          }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{
            duration: 1.8,
            delay: 1.1,
            repeat: Infinity,
            repeatDelay: 1.6,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
