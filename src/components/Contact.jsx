import { motion } from 'framer-motion'
import { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      await axios.post('/api/contact', formData)
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  const contactMethods = [
    { icon: '📞', title: 'Phone', value: '+1 (407) 555-0123' },
    { icon: '✉️', title: 'Email', value: 'irina@futurehomerealty.com' },
    { icon: '📍', title: 'Office', value: 'Future Home Realty, Orlando, FL' }
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-charcoal/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-bold tracking-widest uppercase">Get In Touch</span>
            <h2 className="text-4xl lg:text-6xl font-bold mt-4 mb-6">
              Work with <span className="text-gold">Irina Paul</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Ready to start your Orlando real estate journey? Let's connect and discuss how I can help you achieve your property goals.
            </p>

            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white transition-all cursor-pointer group"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-charcoal">{method.title}</h4>
                    <p className="text-gray-600">{method.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              {['📽️', '📱', '👍', '💼'].map((emoji, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:bg-gold transition-all"
                >
                  {emoji}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-gold focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-gold focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-gold focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-gold focus:bg-white outline-none transition-all"
                  >
                    <option value="">I'm interested in...</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="both">Both Buying & Selling</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your real estate needs..."
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-gold focus:bg-white outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-gold to-gold-dark text-charcoal px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Sending...</span>
                  ) : status === 'success' ? (
                    <span>✓ Sent Successfully!</span>
                  ) : status === 'error' ? (
                    <span>✗ Error. Try Again</span>
                  ) : (
                    <>
                      <span>Book Your Consultation</span>
                      <span>→</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
