import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useLenis';

export default function App() {
  useSmoothScroll();

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* 1. Navbar must have highest Z-index */}
      <Navbar /> 

      {/* 2. Fixed Background */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050505]">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      {/* 3. Main Content - Keep Z-index lower than Navbar */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Footer />
      </main>
    </div>
  );
}