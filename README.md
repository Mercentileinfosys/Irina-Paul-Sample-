# Irina Paul – Luxury Real Estate Website

A stunning, full-stack luxury real estate website for Irina Paul - Realtor at Future Home Realty, featuring extensive 3D animations, premium UI/UX, and modern tech stack.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Axios** - API requests

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM

## 📦 Installation

1. **Clone the repository**
```bash
cd "Real Estate For Sarah"
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and configure your MongoDB connection:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/irina-paul-realty
```

4. **Start MongoDB** (if running locally)
```bash
mongod
```

## 🏃 Running the Application

### Development Mode (Frontend + Backend)
```bash
npm run dev
```

This will start:
- Frontend dev server on `http://localhost:3000`
- Backend API server on `http://localhost:5000`

### Run Frontend Only
```bash
npm run client
```

### Run Backend Only
```bash
npm run server
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
Real Estate For Sarah/
├── src/                    # Frontend React app
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Listings.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Market.jsx
│   │   ├── YouTube.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── CustomCursor.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/                 # Backend Express app
│   ├── models/             # Mongoose models
│   │   ├── Contact.js
│   │   └── Listing.js
│   ├── routes/             # API routes
│   │   ├── contactRoutes.js
│   │   └── listingRoutes.js
│   └── index.js
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Features

- **3D Hero Animation** - Interactive Three.js sphere with dynamic lighting
- **Parallax Scrolling** - Smooth depth effects throughout the site
- **Animated Statistics** - Counter animations on scroll
- **3D Property Cards** - Hover lift effects on listings
- **Glassmorphism** - Modern frosted glass UI elements
- **Custom Cursor** - Magnetic interactive cursor
- **Responsive Design** - Mobile-first approach
- **Contact Form** - Full-stack form with MongoDB storage
- **YouTube Integration** - Video showcase section
- **Market Insights** - Real-time data cards with animations
- **Testimonials Slider** - Auto-rotating client reviews

## 🔌 API Endpoints

### Contact Routes
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PATCH /api/contact/:id/status` - Update contact status

### Listing Routes
- `GET /api/listings` - Get all listings (with filters)
- `GET /api/listings/:id` - Get single listing
- `POST /api/listings` - Create new listing
- `PUT /api/listings/:id` - Update listing
- `DELETE /api/listings/:id` - Delete listing

## 🎯 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Backend server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/irina-paul-realty` |

## 🌐 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the 'dist' folder
```

### Backend (Heroku/Railway/Render)
Set environment variables and deploy the root directory.

### Database (MongoDB Atlas)
Update `MONGODB_URI` with your Atlas connection string.

## 👩‍💼 Brand Information

- **Realtor**: Irina Paul
- **Company**: Future Home Realty
- **Location**: Orlando, Florida
- **Experience**: 11+ Years
- **Tagline**: "Turning Orlando Real Estate Dreams Into Reality"

## 🎨 Color Palette

- **Gold**: `#D4AF37`
- **Charcoal**: `#1A1A1A`
- **White**: `#FFFFFF`
- **Soft Slate**: `#E5E7EB`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2024 Irina Paul - Future Home Realty. All rights reserved.
