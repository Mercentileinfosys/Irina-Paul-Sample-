import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Listings = () => {

  const listings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      price: '$1,250,000',
      title: 'Modern Luxury Villa',
      location: 'Lake Nona, Orlando',
      beds: 5,
      baths: 4,
      sqft: '4,200',
      badge: 'Featured',
      badgeColor: 'bg-gold'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      price: '$895,000',
      title: 'Contemporary Estate',
      location: 'Winter Park, Orlando',
      beds: 4,
      baths: 3,
      sqft: '3,500',
      badge: 'Hot',
      badgeColor: 'bg-red-500'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop',
      price: '$2,100,000',
      title: 'Waterfront Paradise',
      location: 'Windermere, Orlando',
      beds: 6,
      baths: 5,
      sqft: '5,800',
      badge: 'New',
      badgeColor: 'bg-green-500'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      price: '$1,650,000',
      title: 'Elegant Mansion',
      location: 'Dr. Phillips, Orlando',
      beds: 5,
      baths: 4,
      sqft: '4,800',
      badge: null
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
      price: '$725,000',
      title: 'Modern Retreat',
      location: 'Baldwin Park, Orlando',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      badge: null
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      price: '$950,000',
      title: 'Designer Home',
      location: 'Celebration, Orlando',
      beds: 4,
      baths: 3.5,
      sqft: '3,800',
      badge: 'Featured',
      badgeColor: 'bg-gold'
    }
  ]

  const PropertyCard3D = ({ listing, index }) => {
    const cardRef = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

    const handleMouseMove = (e) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5
      x.set(xPct)
      y.set(yPct)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
          delay: index * 0.1,
          duration: 0.6
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer"
      >
        <div className="relative overflow-hidden h-72" style={{ transform: "translateZ(40px)" }}>
          <motion.img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
          />

          {listing.badge && (
            <div className={`absolute top-4 left-4 ${listing.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm`} style={{ transform: "translateZ(80px)" }}>
              {listing.badge}
            </div>
          )}

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: "translateZ(60px)" }}>
            <div className="flex gap-4">
              <button className="bg-gold text-charcoal w-14 h-14 rounded-full font-bold flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-6 transition-transform">
                👁️
              </button>
              <button className="bg-white text-charcoal w-14 h-14 rounded-full font-bold flex items-center justify-center shadow-xl hover:scale-110 hover:-rotate-6 transition-transform">
                ❤️
              </button>
              <button className="bg-charcoal text-white w-14 h-14 rounded-full font-bold flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-6 transition-transform">
                +
              </button>
            </div>
          </div>

          <div className="absolute top-4 right-4" style={{ transform: "translateZ(80px)" }}>
            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:rotate-[360deg] transition-all duration-500">
              <span className="text-2xl">🏠</span>
            </div>
          </div>
        </div>

        <div className="p-6 relative" style={{ transform: "translateZ(20px)" }}>
          <div className="flex justify-between items-start mb-3">
            <div className="text-3xl font-bold text-gold">{listing.price}</div>
            <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:scale-125 hover:rotate-12 transition-transform">
              <span className="text-xl">→</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
            {listing.title}
          </h3>
          
          <p className="text-gray-600 mb-4 flex items-center gap-2">
            <span>📍</span> {listing.location}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200 group-hover:border-gold transition-colors">
            <span className="flex items-center gap-1 hover:scale-110 hover:text-gold transition-all">
              🛏️ {listing.beds} Beds
            </span>
            <span className="flex items-center gap-1 hover:scale-110 hover:text-gold transition-all">
              🛁 {listing.baths} Baths
            </span>
            <span className="flex items-center gap-1 hover:scale-110 hover:text-gold transition-all">
              📏 {listing.sqft} sqft
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-dark to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
        </div>
      </motion.div>
    )
  }

  return (
    <section id="listings" className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-sm font-bold tracking-widest uppercase bg-gold/10 px-6 py-2 rounded-full border border-gold/30"
          >
            Premium Properties
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mt-6 mb-6"
          >
            Our Luxury <span className="text-gold relative">
              Collection
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-3 bg-gold/20 -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover Orlando's most sought-after luxury properties with breathtaking designs and premium amenities
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {listings.map((listing, index) => (
            <PropertyCard3D key={listing.id} listing={listing} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(212, 175, 55, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-r from-gold via-gold-dark to-gold text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl transition-all flex items-center gap-3 mx-auto group overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-dark"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="relative z-10">View All Properties</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10 text-2xl"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Listings
