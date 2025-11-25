import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei'
import gsap from 'gsap'
import * as THREE from 'three'

const AnimatedSphere = () => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#D4AF37"
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  )
}

const PropertyImage3D = ({ image, index }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() + index) * 0.2
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2.5, 0.1]} />
        <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.4} />
      </mesh>
    </Float>
  )
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState('buy')
  const statsRef = useRef([])
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    statsRef.current.forEach((stat) => {
      if (!stat) return
      const target = parseInt(stat.dataset.count)
      gsap.to(stat, {
        innerHTML: target,
        duration: 2.5,
        ease: 'power2.out',
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: stat,
          start: 'top 80%'
        }
      })
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  }

  const properties = [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop'
  ]

  return (
    <>
      <section id="home" className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#D4AF37" />
            <AnimatedSphere />
            <Environment preset="sunset" />
          </Canvas>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${i % 2 === 0 ? '#D4AF37' : '#1a1a1a'}, transparent)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6"
                >
                  <span className="text-xl">🏠</span>
                  <span className="text-charcoal font-medium text-sm">Real Estate Agency</span>
                </motion.div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight mb-6"
              >
                Build Your Future.<br />
                One <span className="text-gold relative">
                  Property
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-3 bg-gold/20"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span> at a Time.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 max-w-xl"
              >
                Enim tempus eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              >
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                  <h3 ref={(el) => (statsRef.current[0] = el)} data-count={100} className="text-3xl font-bold text-gold">0</h3>
                  <p className="text-xs text-gray-600 mt-1">100% Satisfied</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                  <h3 ref={(el) => (statsRef.current[1] = el)} data-count={500} className="text-3xl font-bold text-gold">0</h3>
                  <p className="text-xs text-gray-600 mt-1">500+ Properties</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                  <h3 ref={(el) => (statsRef.current[2] = el)} data-count={150} className="text-3xl font-bold text-gold">0</h3>
                  <p className="text-xs text-gray-600 mt-1">150+ Awards</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                  <h3 ref={(el) => (statsRef.current[3] = el)} data-count={200} className="text-3xl font-bold text-gold">0</h3>
                  <p className="text-xs text-gray-600 mt-1">200+ Clients</p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-3xl shadow-2xl p-8"
              >
                <div className="flex gap-4 mb-6">
                  {['buy', 'rent', 'sell'].map((tab) => (
                    <motion.button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                        activeTab === tab
                          ? 'bg-charcoal text-white shadow-lg'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </motion.button>
                  ))}
                </div>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      placeholder="Find the perfect place"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">📍</span>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.select
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors bg-white"
                    >
                      <option>Property Type</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                    </motion.select>

                    <motion.select
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors bg-white"
                    >
                      <option>Price Range</option>
                      <option>$0 - $500k</option>
                      <option>$500k - $1M</option>
                      <option>$1M+</option>
                    </motion.select>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-gold to-gold-dark text-white py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <span>🔍</span>
                    <span>Search Properties</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {properties.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + idx * 0.2 }}
                    style={{
                      position: idx > 0 ? 'absolute' : 'relative',
                      top: idx === 1 ? '50%' : idx === 2 ? '70%' : 'auto',
                      right: idx === 1 ? '-10%' : idx === 2 ? '5%' : 'auto',
                      zIndex: 3 - idx
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5, 
                      rotateX: -5,
                      zIndex: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <motion.img
                        src={img}
                        alt={`Property ${idx + 1}`}
                        className={`object-cover ${idx === 0 ? 'w-96 h-[500px]' : 'w-72 h-80'}`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="absolute bottom-0 left-0 right-0 p-6 text-white"
                      >
                        <h4 className="text-2xl font-bold mb-1">Luxury Villa</h4>
                        <p className="text-sm opacity-90">📍 Orlando, FL</p>
                        <p className="text-xl font-bold mt-2">$1,250,000</p>
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-2xl">
                        🏠
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Property ID</p>
                        <p className="font-bold text-charcoal">#{1000 + idx}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-gold/30 rounded-full"
              />
              
              <motion.div
                animate={{ 
                  rotate: -360,
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border-4 border-charcoal/20 rounded-full"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-charcoal/30 rounded-full mx-auto flex justify-center cursor-pointer hover:border-gold transition-colors"
          >
            <motion.div 
              className="w-2 h-3 bg-gold rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default Hero
