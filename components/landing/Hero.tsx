"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onOpenTerminal: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#06090D] overflow-hidden text-white font-sans selection:bg-white/10 selection:text-white">
      {/* Background Gradient & Grain */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[#06090D]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 blur-3xl" />
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Name / Logo area */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
           className="mb-8"
        >
          <h2 className="text-[11px] md:text-sm tracking-[0.4em] uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white/80 to-white/40">
            Axiom Terminal
          </h2>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6"
        >
          See what <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">actually</span>
          <br className="hidden md:block" /> moves the market.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-10 font-medium leading-relaxed"
        >
          Real-time data, AI-driven insights, and clear trade context all in one place.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <button
            onClick={onOpenTerminal}
            className="group relative px-8 py-3.5 bg-white text-black font-bold uppercase tracking-[0.15em] text-[11px] rounded-full overflow-hidden transition-transform active:scale-95"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="relative z-10 flex items-center gap-2">
                Open Terminal
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </span>
          </button>
        </motion.div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#06090D] to-transparent z-0" />
    </div>
  );
}
