import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Listings', href: '#listings' },
    { name: 'Why Choose', href: '#why-choose' },
    { name: 'Market Insights', href: '#market' },
    { name: 'YouTube', href: '#youtube' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl' : 'bg-white/90 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col cursor-pointer relative"
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-bold tracking-tight text-charcoal"
            >
              Irina Paul
            </motion.h2>
            <motion.span
              className="text-xs lg:text-sm text-gold tracking-widest"
              animate={{
                letterSpacing: scrolled ? '0.1em' : '0.15em'
              }}
            >
              REALTOR
            </motion.span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gold"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.href.replace('#', ''))}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="relative text-sm font-medium tracking-wide transition-colors duration-300 text-charcoal hover:text-gold"
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gold"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-gold via-gold-dark to-gold text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wide shadow-lg relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-dark"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            <span className="relative z-10">Book Consultation</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal"
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  y: mobileOpen ? 8 : 0
                }}
                className="w-full h-0.5 bg-charcoal"
              />
              <motion.span
                animate={{
                  opacity: mobileOpen ? 0 : 1
                }}
                className="w-full h-0.5 bg-charcoal"
              />
              <motion.span
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -8 : 0
                }}
                className="w-full h-0.5 bg-charcoal"
              />
            </div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-xl"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileTap={{ scale: 0.95 }}
                  className="block text-charcoal hover:text-gold transition-colors py-3 text-base font-medium border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-4 rounded-full font-semibold text-sm mt-4 shadow-lg"
              >
                Book Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
