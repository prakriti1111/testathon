const tracks = [
  { id: "01", title: "Web 3.0", desc: "Building the decentralized backbone of the future internet." },
  { id: "02", title: "AI/ML", desc: "Developing adaptive neural systems and cognitive automation." },
  { id: "03", title: "CyberSec", desc: "Architecting digital fortresses against next-gen threats." },
  { id: "04", title: "Cloud Ops", desc: "Engineered for infinite scalability and cloud-native resilience." }
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h3 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
            The <span className="text-gradient">Tracks</span>
          </h3>
          <p className="text-gray-400 font-mono mt-4 tracking-widest text-xs uppercase opacity-70">// SELECT_MISSION_PARAMETER</p>
        </div>
        <div className="h-[1px] flex-grow mx-8 bg-white/10 hidden md:block mb-4"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tracks.map((track, i) => (
          <div 
            key={i} 
            className="group relative transition-all duration-500 ease-out hover:-translate-y-4 cursor-pointer"
          >
            
            <div className="absolute -inset-1 bg-linear-to-tr from-accent/40 via-purple-500/20 to-accent/40 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            
            <div className="relative h-full p-8 rounded-[2.5rem] 
              bg-white/[0.08] backdrop-blur-3xl 
              border-2 border-white/20 
              flex flex-col justify-between overflow-hidden 
              group-hover:border-accent/60 group-hover:bg-white/[0.12]
              group-hover:shadow-[0_0_40px_rgba(0,242,255,0.15)]
              transition-all duration-500 shadow-2xl"
            >
              
              
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-linear-to-r from-accent via-white to-purple-500 group-hover:w-full transition-all duration-700 delay-100" />

              <div>
                
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-500">
                    <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_#00f2ff]" />
                  </div>
                  <span className="text-4xl font-black text-white/10 font-mono tracking-tighter group-hover:text-accent/20 transition-colors">
                    {track.id}
                  </span>
                </div>

                <h4 className="text-2xl font-black mb-4 tracking-tight text-white uppercase italic group-hover:text-accent transition-colors">
                  {track.title}
                </h4>
                
                <p className="text-gray-300 text-sm leading-relaxed font-medium group-hover:text-white transition-colors">
                  {track.desc}
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-center overflow-hidden">
                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 group-hover:text-white uppercase translate-y-0 transition-transform">
                  Access_Directives
                </span>
                
                <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_20px_#00f2ff] transition-all duration-500">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:text-black transition-colors rotate-0 group-hover:rotate-45">
                    <path d="M1 13L13 1M13 1H1M13 1V13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="absolute -inset-full bg-linear-to-tr from-white/0 via-white/[0.05] to-white/0 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}