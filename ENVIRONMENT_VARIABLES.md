# Environment Variables Guide

## Backend Environment Variables (Railway/Render)

### Required Variables
```bash
# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/crm?retryWrites=true&w=majority

# Server Configuration
PORT=4000
NODE_ENV=production

# JWT Secret (for authentication)
JWT_SECRET=your-super-secret-jwt-key-here

# Email Configuration (for notifications/password reset)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587

# CORS Configuration
CORS_ORIGIN=https://your-vercel-app.vercel.app
```

### Optional Variables
```bash
# File Upload Configuration
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=10485760

# API Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100

# Logging
LOG_LEVEL=info
```

## Frontend Environment Variables (Vercel)

### Required Variables
```bash
# API Endpoints
REACT_APP_API_URL=https://your-railway-app.railway.app/api/v1
REACT_APP_ROOT_URL=https://your-railway-app.railway.app

# App Configuration
REACT_APP_APP_NAME=CRM System
REACT_APP_VERSION=1.0.0
```

### Optional Variables
```bash
# Feature Flags
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_ENABLE_NOTIFICATIONS=true
REACT_APP_DEBUG_MODE=false

# External Services
REACT_APP_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
REACT_APP_SENTRY_DSN=https://your-sentry-dsn

# UI Configuration
REACT_APP_THEME=light
REACT_APP_LANGUAGE=en
```

## Development Environment Variables

### Backend (.env in server folder)
```bash
# Development Database
MONGO_URI=mongodb://localhost:27017/crm-dev
PORT=4000
NODE_ENV=development
JWT_SECRET=dev-secret-key
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env.local in client folder)
```bash
# Development API
REACT_APP_API_URL=http://localhost:4000/api/v1
REACT_APP_ROOT_URL=http://localhost:4000
REACT_APP_DEBUG_MODE=true
```

## Production Setup Instructions

### 1. Backend (Railway/Render)
1. Go to your project dashboard
2. Navigate to "Variables" or "Environment"
3. Add all required backend variables
4. Make sure to use production MongoDB URI
5. Set strong JWT_SECRET
6. Configure CORS_ORIGIN to your Vercel domain

### 2. Frontend (Vercel)
1. Go to Vercel dashboard
2. Select your project
3. Go to "Settings" > "Environment Variables"
4. Add all required frontend variables
5. Make sure REACT_APP_API_URL points to your backend
6. Set production values for all variables

## Security Notes

### Backend Security
- Use strong, unique JWT_SECRET
- Use MongoDB Atlas with proper authentication
- Set up proper CORS origins
- Use environment-specific database URLs

### Frontend Security
- Never expose sensitive API keys in frontend
- Use HTTPS URLs for all production endpoints
- Validate all environment variables
- Use proper error handling for missing variables

## Example Production Values

### Backend Example
```bash
MONGO_URI=mongodb+srv://crmuser:SecurePass123@cluster0.abc123.mongodb.net/crm?retryWrites=true&w=majority
PORT=4000
NODE_ENV=production
JWT_SECRET=super-secure-jwt-secret-key-2024
EMAIL_USER=noreply@yourcompany.com
EMAIL_PASS=your-gmail-app-password
CORS_ORIGIN=https://your-crm-app.vercel.app
```

### Frontend Example
```bash
REACT_APP_API_URL=https://crm-backend-production.railway.app/api/v1
REACT_APP_ROOT_URL=https://crm-backend-production.railway.app
REACT_APP_APP_NAME=CRM System
REACT_APP_VERSION=1.0.0
REACT_APP_DEBUG_MODE=false
```

