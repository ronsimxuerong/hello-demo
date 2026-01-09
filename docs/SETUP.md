# Setup Guide

This guide will help you set up the Tax Academy Singapore eLearning Platform for local development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
  - ⚠️ **If Node.js is not installed, see [NODEJS_SETUP.md](./NODEJS_SETUP.md) for detailed installation instructions**
  - You can also run the setup check script: `backend\SETUP_NODEJS.ps1` or `backend\SETUP_NODEJS.bat`
- **npm** or **yarn** - Comes with Node.js
- **PostgreSQL** (v14 or higher) - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)
- **Docker** (optional) - [Download](https://www.docker.com/)

## Quick Start with Docker

The easiest way to get started is using Docker Compose:

```bash
# Navigate to docker directory
cd docker

# Copy and configure environment variables
cp ../backend/.env.example ../backend/.env
cp ../frontend/.env.example ../frontend/.env.local

# Start all services
docker-compose up -d

# Run database migrations
docker-compose exec backend npm run db:migrate
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## Manual Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone https://github.com/ronsimxuerong/hello-demo.git
cd hello-demo

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 2. Database Setup

```bash
# Create PostgreSQL database
createdb taxacademy

# Or using psql
psql -U postgres
CREATE DATABASE taxacademy;
\q
```

### 3. Environment Configuration

#### Backend Environment

```bash
cd backend
cp .env.example .env
```

Edit `.env` and configure:
- `DATABASE_URL` - Your PostgreSQL connection string
- `JWT_SECRET` - A secure random string for JWT tokens
- `STRIPE_SECRET_KEY` - Your Stripe secret key (get from Stripe dashboard)
- `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` - For video storage
- Other required variables

#### Frontend Environment

```bash
cd frontend
cp .env.example .env.local
```

Edit `.env.local` and configure:
- `NEXT_PUBLIC_API_URL` - Backend API URL (http://localhost:3001)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key

### 4. Database Migration

```bash
cd backend

# Generate Prisma Client
npm run db:generate

# Run migrations
npm run db:migrate
```

### 5. Start Development Servers

#### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

#### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

## Creating Admin User

After setting up the database, you can create an admin user:

```bash
cd backend
npm run db:studio
```

Or use Prisma CLI to create a user directly in the database.

## Project Structure

```
hello-demo/
├── frontend/          # Next.js frontend application
│   ├── app/          # Next.js app directory (pages)
│   ├── components/   # React components
│   ├── lib/          # Utilities
│   └── types/        # TypeScript types
├── backend/          # Express API server
│   ├── src/
│   │   ├── routes/   # API routes
│   │   ├── controllers/ # Route controllers
│   │   ├── services/ # Business logic
│   │   └── middleware/ # Express middleware
│   └── prisma/       # Database schema
├── shared/           # Shared code between frontend/backend
└── docker/           # Docker configurations
```

## Common Commands

### Backend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio
npm test             # Run tests
```

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm test             # Run tests
```

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running
- Check `DATABASE_URL` in `.env` is correct
- Verify database exists: `psql -l | grep taxacademy`

### Port Already in Use
- Change ports in `.env` files
- Kill process using port: `lsof -ti:3000 | xargs kill` (Mac/Linux)

### Prisma Issues
```bash
# Reset Prisma Client
cd backend
rm -rf node_modules/.prisma
npm run db:generate
```

## Next Steps

1. Review the [API Documentation](./API.md)
2. Check the main [README](../README.md) for project overview
3. Start implementing features based on the requirements

## Support

For issues or questions, please contact the development team.
