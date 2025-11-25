import mongoose from 'mongoose'

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  features: {
    bedrooms: {
      type: Number,
      required: true
    },
    bathrooms: {
      type: Number,
      required: true
    },
    sqft: {
      type: Number,
      required: true
    },
    yearBuilt: Number,
    lotSize: Number,
    garage: Number
  },
  images: [{
    url: String,
    alt: String
  }],
  amenities: [String],
  badge: {
    text: String,
    color: String
  },
  status: {
    type: String,
    enum: ['active', 'pending', 'sold'],
    default: 'active'
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

listingSchema.pre('save', function(next) {
  this.updatedAt = Date.now()
  next()
})

export default mongoose.model('Listing', listingSchema)
