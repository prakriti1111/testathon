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

      const asteroids = gsap.utils.toArray(".asteroid-item")

      asteroids.forEach((ast) => {
        const angle = Math.random() * Math.PI * 2
        const depth = Math.random()

        const startRadius = 1600
        const endRadius = 400 

        const startX = Math.cos(angle) * startRadius
        const startY = Math.sin(angle) * startRadius
        const endX = Math.cos(angle) * endRadius
        const endY = Math.sin(angle) * endRadius

        const startScale = 4.0 + depth * 3.0   
        const endScale = 0.5 

        gsap.set(ast, { 
          autoAlpha: 0, 
          x: startX, 
          y: startY, 
          scale: startScale 
        })

        const tl = gsap.timeline({
          repeat: -1,
          delay: Math.random() * 5,
        })

        tl.fromTo(
          ast,
          {
            x: startX,
            y: startY,
            z: -800,
            scale: startScale,
            autoAlpha: 0,
            filter: "blur(4px)",
          },
          {
            x: endX,
            y: endY,
            z: 0,
            scale: endScale, 
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.6 + depth * 0.4, 
            ease: "power2.in",
          }
        ).to(ast, {
          autoAlpha: 0,
          duration: 0.2,
          ease: "none"
        })

        gsap.to(ast, {
          rotateX: Math.random() * 360 + 720,
          rotateY: Math.random() * 360 + 720,
          rotateZ: Math.random() * 360,
          duration: 3,
          repeat: -1,
          ease: "none",
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen overflow-hidden bg-[#020408] text-white flex items-center justify-center perspective-[1500px]"
    >

      <div className="absolute w-[800px] h-[800px] border border-cyan-500/20 rounded-full animate-pulse pointer-events-none" />

      
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="asteroid-item absolute invisible" 
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative">
              
              <div 
                className="w-[16px] h-[24px] bg-white shadow-[0_0_40px_rgba(255,255,255,0.8),0_0_20px_rgba(34,211,238,0.5)]" 
                style={{
                  clipPath: 'polygon(50% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%)',
                  background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 50%, #3f3f46 100%)'
                }}
              />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[3px] h-40 bg-linear-to-t from-transparent via-cyan-500/50 to-white blur-[2px] opacity-60" />
            </div>
          </div>
        ))}
      </div>

      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="hero-reveal inline-block px-4 py-1 border border-cyan-500/30 rounded-full mb-6 bg-cyan-500/5">
          <h2 className="text-[10px] tracking-[0.6em] text-cyan-400 font-mono uppercase">
            // Orbital_Entry_Detected
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