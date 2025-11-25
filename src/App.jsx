import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Listings from './components/Listings'
import WhyChoose from './components/WhyChoose'
import Market from './components/Market'
import YouTube from './components/YouTube'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Listings />
      <WhyChoose />
      <Market />
      <YouTube />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
