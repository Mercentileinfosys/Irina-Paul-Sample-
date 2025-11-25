import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import contactRoutes from './routes/contactRoutes.js'
import listingRoutes from './routes/listingRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/irina-paul-realty'

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err))

app.get('/', (req, res) => {
  res.json({ message: 'Irina Paul Realty API Server' })
})

app.use('/api/contact', contactRoutes)
app.use('/api/listings', listingRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
