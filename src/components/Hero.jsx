import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.from(".hero-reveal", {
        y: 80,
        opacity: 0,
        duration: 1.1,
        stagger: 0.16,
        ease: "power4.out",
        delay: 0.5
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen overflow-hidden bg-[#020408] text-white flex items-center justify-center"
    >
      
      <div className="absolute w-[800px] h-[800px] border border-cyan-500/20 rounded-full animate-pulse pointer-events-none" />

      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="hero-reveal inline-block px-4 py-1 border border-cyan-500/30 rounded-full mb-6 bg-cyan-500/5">
          <h2 className="text-[10px] tracking-[0.6em] text-cyan-400 font-mono uppercase">
            // System_Ready
          </h2>
        </div>

        <h1 className="hero-reveal text-7xl md:text-9xl font-black italic tracking-tighter mb-6 leading-none">
          TESTA
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            THON
          </span>
        </h1>

        <p className="hero-reveal text-gray-400 max-w-lg mx-auto mb-10 text-lg md:text-xl font-light leading-relaxed">
          A high-velocity collision of <span className="text-white italic font-medium">code and creativity</span>.
        </p>

        <div className="hero-reveal">
          <button className="group relative px-12 py-4 bg-white text-black font-bold rounded-full transition-transform hover:scale-105 active:scale-95 cursor-pointer overflow-hidden">
            <span className="relative z-10 tracking-[0.2em] uppercase">Get Started</span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}