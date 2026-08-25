// components/Logo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="borderGradient" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#915EFF" />
          <stop offset="100%" stopColor="#f272c8" />
        </linearGradient>
      </defs>

      <rect x="1" y="1" width="42" height="42" rx="12" fill="#0d0d17" />
      <rect x="1" y="1" width="42" height="42" rx="12" stroke="url(#borderGradient)" strokeWidth="1.5" />

      <text
        x="22"
        y="23"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', 'Courier New', monospace"
        fontWeight="700"
        fontSize="16"
        fill="#ffffff"
      >
        PSP
      </text>

      {/* Live pulse / uptime monitor line, the signature element */}
      <polyline
        points="6,33 13,33 16,27 19,37 22,30 25,33 38,33"
        fill="none"
        stroke="#4ADE80"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <motion.circle
        r="1.6"
        fill="#4ADE80"
        animate={{
          cx: [6, 13, 16, 19, 22, 25, 38],
          cy: [33, 33, 27, 37, 30, 33, 33],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 0.4,
        }}
      >
        <animate />
      </motion.circle>
    </svg>
  );
};

export default Logo;