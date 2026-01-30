import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const footerRef = useRef();

  return (
    <footer className="px-6 md:px-20 pb-12 mt-20">
      
      <div 
        ref={footerRef}
        className="relative p-8 md:p-16 overflow-hidden rounded-[2.5rem] 
          /* Match Tracks: Higher Opacity + Heavier Border */
          bg-white/[0.08] backdrop-blur-3xl 
          border-2 border-white/20 
          shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
       
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent rounded-tl-[2.5rem] opacity-50" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-500 rounded-br-[2.5rem] opacity-50" />

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          
          <div>
            <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-4 text-white">
              TESTA<span className="text-gradient">THON</span>
            </h2>
            <p className="text-gray-300 max-w-sm leading-relaxed font-medium">
              An immersive 48-hour sprint where logic meets creativity. 
              Built for the next generation of problem solvers.
            </p>
            
            <div className="flex gap-4 mt-10">
              {['Twitter', 'Discord', 'Github'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="px-5 py-2 rounded-xl border-2 border-white/10 bg-white/5 text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-gray-400 hover:border-accent hover:text-white hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="space-y-4">
              <h4 className="text-accent font-mono text-xs tracking-[0.3em] uppercase font-black">Directives</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-400">
                <li><a href="#about" className="hover:text-accent transition-colors flex items-center gap-2"><span>//</span> Origins</a></li>
                <li><a href="#tracks" className="hover:text-accent transition-colors flex items-center gap-2"><span>//</span> Tracks</a></li>
                <li><a href="#timeline" className="hover:text-accent transition-colors flex items-center gap-2"><span>//</span> Schedule</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-purple-500 font-mono text-xs tracking-[0.3em] uppercase font-black">Telemetry</h4>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#00f2ff]" />
                <span className="text-[10px] font-black font-mono text-white uppercase tracking-tighter">Live_Portal_Open</span>
              </div>
              <p className="text-[10px] text-gray-500 font-mono pl-2 tracking-widest">LOC: 37.7749° N</p>
            </div>
          </div>
        </div>

        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold font-mono text-gray-500 tracking-[0.2em] uppercase">
          <p>© 2026 TESTATHON // SECURED_BY_ENCRYPTION</p>
          <div className="flex gap-6">
            <span className="text-white/20">v4.0.2</span>
            <p className="hover:text-white transition-colors cursor-pointer">Privacy_Protocol</p>
          </div>
        </div>

       
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
      </div>
    </footer>
  );
}