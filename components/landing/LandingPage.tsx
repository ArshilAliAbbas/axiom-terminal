"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Cpu, ShieldAlert, Zap, Terminal, LineChart, Globe, BarChart3, Database } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface LandingPageProps {
  onOpenTerminal: () => void;
}

export default function LandingPage({ onOpenTerminal }: LandingPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, 100]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#030508] text-white font-sans selection:bg-white/20 selection:text-white overflow-hidden">
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Ambient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-cyan-500/5 blur-[150px] rounded-full mix-blend-screen" />
        
        {/* Grain */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] mix-blend-overlay opacity-50" />
      </div>
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030508]/60 backdrop-blur-xl supports-[backdrop-filter]:bg-[#030508]/40"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
              <Terminal className="w-4 h-4 text-black" />
            </div>
            <span className="text-[14px] tracking-[0.3em] uppercase font-extrabold text-white">
              Axiom
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/50">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
          </div>

          <button
            onClick={onOpenTerminal}
            className="group relative px-5 py-2 text-[10px] font-bold uppercase tracking-widest overflow-hidden rounded border border-white/20 hover:border-white/40 transition-colors"
          >
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
              Launch Terminal
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 z-10"
      >
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
           <motion.div
             initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
             animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              System Online • v2.4.1 Active
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
             className="relative"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05] mb-6">
              The unfair advantage <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">
                institutional traders
              </span> hide.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Aggregate order flow, decipher macro narratives with AI, and execute with absolute mathematical precision. Welcome to the new standard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={onOpenTerminal}
              className="group relative px-8 py-4 bg-white text-black font-extrabold uppercase tracking-[0.15em] text-xs rounded shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all overflow-hidden w-full sm:w-auto"
            >
               <span className="relative z-10 flex items-center justify-center gap-2">
                  Initialize Axiom
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </span>
            </button>
            <a 
              href="#features"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold uppercase tracking-[0.15em] text-xs rounded hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center"
            >
              Explore Intel
            </a>
          </motion.div>
        </div>

        {/* Floating Abstract UI Elements */}
        <motion.div
           style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
           className="absolute top-1/4 left-[10%] hidden lg:block"
        >
          <div className="w-48 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] uppercase tracking-widest text-white/70">Order Flow</span>
            </div>
            <div className="h-12 flex items-end gap-1">
              {[40, 70, 45, 90, 65, 85, 30].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: "0%" }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  className="flex-1 bg-white/20 rounded-t"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
           style={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
           className="absolute bottom-1/4 right-[10%] hidden lg:block"
        >
          <div className="w-56 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] uppercase tracking-widest text-white/70">AI Sentiment</span>
              </div>
              <span className="text-xs font-bold text-emerald-400">Bullish</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '78%' }}
                 transition={{ duration: 1.5, delay: 1 }}
                 className="h-full bg-gradient-to-r from-blue-500 to-emerald-400"
               />
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Descend</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" 
          />
        </motion.div>
      </motion.section>

      {/* Analytics Dashboard Mockup Section */}
      <section id="features" className="relative py-32 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Command execution. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/20">Not just analysis.</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Our terminal reconstructs the market narrative in real-time, blending traditional technicals with advanced language models to identify edge.
            </p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#06090D]/50 backdrop-blur-2xl shadow-[0_0_100px_rgba(255,255,255,0.02)] overflow-hidden">
            {/* Window Controls */}
            <div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <div className="ml-4 text-[10px] text-white/30 font-mono">axiom-terminal-root@trade-server-01: ~</div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] overflow-hidden">
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-xl p-4 relative overflow-hidden group hover:border-white/20 transition-colors">
                   <div className="flex items-center gap-2 mb-4">
                     <Globe className="w-4 h-4 text-blue-400" />
                     <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Macro Overview</h3>
                   </div>
                   <div className="space-y-3">
                     {[
                       { l: "DXY", v: "104.25", c: "+0.12%", up: true },
                       { l: "US10Y", v: "4.32%", c: "+0.05", up: true },
                       { l: "SPX", v: "5,123.4", c: "-0.45%", up: false },
                     ].map((item, i) => (
                       <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                         <span className="text-white/50">{item.l}</span>
                         <div className="flex items-center gap-2">
                           <span className="font-mono">{item.v}</span>
                           <span className={`text-[10px] px-1.5 py-0.5 rounded ${item.up ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                             {item.c}
                           </span>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
                
                <div className="h-48 bg-white/[0.03] border border-white/5 rounded-xl p-4 group hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldAlert className="w-4 h-4 text-yellow-400" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Risk Matrix</h3>
                  </div>
                  <div className="flex justify-center items-center h-24">
                     <div className="relative w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center">
                       <svg className="absolute inset-0 w-full h-full -rotate-90">
                         <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-yellow-500" strokeDasharray="276" strokeDashoffset="60" />
                       </svg>
                       <span className="text-xl font-bold">78</span>
                     </div>
                  </div>
                  <div className="text-center mt-2 text-[10px] text-white/40 uppercase tracking-widest">Exposure Factor</div>
                </div>
              </div>

              {/* Center Column */}
              <div className="hidden md:flex flex-col col-span-2 gap-4">
                <div className="flex-[2] bg-white/[0.03] border border-white/5 rounded-xl p-4 relative group hover:border-white/20 transition-colors">
                   <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-2">
                       <BarChart3 className="w-4 h-4 text-purple-400" />
                       <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Actionable Plan</h3>
                     </div>
                     <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-white/70 tracking-widest">LIVE</span>
                   </div>
                   <div className="bg-[#030508] border border-white/10 rounded-lg p-4 font-mono text-xs leading-relaxed text-emerald-400/80">
                     <span className="text-purple-400">async function</span> analyzeMarket() {'{\n'}
                     {'  '}const narrative = <span className="text-yellow-400">await</span> ai.getSentiment("FED_FUNDS");{'\n'}
                     {'  '}if (narrative.isHawkish && structure.isBroken) {'{\n'}
                     {'    '}<span className="text-blue-400">executeShort</span>({'{'} target: "NQ", size: "2%" {'}'});{'\n'}
                     {'  }'}{'\n'}
                     {'}'}
                     <br/><br/>
                     <span className="text-white/40">// AI Output: High probability mean reversion setup detected. Wait for liquidity sweep.</span>
                   </div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 flex flex-col justify-between group hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2">
                       <Database className="w-4 h-4 text-cyan-400" />
                       <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Data Stream</h3>
                     </div>
                     <div className="text-3xl font-light">14.2M/s</div>
                     <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                       <div className="h-full bg-cyan-400 w-[85%]" />
                     </div>
                  </div>
                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 flex flex-col justify-between group hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2">
                       <Activity className="w-4 h-4 text-red-400" />
                       <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Volatility</h3>
                     </div>
                     <div className="text-3xl font-light">Elevated</div>
                     <div className="flex gap-1 mt-2">
                       {[...Array(10)].map((_, i) => (
                         <div key={i} className={`h-1 flex-1 rounded-full ${i < 8 ? 'bg-red-500' : 'bg-white/10'}`} />
                       ))}
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Overlay for Fade Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06090D]/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 px-4 text-center z-10 border-t border-white/5 mt-20 bg-[#030508]">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 block" />
         
         <div className="relative z-10 max-w-3xl mx-auto">
           <div className="w-16 h-16 mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
             <Zap className="w-8 h-8 text-white/80" />
           </div>
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
             It's time to trade <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">with complete clarity.</span>
           </h2>
           <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto font-medium">
             Join the paradigm shift. Harness the power of localized LLMs, live order flow, and risk matrices designed for professionals.
           </p>
           <button
             onClick={onOpenTerminal}
             className="px-10 py-5 bg-white text-black font-extrabold uppercase tracking-[0.2em] text-sm rounded shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1"
           >
             Initialize Interface
           </button>
         </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020305] py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
             <div className="flex items-center gap-2 text-white">
               <Terminal className="w-4 h-4" />
               <span className="text-sm font-extrabold tracking-widest uppercase">Axiom Terminal</span>
             </div>
             <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                Engineered by <a href="https://www.softpulser.com" target="_blank" rel="noreferrer" className="text-white hover:text-white/80 transition-colors underline underline-offset-4 decoration-white/30">Softpulser</a>
             </span>
          </div>

          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.15em] text-white/40 font-bold font-sans">
             <Link href="/legal/terms" className="hover:text-white transition-colors">Terms Conditions</Link>
             <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/legal/disclaimer" className="hover:text-white transition-colors">Risk Disclaimer</Link>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/30 font-mono">
            Build v2.4.1 • <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 block"></span> Operational
          </div>
        </div>
      </footer>
    </div>
  );
}

