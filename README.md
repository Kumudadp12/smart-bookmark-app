🚀 Smart Bookmark App

A full-stack bookmark management application built using Next.js (App Router) and Supabase, featuring Google OAuth authentication, real-time updates, and per-user data isolation.

🔗 Live Demo: (https://smart-bookmark-app-ivory.vercel.app/)

📂 GitHub Repository: (https://github.com/Kumudadp12/smart-bookmark-app)

📌 Features

  🔐 Google OAuth Authentication (Supabase Auth)

  ➕ Add bookmarks (Title + URL)

  🗑 Delete your own bookmarks

  👤 Bookmarks are private per user

  ⚡ Real-time updates across multiple tabs

  🎨 Modern UI using Tailwind CSS

  ☁️ Deployed on Vercel (Production Ready)

🧱 Tech Stack
  Technology	                Purpose
  Next.js (App Router)	      Frontend + Routing
  Supabase	                  Auth, Database, Realtime
  PostgreSQL	                Database
  Tailwind CSS	              UI Styling
  Vercel	                    Deployment
  
🏗 Architecture Overview

  Authentication: Handled using Supabase Google OAuth.

  Database: bookmarks table with user-specific filtering via user_id.

  Security: Row-Level Security (RLS) ensures users only access their own data.

  Realtime Sync: Supabase Realtime subscriptions listen to INSERT, DELETE, and UPDATE events and refresh UI automatically.

  Deployment: Environment variables configured securely on Vercel.

🗄 Database Schema
  bookmarks Table
  Column                      	Type
  id	                          uuid
  title	                        text
  url	                          text
  user_id	                      uuid
  created_at	                  timestamp
  
⚙️ Setup & Installation

  1️⃣ Clone the repository
  git clone https://github.com/your-username/smart-bookmark-app.git
  cd smart-bookmark-app
  
  2️⃣ Install dependencies
  npm install
  
  3️⃣ Configure Environment Variables
  
  Create a .env.local file:
  
  NEXT_PUBLIC_SUPABASE_URL=your_project_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
  
  4️⃣ Run locally
  npm run dev
  
  App will run on:
  
  http://localhost:3000

🚀 Deployment

  The application is deployed on Vercel.
  
  Steps followed:
  
  Pushed project to GitHub
  
  Imported repository into Vercel
  
  Added Supabase environment variables
  
  Configured Supabase Auth redirect URLs
  
  Verified Google OAuth flow in production

🧠 Challenges & Solutions

  1️⃣ Realtime UI Not Updating Immediately
  
  Issue: Bookmarks were only visible after manual refresh.
  Solution: Implemented Supabase Realtime subscription using .channel() and triggered UI refresh on postgres_changes.
  
  2️⃣ OAuth Redirect Issues After Deployment
  
  Issue: Login worked locally but failed in production.
  Solution: Added Vercel production URL to Supabase Auth redirect settings.
  
  3️⃣ GitHub Permission Conflicts During Deployment
  
  Issue: Push permission errors due to multiple GitHub accounts.
  Solution: Updated remote repository and re-authenticated using correct GitHub account.

🔒 Security Considerations

Row-Level Security (RLS) enabled

User-based filtering via user_id

No sensitive keys exposed in frontend

Environment variables stored securely in Vercel

📈 Future Improvements

Edit bookmarks

Tag & category system

Bookmark search

Drag-and-drop ordering

Dark mode toggle

Pagination for large bookmark lists

👩‍💻 Author

Kumuda DP
Full Stack Developer | AI & Data Science Enthusiast
