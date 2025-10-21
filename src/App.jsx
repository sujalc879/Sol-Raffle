import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import logo from './assets/img-desktop-logo.webp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-linear-to-b from-green-950 via-black to-black text-white px-6">
      {/* Floating Logo Animation */}
      <motion.img
        src={logo}
        alt="SOL Raffle Logo"
        className="w-48 md:w-60 mb-10 drop-shadow-[0_0_20px_rgba(0,255,100,0.6)]"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-b from-green-400 to-emerald-600 drop-shadow-[0_0_10px_rgba(0,255,100,0.4)]">
          🎰 SOL Raffle Bounty
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Play, Review & Earn! Experience on-chain gaming that’s <span className="text-green-400 font-semibold">provably fair</span> and <span className="text-green-400 font-semibold">fully transparent</span>.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <a
          href="https://solraffle.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-2xl bg-linear-to-b from-green-500 to-emerald-600 text-lg font-semibold hover:shadow-[0_0_25px_rgba(0,255,100,0.8)] hover:scale-105 transition-all duration-300"
        >
          Visit Website
        </a>

        <a
          href="https://x.com/SolRaffle_xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-2xl bg-linear-to-b from-gray-700 to-gray-900 text-lg font-semibold hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-105 transition-all duration-300"
        >
          Visit X (Twitter)
        </a>
      </motion.div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500 opacity-20 blur-[160px] rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}