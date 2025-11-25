import { motion } from 'framer-motion'

const Market = () => {
  const marketData = [
    {
      icon: '📈',
      title: 'Median Home Price',
      value: '$425,000',
      change: '+12.5% YoY',
      positive: true,
      desc: "Orlando's luxury market continues to show strong growth"
    },
    {
      icon: '⏱️',
      title: 'Average Days on Market',
      value: '32 Days',
      change: '-8 days',
      positive: true,
      desc: 'Homes are selling faster than ever in prime locations'
    },
    {
      icon: '🏘️',
      title: 'Inventory Levels',
      value: '2,847',
      change: '+5.2%',
      positive: true,
      desc: 'More options available for discerning buyers'
    },
    {
      icon: '💰',
      title: 'Investment ROI',
      value: '18.5%',
      change: '+3.2%',
      positive: true,
      desc: "Strong returns in Orlando's rental and resale markets"
    }
  ]

  const neighborhoods = [
    { name: 'Lake Nona', price: '$650K - $2M', image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&h=400&fit=crop' },
    { name: 'Winter Park', price: '$550K - $3M', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop' },
    { name: 'Windermere', price: '$800K - $5M', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop' },
    { name: 'Dr. Phillips', price: '$500K - $2.5M', image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&h=400&fit=crop' }
  ]

  return (
    <section id="market" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Data-Driven Insights</span>
          <h2 className="text-4xl lg:text-6xl font-bold mt-4 mb-6">
            Orlando Market <span className="text-gold">Intelligence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead with real-time market trends and opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {marketData.map((data, index) => (
            <motion.div
              key={data.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass border border-gold/20 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-5xl mb-4">{data.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">{data.title}</h3>
              <div className="text-4xl font-bold text-charcoal mb-2">{data.value}</div>
              <div className={`text-sm font-bold mb-4 ${data.positive ? 'text-green-500' : 'text-red-500'}`}>
                {data.change}
              </div>
              <p className="text-sm text-gray-600">{data.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Featured Orlando <span className="text-gold">Neighborhoods</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-72 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-2xl font-bold text-white mb-2">{neighborhood.name}</h4>
                  <p className="text-gold font-semibold">{neighborhood.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Market
