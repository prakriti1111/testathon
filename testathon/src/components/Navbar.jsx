import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power4.out", 
          delay: 0.8,
          clearProps: "all" 
        }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target && window.lenis) {
      window.lenis.scrollTo(target, {
        offset: -80,
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[999] px-6 py-4 flex justify-between items-center bg-[#05070b]/80 backdrop-blur-xl border-b border-white/10"
    >
      {/* BRANDING: Matches Hero Gradient */}
      <div className="text-2xl font-black italic tracking-tighter text-white select-none">
        TESTA<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">THON</span>
      </div>

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center gap-8 px-8 py-2 rounded-full bg-white/5 border border-white/10">
        {['about', 'tracks', 'timeline'].map((link) => (
          <a 
            key={link}
            href={`#${link}`} 
            onClick={(e) => handleScroll(e, `#${link}`)}
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-cyan-400 transition-colors capitalize"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA BUTTON: Matches Hero fill-up style */}
      <button className="group relative px-6 py-2 bg-white text-black border border-white rounded-full text-[10px] font-black tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95 cursor-pointer uppercase">
        <span className="relative z-10">Join Portal</span>
        <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>
    </nav>
  );
}