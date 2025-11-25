import express from 'express'
import Listing from '../models/Listing.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { status, featured, location, minPrice, maxPrice, minBeds, maxBeds } = req.query
    
    let query = {}
    
    if (status) query.status = status
    if (featured) query.featured = featured === 'true'
    if (location) query.location = new RegExp(location, 'i')
    if (minPrice || maxPrice) {
      query.price = {}
      if (minPrice) query.price.$gte = Number(minPrice)
      if (maxPrice) query.price.$lte = Number(maxPrice)
    }
    if (minBeds || maxBeds) {
      query['features.bedrooms'] = {}
      if (minBeds) query['features.bedrooms'].$gte = Number(minBeds)
      if (maxBeds) query['features.bedrooms'].$lte = Number(maxBeds)
    }
    
    const listings = await Listing.find(query).sort({ createdAt: -1 })
    res.json(listings)
  } catch (error) {
    console.error('Error fetching listings:', error)
    res.status(500).json({ error: 'Failed to fetch listings' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id)
    
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' })
    }
    
    res.json(listing)
  } catch (error) {
    console.error('Error fetching listing:', error)
    res.status(500).json({ error: 'Failed to fetch listing' })
  }
})

router.post('/', async (req, res) => {
  try {
    const listing = new Listing(req.body)
    await listing.save()
    res.status(201).json(listing)
  } catch (error) {
    console.error('Error creating listing:', error)
    res.status(500).json({ error: 'Failed to create listing' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' })
    }
    
    res.json(listing)
  } catch (error) {
    console.error('Error updating listing:', error)
    res.status(500).json({ error: 'Failed to update listing' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id)
    
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' })
    }
    
    res.json({ message: 'Listing deleted successfully' })
  } catch (error) {
    console.error('Error deleting listing:', error)
    res.status(500).json({ error: 'Failed to delete listing' })
  }
})

export default router
