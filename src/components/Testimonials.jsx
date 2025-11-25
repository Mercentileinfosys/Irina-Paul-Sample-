import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: "Irina made our dream home a reality. Her knowledge of the Orlando market is unmatched, and she guided us through every step with professionalism and care. We couldn't be happier!",
      name: 'Michael Anderson',
      role: 'Lake Nona Homeowner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      stars: 5
    },
    {
      id: 2,
      text: "Working with Irina was an absolute pleasure. She sold our home in just 10 days and got us above asking price! Her marketing strategy and negotiation skills are top-tier.",
      name: 'Sarah Martinez',
      role: 'Winter Park Seller',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      stars: 5
    },
    {
      id: 3,
      text: "As first-time buyers, we were nervous, but Irina made the process smooth and stress-free. She found us the perfect home within our budget and was patient with all our questions.",
      name: 'David Chen',
      role: 'Baldwin Park Buyer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      stars: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-charcoal/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Client Success Stories</span>
          <h2 className="text-4xl lg:text-6xl font-bold mt-4 mb-6">
            What Clients <span className="text-gold">Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from satisfied homeowners
          </p>
        </motion.div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="glass border border-gold/20 rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-3xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].text}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-gold"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-charcoal">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-gold w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
