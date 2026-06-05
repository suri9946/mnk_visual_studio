# MNK Visual House - Digital Marketing Agency Website

A complete, production-ready full-stack website for MNK Visual House.

## Tech Stack
- **Frontend**: React, Vite, TailwindCSS, Framer Motion, Axios, Lucide React
- **Backend**: Node.js, Express, Nodemailer, CORS, Dotenv

## Project Structure
```
mnk-visual-house/
├── frontend/          # React + Vite + TailwindCSS
└── backend/           # Node.js + Express
```

## Setup Instructions

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` file with your SMTP credentials (optional for testing):
   ```env
   PORT=5000
   EMAIL_USER=your@email.com
   EMAIL_PASS=yourpassword
   RECIPIENT_EMAIL=contact@mnkvisualhouse.com
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Key Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Dynamic Animations**: Smooth transitions and scroll-based animations using Framer Motion.
- **Functional Contact Form**: Connected to a Node.js backend to process inquiries.
- **Premium Aesthetics**: Modern design with glassmorphism, gradients, and custom illustrations.
- **WhatsApp Integration**: Floating button for direct client communication.
