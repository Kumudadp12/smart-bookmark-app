
# 🔖 Smart Bookmark App

A modern, full-stack bookmark manager built with **Next.js, Supabase, and Tailwind CSS**.  
Users can securely save, manage, and sync bookmarks in real-time across multiple browser tabs.

---

## 🚀 Live Demo

👉 https://smart-bookmark-app-ivory.vercel.app  

---

## ✨ Features

- 🔐 Sign up and log in with **Google OAuth**
- ➕ Add bookmarks (title + URL)
- 🗑️ Delete personal bookmarks
- 🔒 Bookmarks are private to each user
- ⚡ Real-time sync across multiple tabs
- 🎨 Modern responsive UI with Tailwind CSS
- ☁️ Deployed on Vercel (production ready)

---

## 🧰 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js (App Router)** | Frontend & Routing |
| **Supabase Auth** | Google OAuth authentication |
| **Supabase PostgreSQL** | Database |
| **Supabase Realtime** | Live updates |
| **Tailwind CSS** | UI styling |
| **Vercel** | Deployment |

---

## 🏗️ Architecture Overview

**Authentication:**  
Supabase Google OAuth (no password storage)

**Database:**  
`bookmarks` table filtered by `user_id`

**Security:**  
Row Level Security (RLS) ensures users access only their own data

**Realtime Sync:**  
Supabase realtime subscriptions listen to INSERT, UPDATE, DELETE events and refresh UI instantly

**Deployment:**  
Environment variables configured securely in Vercel

---

## 🗄️ Database Schema

**Table:** `bookmarks`

| Column | Type |
|--------|------|
| id | uuid |
| title | text |
| url | text |
| user_id | uuid |
| created_at | timestamp |

---
## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Kumudadp12/smart-bookmark-app.git
cd smart-bookmark-app
```
### 2️⃣ Install dependencies
```bash
  npm install
```  
  ### 3️⃣ Configure Environment Variables
  
  Create a .env.local file:
```bash  
  NEXT_PUBLIC_SUPABASE_URL=your_project_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
 ``` 
### 4️⃣ Run locally
 ```bash
  npm run dev
```  
 ### App will run on:
```bash  
  http://localhost:3000
```
---

## 🚀 Deployment

 - The application is deployed on Vercel.
  
 - Steps followed:
  
 - Pushed project to GitHub
  
 - Imported repository into Vercel
  
 - Added Supabase environment variables
  
 - Configured Supabase Auth redirect URLs
  
 - Verified Google OAuth flow in production

## 🧠 Challenges & Solutions

### 1️⃣ Realtime UI Not Updating Immediately
  
  Issue: Bookmarks were only visible after manual refresh.
  Solution: Implemented Supabase Realtime subscription using .channel() and triggered UI refresh on postgres_changes.
  
### 2️⃣ OAuth Redirect Issues After Deployment
  
  Issue: Login worked locally but failed in production.
  Solution: Added Vercel production URL to Supabase Auth redirect settings.
  
### 3️⃣ GitHub Permission Conflicts During Deployment
  
  Issue: Push permission errors due to multiple GitHub accounts.
  Solution: Updated remote repository and re-authenticated using correct GitHub account.
---

## 🔒 Security Considerations

- Row-Level Security (RLS) enabled

- User-based filtering via user_id

- No sensitive keys exposed in frontend

- Environment variables stored securely in Vercel
---

## 📈 Future Improvements

- Edit bookmarks

- Tag & category system

- Bookmark search

- Drag-and-drop ordering

- Dark mode toggle

- Pagination for large bookmark lists
---

## 👩‍💻 Author

### Kumuda DP
### Full Stack Developer | AI & Data Science Enthusiast

## GitHub:
(https://github.com/Kumudadp)
(https://github.com/Kumudadp12)
