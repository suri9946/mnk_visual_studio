# Netlify Deployment Guide

## Frontend Deployment (Automatic)

The frontend will be automatically deployed to Netlify via the `netlify.toml` configuration.

### Steps:

1. **Connect Repository to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your Git repository (GitHub/GitLab/Bitbucket)
   - Netlify will auto-detect the `netlify.toml` config

2. **Set Environment Variables in Netlify Dashboard**
   - Go to: Site Settings → Build & Deploy → Environment
   - Add: `VITE_API_URL` = Your backend API URL

3. **Frontend will deploy automatically on Git push**

---

## Backend Deployment Options

### Option 1: Render.com (Recommended - Free tier available)
```bash
1. Create account at render.com
2. Create a new "Web Service"
3. Connect your GitHub repository
4. Set:
   - Build command: npm install
   - Start command: npm start (from backend folder)
   - Environment variables: EMAIL_USER, EMAIL_PASS, RECIPIENT_EMAIL
5. Copy the service URL and set it as VITE_API_URL in Netlify
```

### Option 2: Railway.app
```bash
1. Create account at railway.app
2. New Project → Import from GitHub
3. Select repository
4. Add environment variables
5. Deploy and get the URL
```

### Option 3: Heroku (Note: Free tier discontinued, paid plans only)
```bash
1. Create account at heroku.com
2. Create new app
3. Connect GitHub
4. Add buildpack: heroku/nodejs
5. Set config vars (environment variables)
6. Deploy
```

### Option 4: Netlify Functions (Serverless Backend)
Convert your backend to Netlify Functions for a fully integrated solution.

---

## Environment Variables for Backend

Create `.env` in the backend folder:
```
PORT=5000
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@example.com
```

**For Gmail:**
1. Enable 2-Factor Authentication
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use that 16-character password in EMAIL_PASS

---

## Pre-deployment Checklist

- ✅ Frontend: netlify.toml configured
- ✅ Frontend: .env.example created
- ✅ Frontend: build script in package.json
- ✅ Backend: server.js configured
- ✅ Backend: .env file with all required variables
- ✅ Contact form API endpoint verified
- ✅ Gmail credentials validated

---

## Quick Deploy Steps

1. Push code to GitHub
2. Connect repository to Netlify
3. Add VITE_API_URL environment variable
4. Deploy backend to Render/Railway/Heroku
5. Update VITE_API_URL with backend URL
6. Trigger redeploy in Netlify
7. Test contact form
