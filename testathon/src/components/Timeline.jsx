import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const schedule = [
  { time: "09:00 AM", event: "Check-in & Breakfast", day: "Day 1" },
  { time: "11:00 AM", event: "Opening Ceremony", day: "Day 1" },
  { time: "02:00 PM", event: "Hacking Begins", day: "Day 1" },
  { time: "10:00 AM", event: "Mid-way Mentorship", day: "Day 2" },
  { time: "04:00 PM", event: "Final Pitching", day: "Day 2" },
];

export default function Timeline() {
  const lineRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        }
      });

      
      gsap.utils.toArray(".timeline-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 30,
          duration: 0.8
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" ref={containerRef} className="py-32 px-10 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-24">
        <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-none">
          The <span className="text-gradient">Blueprint</span>
        </h2>
        <p className="text-gray-400 font-mono mt-4 tracking-[0.3em] text-xs uppercase opacity-70">
          // MISSION_LOG_SEQUENCE_2026
        </p>
      </div>
      
      <div className="relative">
        
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-[2px] h-full bg-white/10 origin-top">
          <div ref={lineRef} className="w-full h-full bg-gradient-to-b from-accent via-purple to-accent scale-y-0 origin-top shadow-[0_0_20px_rgba(0,242,255,0.5)]" />
        </div>

        {schedule.map((item, index) => (
          <div key={index} className={`relative flex items-center justify-between mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            <div className="hidden md:block w-5/12" />
            
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-bg border-2 border-accent rounded-full z-10 shadow-[0_0_15px_#00f2ff]">
               <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
            </div>

            <div className="w-full md:w-5/12 pl-10 md:pl-0 timeline-card">
              <div className="group relative">
                
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-purple/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative p-8 rounded-3xl 
                  /* Match Tracks: Higher Opacity + Heavier Border */
                  bg-white/[0.08] backdrop-blur-3xl 
                  border-2 border-white/20 
                  group-hover:border-accent/60 group-hover:bg-white/[0.12]
                  transition-all duration-300 shadow-2xl"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1 rounded-full border-2 border-accent/30 text-accent font-mono text-[10px] font-bold tracking-widest uppercase">
                      {item.day}
                    </span>
                    <span className="text-gray-400 font-mono text-[10px] font-bold tracking-widest">{item.time}</span>
                  </div>
                  
                  <h4 className="text-2xl font-black italic uppercase group-hover:text-accent transition-colors duration-300 tracking-tighter">
                    {item.event}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mt-4 leading-relaxed font-medium">
                    Detailed system briefing and strategic alignment for all participating units. 
                    Prepare for high-velocity execution.
                  </p>
                  
                  <div className="absolute bottom-5 right-5 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M24 24V0M24 24H0" stroke="currentColor" strokeWidth="3"/>
                    </svg>
                  </div>

                  
                  <div className="absolute inset-0 bg-linear-to-br from-white/[0.05] to-transparent pointer-events-none rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}