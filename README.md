# 🌸 Char-Profile

A simple **Next.js + MongoDB + Docker** practice project for managing user profiles.
This project was built as a learning exercise for **full-stack development** and **CI/CD with Docker** 🚀.
It uses an anime-style avatar as the profile picture for fun 💖.

---

## ✨ Features

- 📝 View and edit user profile (name, email, interests)
- 📦 Connected to **MongoDB** for persistence
- 🖼 Uses a sample anime-style profile picture
- 🐳 Dockerized for easy containerized deployment
- ⚡ Built with **Next.js 14**, **TailwindCSS**, and **TypeScript**

---

## 📂 Project Structure

```
src/
  app/
    api/
      get-profile/route.ts     # Fetch user profile
      update-profile/route.ts  # Update user profile
    profile/
      page.tsx                 # Profile page (view + edit)
      ProfileView.tsx          # Profile display component
      ProfileEdit.tsx          # Profile editing component
  styles/
    globals.css                # Tailwind + global styles

Dockerfile
docker-compose.yml
README.md
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/char-profile.git
cd char-profile
```

### 2. Install dependencies

```bash
pnpm install
# or npm install / yarn install
```

### 3. Run locally (without Docker)

Make sure MongoDB is running locally (`mongodb://admin:password@localhost:27017`).
Then start Next.js:

```bash
pnpm dev
```

Visit 👉 `http://localhost:3000/profile`

---

## 🐳 Run with Docker

### 1. Build Docker image

```bash
docker build -t char-profile .
```

### 2. Run with Docker Compose

This will start both **Next.js app** and **MongoDB**:

```bash
docker-compose up -d
```

Now open 👉 `http://localhost:3000/profile`

---

## ⚙️ Environment Variables

Set these in `.env.local` (or `.env` for Docker):

```
MONGO_DB_USERNAME=admin
MONGO_DB_PASSWORD=password
MONGO_DB_HOST=mongodb
MONGO_DB_NAME=my-db
```

---

## 📸 Screenshot

_(Insert image later)_

---

## 🎯 Learning Goals

This project is mainly for practice:

- Setting up a **Next.js full-stack app**
- Connecting to **MongoDB**
- Running inside **Docker containers**
- Experimenting with **CI/CD pipelines**

---

## 💡 Future Ideas

- Add user authentication
- Upload custom profile pictures
- Deploy to Vercel or any cloud with Docker CI/CD
