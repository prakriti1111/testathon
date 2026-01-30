// hooks/useLenis.js
import Lenis from 'lenis'
import { useEffect } from 'react'

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Increase this for slower, more "luxurious" scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    })

    // Attach to window so other components can find it
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy();
    }
  }, [])
}