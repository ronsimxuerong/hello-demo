# Tax Academy Singapore - eLearning Video Streaming Platform

A comprehensive video streaming platform for Tax Academy Singapore, built with modern web technologies to deliver an exceptional eLearning experience.

## 🎯 Project Overview

This platform enables users to access video content through:
- **Subscription plans** (monthly/annual)
- **Pay-per-view** options
- **Live webinars**
- **Free-to-view** educational videos

## 🏗️ Architecture

```
hello-demo/
├── frontend/          # Next.js frontend application
├── backend/           # Node.js/Express API server
├── shared/            # Shared types and utilities
├── docker/            # Docker configurations
└── docs/              # Documentation
```

## ✨ Key Features

### User Features
- ✅ User registration and login (email + social logins)
- ✅ Subscription management (monthly/annual plans)
- ✅ Pay-per-view access to premium content
- ✅ Free videos without login requirement
- ✅ Live webinar access and playback
- ✅ Personalized user dashboard and viewing history
- ✅ Advanced search, filtering, and categorization
- ✅ Responsive design (desktop, tablet, mobile)

### Admin Features
- ✅ Admin dashboard for content and user management
- ✅ Video upload, categorization, and playlist tools
- ✅ Subscription and payment tracking
- ✅ Live webinar scheduling and moderation tools
- ✅ Analytics dashboard for engagement and revenue
- ✅ Role-based access control

### Technical Features
- ✅ Secure payment gateway integration (Stripe, PayPal)
- ✅ CDN-enabled video streaming
- ✅ Google Cloud hosting with load balancing
- ✅ SSL encryption and data protection compliance
- ✅ Scalable infrastructure
- ✅ Uptime monitoring & alerting

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with SSR
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Query** - Data fetching
- **Zustand** - State management
- **Stripe** - Payment integration

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **PostgreSQL** - Database
- **Prisma** - ORM
- **JWT** - Authentication
- **Stripe API** - Payment processing
- **AWS S3/CloudFront** - Video storage & CDN

### Infrastructure
- **Docker** - Containerization
- **Google Cloud Platform** - Hosting
- **Nginx** - Load balancer
- **Redis** - Caching

## 📁 Project Structure

```
frontend/
├── app/                 # Next.js app directory
│   ├── (auth)/         # Authentication pages
│   ├── (dashboard)/    # User dashboard
│   ├── admin/          # Admin pages
│   └── api/            # API routes
├── components/          # React components
├── lib/                # Utilities and helpers
├── hooks/              # Custom React hooks
└── types/              # TypeScript types

backend/
├── src/
│   ├── controllers/    # Route controllers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── middleware/    # Express middleware
│   ├── services/      # Business logic
│   ├── utils/         # Utilities
│   └── config/        # Configuration
├── prisma/             # Prisma schema
└── tests/              # Test files

shared/
└── types/              # Shared TypeScript types
```

## 🛠️ Development Setup

### Prerequisites
- **Node.js 18+ and npm/yarn** - [Download Node.js](https://nodejs.org/)
  - ⚠️ **Having issues?** See [Node.js Setup Guide](./docs/NODEJS_SETUP.md)
  - Run setup check: `backend\SETUP_NODEJS.ps1` (PowerShell) or `backend\SETUP_NODEJS.bat` (CMD)
- PostgreSQL 14+
- Docker (optional)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ronsimxuerong/hello-demo.git
   cd hello-demo
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd frontend
   npm install
   
   # Backend
   cd ../backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy example env files
   cp frontend/.env.example frontend/.env.local
   cp backend/.env.example backend/.env
   ```

4. **Set up database**
   ```bash
   cd backend
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run development servers**
   ```bash
   # Terminal 1 - Frontend
   cd frontend
   npm run dev
   
   # Terminal 2 - Backend
   cd backend
   npm run dev
   ```

## 📝 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
NEXT_PUBLIC_CDN_URL=your_cdn_url
```

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/taxacademy
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
CDN_DOMAIN=your_cdn_domain
```

## 🐳 Docker Setup

```bash
# Build and run all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 📊 Database Schema

Key entities:
- **Users** - User accounts and profiles
- **Videos** - Video content metadata
- **Subscriptions** - User subscription plans
- **Payments** - Payment transactions
- **Webinars** - Live webinar sessions
- **Playlists** - Video playlists
- **Categories** - Content categories

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test
```

## 📦 Deployment

The platform is designed to be deployed on Google Cloud Platform with:
- Multiple Virtual Machines
- Load balancer
- CDN for video streaming
- SSL certificates
- Automated backups

## 📅 Project Timeline

- **Phase 1**: Project planning and system design (1 week)
- **Phase 2**: Frontend and backend development (7 weeks)
- **Phase 3**: Integration, testing, and QA (3 weeks)
- **Phase 4**: Deployment and handover (1 week)

**Total Duration**: ~12 weeks (480 man-hours)

## 📄 License

[To be determined]

## 👥 Team

Developed for Tax Academy Singapore by Genashtim Pte Ltd.

## 📞 Support

For technical support and inquiries, please contact the development team.

---

**Status**: 🚧 In Development
