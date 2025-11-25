import { motion } from 'framer-motion'
import { useState } from 'react'

const YouTube = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null)

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop',
      title: 'Top 5 Orlando Neighborhoods for Luxury Living',
      views: '25K',
      time: '2 days ago',
      duration: '12:45'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop',
      title: '$2M Luxury Estate Tour - Windermere',
      views: '42K',
      time: '5 days ago',
      duration: '18:32'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=450&fit=crop',
      title: 'Orlando Real Estate Market Update 2024',
      views: '38K',
      time: '1 week ago',
      duration: '15:20'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=450&fit=crop',
      title: 'How to Buy a Home Remotely in Orlando',
      views: '56K',
      time: '2 weeks ago',
      duration: '22:15'
    }
  ]

  return (
    <section id="youtube" className="py-24 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-red-600 rounded-full px-6 py-3 mb-6"
          >
            <span className="text-3xl">📽️</span>
            <span className="font-bold text-lg">I'm on YouTube!</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Market Insights & <span className="text-gold">Property Tours</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
            Get insider access to Orlando real estate tips, market updates, and exclusive property tours
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 mx-auto shadow-2xl"
          >
            <span>▶️</span>
            <span>Subscribe to My Channel</span>
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 shadow-2xl">
                <motion.img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                  animate={{ scale: hoveredVideo === video.id ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: hoveredVideo === video.id ? 1.2 : 1
                    }}
                    className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <span className="text-3xl ml-1">▶️</span>
                  </motion.div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-sm font-bold">
                  {video.duration}
                </div>
              </div>

              <h4 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                {video.title}
              </h4>
              <p className="text-white/60 text-sm">
                {video.views} views • {video.time}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default YouTube
