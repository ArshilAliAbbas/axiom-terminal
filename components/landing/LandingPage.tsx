"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Sun, Command, Terminal, Activity, ShieldAlert, BarChart3, Database, Globe, Cpu, Zap, ArrowRight } from "lucide-react";

interface LandingPageProps {
  onOpenTerminal: () => void;
}

export default function LandingPage({ onOpenTerminal }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans selection:bg-yellow-500/30 selection:text-yellow-100 overflow-x-hidden relative">
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-[120vh]">
        {/* Soft green/yellow glow on the left */}
        <div className="absolute top-[0%] left-[0%] w-[50vw] h-[50vw] bg-yellow-600/10 blur-[130px] rounded-full mix-blend-screen -translate-x-1/2 -translate-y-1/2" />
        
        {/* Large intricate dithered circle on the right */}
        <div className="absolute top-[5%] right-[0%] w-[60vw] h-[60vw] bg-orange-600/20 blur-[120px] rounded-full mix-blend-screen translate-x-1/4 -translate-y-1/4" />
        <div 
          className="absolute top-[10%] right-[0%] w-[50vw] h-[50vw] rounded-full opacity-30 mix-blend-screen translate-x-[20%]"
          style={{
            backgroundImage: "radial-gradient(circle, #ea580c 0%, transparent 60%)",
            maskImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJCTxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJ3aGl0ZSIvPgoJPC9zdmc+')",
            WebkitMaskImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJCTxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJ3aGl0ZSIvPgoJPC9zdmc+')",
            maskSize: '6px',
            WebkitMaskSize: '6px'
          }}
        />

        {/* Global Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#050505]/60">
        <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded flex items-center justify-center border border-white/20 bg-white/5">
                 <Terminal className="w-3 h-3 text-white" />
              </div>
              <span className="text-[15px] tracking-widest uppercase font-extrabold text-white">
                Axiom
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6 text-[12px] font-bold uppercase tracking-widest text-white/50">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full px-3 py-1.5 transition-colors group">
              <Search className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
              <span className="text-sm font-medium text-white/30 group-hover:text-white/60 transition-colors">Search Cmds</span>
              <div className="flex items-center gap-0.5 ml-8 text-[10px] text-white/40 bg-black/40 rounded px-1.5 py-0.5 border border-white/5">
                <Command className="w-3 h-3" />
                <span>K</span>
              </div>
            </button>
            <div className="flex items-center gap-1 text-white/40">
              <button className="p-2 hover:text-white hover:bg-white/5 rounded-full transition-colors flex items-center gap-1">
                <Sun className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-5xl pt-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center border border-[#fce075]/40 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-full px-4 py-1.5 mb-10 shadow-[0_0_15px_rgba(252,224,117,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
                <span className="text-[12px] font-bold tracking-widest uppercase text-[#fce075]">
                  System Online • Institutional Grade
                </span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tight text-[#f1f1f1] leading-[1.08] mb-12"
            >
              Execute precision trades,<br className="hidden md:block" />
              with absolute <span className="text-[#fce075]">clarity.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg text-white/50 mb-12 max-w-2xl font-medium leading-relaxed"
            >
              Aggregate order flow, decipher macro narratives with AI, and execute with perfect mathematical edge. The unfair advantage institutional traders hide.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-24"
            >
              <button
                onClick={onOpenTerminal}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#fce075] hover:bg-[#eab308] text-black uppercase tracking-[0.1em] font-extrabold text-[13px] rounded transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(252,224,117,0.2)]"
              >
                Launch Terminal
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <a 
                href="#features"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-bold uppercase tracking-[0.1em] text-[13px] rounded transition-all flex items-center justify-center shadow-sm"
              >
                Explore Intel
              </a>
            </motion.div>
          </div>

          {/* Detailed Mockup Interface (Trading Dashboard) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-2xl border border-white/[0.05] shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] overflow-hidden flex flex-col font-sans"
          >
            {/* Window Controls */}
            <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <div className="ml-4 text-[10.5px] text-white/30 font-mono tracking-widest">axiom-terminal@trade-server-01: ~</div>
              <div className="ml-auto w-6 h-6 rounded bg-white/5 flex items-center justify-center opacity-60">
                 <Terminal className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[540px] overflow-hidden bg-[#050505]">
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-xl p-4 relative group hover:border-white/20 transition-colors">
                   <div className="flex items-center gap-2 mb-5">
                     <Globe className="w-4 h-4 text-blue-400" />
                     <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Macro Overview</h3>
                   </div>
                   <div className="space-y-4">
                     {[
                       { l: "DXY", v: "104.25", c: "+0.12%", up: true },
                       { l: "US10Y", v: "4.32%", c: "+0.05", up: true },
                       { l: "SPX", v: "5,123.4", c: "-0.45%", up: false },
                     ].map((item, i) => (
                       <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                         <span className="text-white/50">{item.l}</span>
                         <div className="flex items-center gap-3">
                           <span className="font-mono text-white/90">{item.v}</span>
                           <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${item.up ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                             {item.c}
                           </span>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
                
                <div className="h-52 bg-white/[0.03] border border-white/5 rounded-xl p-4 group hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldAlert className="w-4 h-4 text-[#fce075]" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#fce075]">Risk Matrix</h3>
                  </div>
                  <div className="flex justify-center items-center h-28">
                     <div className="relative w-28 h-28 rounded-full border-4 border-white/5 flex items-center justify-center">
                       <svg className="absolute inset-0 w-full h-full -rotate-90">
                         <circle cx="54" cy="54" r="50" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-[#fce075]" strokeDasharray="314" strokeDashoffset="70" />
                       </svg>
                       <span className="text-2xl font-bold">78</span>
                     </div>
                  </div>
                  <div className="text-center mt-3 text-[10px] text-white/40 uppercase tracking-widest">Exposure Factor</div>
                </div>
              </div>

              {/* Center & Right Column */}
              <div className="hidden md:flex flex-col col-span-2 gap-4">
                <div className="flex-[2] bg-white/[0.03] border border-white/5 rounded-xl p-5 relative group hover:border-white/20 transition-colors flex flex-col">
                   <div className="flex items-center justify-between mb-5">
                     <div className="flex items-center gap-2">
                       <BarChart3 className="w-4 h-4 text-purple-400" />
                       <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Actionable Plan</h3>
                     </div>
                     <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-1 rounded font-bold tracking-widest animate-pulse">LIVE</span>
                   </div>
                   <div className="bg-[#020202] border border-white/10 rounded-lg p-5 font-mono text-[13px] leading-relaxed text-emerald-400/80 flex-1 shadow-inner overflow-hidden">
                     <span className="text-purple-400">async function</span> executeMarketEdge() {'{\n'}
                     {'  '}const narrative = <span className="text-[#fce075]">await</span> ai.getSentiment("FED_FUNDS");{'\n'}
                     {'  '}if (narrative.isHawkish && structure.isBroken) {'{\n'}
                     {'    '}<span className="text-blue-400">executeShort</span>({'{'} target: "NQ", size: "2%" {'}'});{'\n'}
                     {'  }'}{'\n'}
                     {'}'}
                     <br/><br/>
                     <span className="text-white/40">// AI Output: High probability mean reversion setup detected. Wait for liquidity sweep.</span>
                   </div>
                </div>

                <div className="h-40 grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 flex flex-col justify-between group hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                       <Database className="w-4 h-4 text-cyan-400" />
                       <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Data Stream</h3>
                     </div>
                     <div className="text-4xl font-light text-white font-mono">14.2M<span className="text-xl text-white/40">/s</span></div>
                     <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                       <div className="h-full bg-cyan-400 w-[85%]" />
                     </div>
                  </div>
                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 flex flex-col justify-between group hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                       <Activity className="w-4 h-4 text-red-500" />
                       <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Volatility Scope</h3>
                     </div>
                     <div className="text-3xl font-light text-white tracking-wide">Elevated</div>
                     <div className="flex gap-1.5 mt-2">
                       {[...Array(10)].map((_, i) => (
                         <div key={i} className={`h-1.5 flex-1 rounded-full ${i < 8 ? 'bg-red-500/80' : 'bg-white/10'}`} />
                       ))}
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Description Section aligned with the overall aesthetic */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-40 text-center md:text-left">
         <p className="text-[32px] md:text-[42px] leading-[1.3] font-medium text-[#d1d1d1] tracking-tight mb-16">
            Axiom is an <span className="text-[#fce075] font-bold">Institutional</span> trading framework for <span className="text-[#fce075] font-bold">Professionals</span>, beautifully engineered by <span className="text-[#fce075] font-bold">Softpulser</span>. Elevating your execution speed with perfect clarity at its core.
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
            <div>
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white/60" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Live Order Flow</h3>
              <p className="text-sm text-white/50 leading-relaxed">Direct market data integration with sub-millisecond parsing and analysis logic built right in.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-white/60" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">AI Narrative Core</h3>
              <p className="text-sm text-white/50 leading-relaxed">Extract sentiment directly from fed speeches, news drops, and financial events locally.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white/60" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Terminal Speed</h3>
              <p className="text-sm text-white/50 leading-relaxed">Built from the ground up for maximum visual performance without web bloat.</p>
            </div>
         </div>
      </section>

      {/* Anybody can trade section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[40px] font-bold text-[#fce075] mb-6 tracking-tight">Anybody can trade.</h2>
          <p className="text-white/80 font-medium max-w-2xl mx-auto text-[15px] leading-relaxed">
            Native support for Crypto, FX & Equities, offering intuitive, convenient and extensive intelligence for retail traders, quant developers, and AI agents.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 text-sm font-bold text-white/50 tracking-wide">
            <span className="text-[#fce075]">Trader</span>
            <span className="text-white/20">→</span>
            <span>Quant</span>
            <span className="text-white/20">→</span>
            <span>Automation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Code Block */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 font-mono text-[13px] text-white/70 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
             <div className="absolute top-5 right-5 text-white/20 hover:text-white/60 cursor-pointer transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
             </div>
             <div className="text-white/40 mb-5 leading-loose">
               ---<br/>
               <span className="text-blue-300">strategy:</span> <span className="text-white">Mean Reversion</span><br/>
               ---
             </div>
             <div className="leading-[1.8]">
               <span className="text-blue-400 font-bold">##</span> <span className="text-blue-300 font-bold">Overview</span><br/><br/>
               I love **AxiomTerminal**!<br/><br/>
               <span className="text-purple-400">```ts tab="Tab 1"</span><br/>
               <span className="text-purple-400">console</span>.log(<span className="text-[#fce075]">"Execute Long"</span>)<br/>
               <span className="text-purple-400">```</span><br/><br/>
               <span className="text-purple-400">```ts tab="Tab 2"</span><br/>
               <span className="text-pink-500">return</span> <span className="text-blue-400">0</span>;<br/>
               <span className="text-purple-400">```</span>
             </div>
          </div>

          {/* Right Content */}
          <div className="pl-0 lg:pl-10">
            <h3 className="text-[28px] font-bold text-white mb-6 tracking-tight">The familiar structure.</h3>
            <p className="text-white/80 text-[15px] mb-8 leading-relaxed font-medium">It is real-time processing, with additional features seamlessly composing into the execution.</p>
            
            <ul className="space-y-3.5 text-[13.5px] text-white/60 font-medium">
              <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40 shrink-0" /> Live market data indexing</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40 shrink-0" /> Deep sentiment analysis (Powered by AI)</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40 shrink-0" /> Execution blocks</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40 shrink-0" /> Risk matrices</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40 shrink-0" /> Dynamic Cards</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40 shrink-0" /> Custom strategy anchors</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 rounded-full bg-white/40 shrink-0" /> Auto PnL tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Terminal For Professionals section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-white/5 pb-40">
         <h2 className="text-4xl md:text-[40px] font-bold text-[#fce075] text-center mb-16 tracking-tight">Terminal For Professionals.</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           {/* Card 1 */}
           <div className="bg-[#0f0f11] border border-white/5 rounded-2xl p-8 overflow-hidden relative min-h-[300px] flex flex-col group shadow-lg">
             <div className="absolute -bottom-[20%] -right-[10%] w-[120%] h-[80%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJCTxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSIjZmNlMDc1Ii8+Cjwvc3ZnPg==')] opacity-10 rounded-tl-full mix-blend-screen transition-transform duration-700 group-hover:scale-110"></div>
             
             <h3 className="text-[22px] font-bold text-white mb-4 relative z-10 tracking-tight">Market Agnostic</h3>
             <p className="text-white/60 text-[14px] leading-relaxed relative z-10 max-w-[280px]">
               Official support for Crypto, FX, Equities, Commodities — portable to any global market.
             </p>
             
             <div className="mt-auto relative z-10 flex gap-3">
               <div className="w-9 h-9 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white/80 font-bold text-xs"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
               <div className="w-9 h-9 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white/80"><Globe className="w-4 h-4"/></div>
               <div className="w-9 h-9 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white/80"><Activity className="w-4 h-4"/></div>
             </div>
           </div>

           {/* Card 2 */}
           <div className="bg-[#0f0f11] border border-white/5 rounded-2xl p-8 overflow-hidden relative min-h-[300px] flex flex-col shadow-lg">
             <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight">A truly composable terminal.</h3>
             <p className="text-white/60 text-[14px] leading-relaxed mb-6">
               Separated as <span className="text-[#fce075]">Data → Core → Execution</span>, offering the high composability that quants love — use Axiom as a library.
             </p>

             <div className="flex flex-col font-mono text-[11px] text-white/50 mt-auto">
               <div className="flex items-center justify-between border-t border-dashed border-red-500/40 py-2.5">
                 <span className="text-white/80">axiom-data</span>
                 <span className="text-white/40">Raw tick and sentiment streams.</span>
               </div>
               <div className="flex items-center justify-between border-t border-dashed border-red-500/40 py-2.5">
                 <span className="text-white/80">axiom-core</span>
                 <span className="text-white/40">Headless logic engine.</span>
               </div>
               <div className="flex items-center justify-between border-t border-dashed border-red-500/40 py-2.5">
                 <span className="text-white/80">axiom-ui</span>
                 <span className="text-white/40">UI components.</span>
               </div>
               <div className="flex items-center justify-between border-t border-dashed border-red-500/40 py-2.5 border-b">
                 <span className="text-white/80">axiom-ai</span>
                 <span className="text-white/40">Local LLM extensions.</span>
               </div>
             </div>
           </div>

           {/* Card 3 */}
           <div className="bg-[#0f0f11] border border-white/5 rounded-2xl p-8 overflow-hidden relative min-h-[300px] flex flex-col shadow-lg">
             <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight">Integrates everywhere.</h3>
             <p className="text-white/60 text-[14px] leading-relaxed mb-6">
               Designed to integrate with any <span className="text-[#fce075]">execution source</span>, Axiom works on Binance, Interactive Brokers, and even custom matching engines.
             </p>
             <div className="flex items-center gap-4 text-[#fce075] text-[13px] font-bold mb-6 tracking-wide">
               <span>Binance</span>
               <span>IBKR</span>
               <span>Coinbase</span>
             </div>

             <div className="mt-auto bg-[#18181A] border border-white/5 rounded-xl p-4 font-mono text-[11px] shadow-inner">
               <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3 text-white/40">
                 Axiom Broker
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
               </div>
               <span className="text-pink-400">import</span> {'{'} loader {'}'} <span className="text-pink-400">from</span> <span className="text-[#fce075]">'axiom/source'</span>;<br/>
               <span className="text-pink-400">export const</span> source = loader({'{'}<br/>
               &nbsp;&nbsp;venue: <span className="text-[#fce075]">'BINANCE_FUTURES'</span><br/>
               {'}'});
             </div>
           </div>

           {/* Card 4 */}
           <div className="bg-[#0f0f11] border border-white/5 rounded-2xl p-8 overflow-hidden relative min-h-[300px] shadow-lg">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJCTxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSIjZWE1ODBjIi8+Cjwvc3ZnPg==')] opacity-10 mix-blend-screen mix-blend-plus-lighter"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-600/20 blur-[60px] rounded-full"></div>
             
             {/* Abstract Mockup Back Window */}
             <div className="absolute top-10 left-6 w-[85%] h-[200px] bg-[#221c13]/90 rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden backdrop-blur-md">
                <div className="text-white/40 text-[11px] font-mono px-3 py-2.5 border-b border-white/5 flex items-center justify-between">My Contexts</div>
                <div className="p-3 space-y-1.5 text-[12px] text-white/70 font-medium">
                  <div className="flex items-center justify-between hover:bg-white/5 p-1.5 rounded cursor-pointer transition-colors">
                    <span className="flex items-center gap-2.5"><Globe className="w-3.5 h-3.5 text-white/40"/> Spot Markets</span>
                    <span className="bg-[#fce075] text-[#111] px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-wide">Active</span>
                  </div>
                  <div className="flex items-center justify-between hover:bg-white/5 p-1.5 rounded cursor-pointer transition-colors">
                    <span className="flex items-center gap-2.5"><Database className="w-3.5 h-3.5 text-white/40"/> Derivatives</span>
                  </div>
                  <div className="flex items-center justify-between hover:bg-white/5 p-1.5 rounded cursor-pointer transition-colors">
                    <span className="flex items-center gap-2.5"><Activity className="w-3.5 h-3.5 text-white/40"/> FX Majors</span>
                  </div>
                </div>
             </div>

             {/* Abstract Mockup Front Window */}
             <div className="absolute top-32 right-6 w-[85%] h-[180px] bg-[#1a1a1a] rounded-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden">
                <div className="text-white/50 text-[11px] font-mono px-3 py-2.5 border-b border-white/5 bg-[#121212]">Execution Editor</div>
                <div className="p-4 font-mono text-[11px] text-white/70 leading-loose">
                  <span className="text-white/30">---</span><br/>
                  <span className="text-blue-300">strategy:</span> <span className="text-white">Mean Reversion</span><br/>
                  <span className="text-white/30">---</span><br/><br/>
                  <span className="text-blue-400 font-bold">#</span> Execute Strategy!<br/><br/>
                  <span className="text-white/80">This is my first live execution.</span>
                </div>
             </div>
           </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#020202] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center gap-2 text-white mb-1">
               <Terminal className="w-4 h-4" />
               <span className="text-sm font-extrabold tracking-widest uppercase">Axiom Terminal</span>
             </div>
             <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                Engineered by <a href="https://softpulser.com" target="_blank" rel="noreferrer" className="text-white hover:text-white/80 transition-colors underline underline-offset-4 decoration-white/30">Softpulser</a>
             </span>
          </div>
          
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.1em] font-bold text-white/40">
             <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
             <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
