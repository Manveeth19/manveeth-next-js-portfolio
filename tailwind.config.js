// tailwind.config.js - FIX APPLIED

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }, // <--- 🛑 COMMA MUST BE HERE if another property follows 🛑

      boxShadow: {
        'glow-blue': '0 0 20px 0 rgba(59, 130, 246, 0.6)',
        'glow-purple': '0 0 20px 0 rgba(139, 92, 246, 0.6)',
      },
    },
  },
  // ...
};