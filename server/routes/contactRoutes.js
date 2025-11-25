import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body

    if (!name || !email || !phone || !interest || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const contact = new Contact({
      name,
      email,
      phone,
      interest,
      message
    })

    await contact.save()

    res.status(201).json({
      message: 'Contact form submitted successfully',
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email
      }
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    res.status(500).json({ error: 'Failed to submit contact form' })
  }
})

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
})

router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
    
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }
    
    res.json(contact)
  } catch (error) {
    console.error('Error updating contact status:', error)
    res.status(500).json({ error: 'Failed to update contact status' })
  }
})

export default router
