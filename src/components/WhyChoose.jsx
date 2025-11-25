import { motion } from 'framer-motion'

const WhyChoose = () => {
  const reasons = [
    {
      icon: '🏙️',
      title: 'Orlando Expert',
      desc: "Deep knowledge of Orlando's luxury real estate market, neighborhoods, and investment opportunities."
    },
    {
      icon: '🌍',
      title: 'Remote Buying & Selling',
      desc: 'Seamlessly buy or sell properties from anywhere in the world with our advanced virtual processes.'
    },
    {
      icon: '⭐',
      title: '11+ Years Trusted',
      desc: 'Over a decade of proven success in luxury real estate transactions and client satisfaction.'
    },
    {
      icon: '💎',
      title: 'Personalized Guidance',
      desc: 'White-glove service tailored to your unique needs, preferences, and real estate goals.'
    },
    {
      icon: '📊',
      title: 'Market Insights',
      desc: 'Access to exclusive market data, pricing trends, and investment opportunities before they hit the market.'
    },
    {
      icon: '📸',
      title: 'Professional Marketing',
      desc: 'Stunning photography, 3D tours, and strategic marketing to showcase your property to qualified buyers.'
    }
  ]

  return (
    <section id="why-choose" className="py-24 lg:py-32 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Excellence in Service</span>
          <h2 className="text-4xl lg:text-6xl font-bold mt-4 mb-6">
            Why Choose <span className="text-gold">Irina Paul</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Experience luxury real estate service at its finest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <div className="glass-dark rounded-3xl p-8 h-full border border-white/10 hover:border-gold/50 transition-all duration-500">
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl inline-block"
                  >
                    {reason.icon}
                  </motion.div>
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gold">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
