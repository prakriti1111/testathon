import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef();
  const visualRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
     
      gsap.from(".about-text-element", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out"
      });

      
      gsap.to(".about-visual", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        y: -60, 
        rotationZ: -2
      });

      
      gsap.to(".shimmer-line", {
        x: "200%",
        duration: 2,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = visualRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(visualRef.current, {
      rotationY: x * 15, 
      rotationX: -y * 15, 
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.6
    });
  };

  const handleMouseLeave = () => {
    gsap.to(visualRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <section 
      ref={sectionRef} 
      id="about"
      className="min-h-screen w-full flex items-center justify-center py-20 px-6 md:px-20 overflow-hidden relative"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        
       
        <div className="z-10">
          <h2 className="about-text-element text-5xl md:text-7xl font-black italic mb-8 uppercase tracking-tighter leading-none">
            Pushing <br/> 
            <span className="text-gradient">Boundaries</span>
          </h2>
          <p className="about-text-element text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-8">
            Testathon isn't just a hackathon. It's a high-pressure environment designed to test 
            your logic, resilience, and creativity. Join <span className="text-accent italic">500+ developers</span> in a 48-hour 
            journey of pure creation.
          </p>
          
          <div className="about-text-element flex gap-4 items-center group cursor-crosshair">
            <div className="h-[2px] w-12 bg-accent transition-all duration-500 group-hover:w-24 group-hover:bg-purple-500"></div>
            <span className="text-accent font-mono text-sm tracking-[0.3em] uppercase group-hover:text-white transition-colors">
              // Initialized_2026
            </span>
          </div>
        </div>

        <div 
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="about-visual relative h-[450px] md:h-[550px] w-full glass rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden group shadow-2xl transition-shadow hover:shadow-accent/10"
        >
          
          <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] overflow-hidden">
            <div className="shimmer-line absolute top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>

          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            
            <div className="w-56 h-56 rounded-full border border-accent/20 flex items-center justify-center">
                <div className="w-44 h-44 rounded-full border-2 border-accent/40 flex items-center justify-center animate-[spin_15s_linear_infinite]">
                    
                    <div className="absolute top-0 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_#00f2ff]"></div>
                    <div className="absolute bottom-0 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_#7000ff]"></div>
                </div>
                
                <div className="absolute w-24 h-24 bg-accent/20 blur-[40px] rounded-full animate-pulse"></div>
            </div>

           
            <div className="absolute top-10 right-10 p-5 glass rounded-2xl border-white/10 backdrop-blur-2xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[10px] font-mono text-accent mb-2">OS_VERSION: 4.2.0</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`h-3 w-1 ${i < 4 ? 'bg-accent' : 'bg-white/10'} rounded-full`}></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 left-10 p-5 glass rounded-2xl border-white/10 backdrop-blur-2xl group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500">
              <p className="text-[10px] font-mono text-purple uppercase mb-1">Live_Telemetry</p>
              <p className="text-3xl font-black font-mono tracking-tighter">048:<span className="text-accent animate-pulse">00</span>:00</p>
            </div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          </div>
        </div>

      </div>

      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] -z-10 rounded-full animate-pulse"></div>
    </section>
  );
}