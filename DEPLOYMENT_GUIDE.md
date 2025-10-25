# CRM Deployment Guide

## Vercel Deployment Steps

### 1. Backend Deployment (Railway/Render)

#### Option A: Railway (Recommended)
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project
4. Connect your GitHub repository
5. Select the `server` folder as root directory
6. Add environment variables:
   - `MONGO_URI` - Your MongoDB connection string
   - `PORT` - Will be auto-assigned
7. Deploy and get your backend URL

#### Option B: Render
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Set root directory to `server`
5. Add environment variables
6. Deploy and get your backend URL

### 2. Frontend Deployment (Vercel)

#### Step 1: Prepare Environment Variables
Create a `.env.local` file in the `client` folder:
```
REACT_APP_API_URL=https://your-backend-url.railway.app/api/v1
REACT_APP_ROOT_URL=https://your-backend-url.railway.app
```

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Set root directory to `client`
5. Add environment variables in Vercel dashboard:
   - `REACT_APP_API_URL` = your backend URL + `/api/v1`
   - `REACT_APP_ROOT_URL` = your backend URL
6. Deploy

### 3. Database Setup
- Use MongoDB Atlas (free tier available)
- Get connection string
- Add to backend environment variables

### 4. File Uploads
- Consider using Cloudinary for file storage
- Update upload routes to use cloud storage
- Or use Railway's persistent storage

## Current Status
✅ Vercel configuration created
✅ Environment variables setup
⏳ Backend deployment needed
⏳ Frontend deployment needed

