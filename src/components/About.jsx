import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const highlights = [
    { icon: '🏘️', title: 'Orlando Expert', desc: 'Deep knowledge of all Orlando neighborhoods' },
    { icon: '📈', title: '11+ Years Success', desc: 'Proven track record in luxury real estate' },
    { icon: '📍', title: 'Remote & Local', desc: 'Buy and sell from anywhere in the world' },
    { icon: '🏢', title: 'Future Home Realty', desc: "Backed by Orlando's premier real estate firm" },
    { icon: '📽️', title: 'YouTube Active', desc: 'Market insights & property tours online' }
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-charcoal/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                  alt="Irina Paul - Orlando Realtor"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gold text-charcoal rounded-2xl p-8 shadow-2xl"
              >
                <h3 className="text-5xl font-bold mb-2">11+</h3>
                <p className="text-sm font-semibold">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold text-sm font-bold tracking-widest uppercase">About Me</span>
            <h2 className="text-4xl lg:text-6xl font-bold mt-4 mb-6">
              Meet <span className="text-gold">Irina Paul</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With over 11 years of dedicated experience in the Orlando real estate market, I specialize in turning property dreams into reality. Whether you're buying your first home, selling a cherished property, or investing in Orlando's thriving market, I provide personalized guidance every step of the way.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg text-charcoal mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold to-gold-dark text-charcoal px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <span>Learn More About Me</span>
              <span>→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
