import { motion } from 'framer-motion'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Listings', href: '#listings' },
    { name: 'Why Choose', href: '#why-choose' }
  ]

  const resources = [
    { name: 'Market Insights', href: '#market' },
    { name: 'YouTube Channel', href: '#youtube' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold mb-2 cursor-pointer"
            >
              Irina Paul
            </motion.h3>
            <p className="text-gold text-sm tracking-widest mb-2">REALTOR</p>
            <p className="text-white/70 text-sm mb-4">Future Home Realty</p>
            <p className="text-white/60 italic">
              Turning Orlando Real Estate Dreams Into Reality
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-gold">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5, color: '#D4AF37' }}
                  className="block text-white/70 hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-gold">Resources</h4>
            <div className="space-y-3">
              {resources.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5, color: '#D4AF37' }}
                  className="block text-white/70 hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-gold">Contact</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <p className="flex items-center gap-2">
                <span>📞</span> +1 (407) 555-0123
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span> irina@futurehomerealty.com
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span> Orlando, Florida
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              {['📽️', '📱', '👍', '💼'].map((emoji, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-all"
                >
                  {emoji}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2024 Irina Paul - Future Home Realty. All rights reserved.</p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ color: '#D4AF37' }}
                className="hover:text-gold transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#D4AF37' }}
                className="hover:text-gold transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#D4AF37' }}
                className="hover:text-gold transition-colors"
              >
                Fair Housing
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
