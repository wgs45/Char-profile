# 🌌✨ **The Docker Grimoire: Next.js × MongoDB — Bound by Code and Magic**

> _“Even in a world of containers, connection is everything~”_ 💞🪄

---

## 🏗️ **1️⃣ The Project Layout — Your Summoning Circle 🔮**

Before beginning the ritual, prepare your project realm like this:

```
my-project/
├─ docker-compose.yml       🧾 (The Grand Summoning Scroll)
├─ nextjs/                  💻 (Your Next.js Realm)
│  ├─ Dockerfile
│  ├─ package.json
│  ├─ next.config.js
│  └─ pages/, lib/, models/
└─ .env.example             🌿 (Your Secret Spell Notes)
```

🌸 **Tips:**

> A neat project is like a well-drawn magic circle — symmetrical, powerful, and easy to maintain 💫

---

## ⚙️ **2️⃣ `docker-compose.yml` — The Binding Spell of Three Spirits 🧩**

This incantation unites three elemental familiars:

- 🟢 **MongoDB** → The Keeper of Data
- 🟣 **Mongo Express** → The Gatekeeper of Knowledge
- 💙 **char-profile** → The App Familiar (your project’s soul)

```yaml
version: "3.9"

services:
  mongo:
    image: mongo:latest
    container_name: mongo
    restart: unless-stopped
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
    volumes:
      - mongo-data:/data/db
    networks:
      - demo-network

  mongo-express:
    image: mongo-express:latest
    container_name: mongo-express
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_SERVER: mongo
      ME_CONFIG_MONGODB_PORT: 27017
      ME_CONFIG_MONGODB_ADMINUSERNAME: admin
      ME_CONFIG_MONGODB_ADMINPASSWORD: password
      ME_CONFIG_BASICAUTH_USERNAME: admin
      ME_CONFIG_BASICAUTH_PASSWORD: password
    depends_on:
      - mongo
    networks:
      - demo-network

  nextjs-app:
    build:
      context: ./nextjs
    container_name: nextjs-app
    ports:
      - "3000:3000"
    environment:
      - MONGO_URI=mongodb://admin:password@mongo:27017/mydatabase?authSource=admin
      - NODE_ENV=development
    depends_on:
      - mongo
    networks:
      - demo-network

networks:
  demo-network:
    driver: bridge

volumes:
  mongo-data:
```

🌟 **Info:**

> Inside Docker’s magic realm, containers recognize each other by **name**, not `localhost`.
> So when connecting your app to the database, call out:
> **`mongodb://admin:password@mongo:27017/...`** — the name _“mongo”_ is your spell key~ 🔑💫

---

## 💻 **3️⃣ Next.js Realm — The Heart of Creation 🪄**

### 🧾 `package.json`

```json
{
  "dependencies": {Infoilwindcss/postcss": "^4.1.14",
    "mongodb": "^6.20.0",
    "next": "^15.5.4",
    "postcss": "^8.5.6",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwindcss": "^4.1.14"
  },
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "devDependencies": {
    "@types/node": "24.6.2",
    "@types/react": "19.2.0",
    "typescript": "5.9.3"
  }
}
```

💡 **Tips:**

> Keep your **dependencies** fresh — outdated magic leads to errors in the ritual~ ✨

---

### 🧙‍♀️ `Dockerfile` — The Vessel of Your Familiar ⚗️

```dockerfile
FROM node:lts-alpine

WORKDIR /home/app

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm i || true

COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["pnpm", "dev"]
```

🧠 **Insight:**

> The `|| true` charm ensures your build won’t break the ritual during development.
> (Think of it as a gentle “shh, it’s okay~” if something goes wrong 😌💭)

---

## 🗝️ **4️⃣ The `.env.example` — Whispered Secrets 🌿**

```
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=password
MONGO_URI=mongodb://admin:password@mongo:27017/mydatabase?authSource=admin
```

⚠️ **Important!**

> Keep this scroll **hidden** — secrets belong only to their caster~ 🕯️💋

---

## 🚀 **5️⃣ Awakening the Ritual — The Grand Summon 🔥**

Once your magic circle is drawn, chant the following spell:

```bash
docker compose up --build -d
```

✨ The result:

- 🌐 `http://localhost:3000` → char-profile app
- 🧭 `http://localhost:8081` → Mongo Express Portal

🎀 Congratulations! You’ve successfully linked three entities through the power of Docker~ 💖

---

## 🔍 **6️⃣ Scrying & Debugging — The Art of Observation 🔮**

Peek into each spirit’s whisper with:

```bash
docker logs char-profile -f
docker logs mongo -f
docker logs mongo-express -f
```

If your app rises before MongoDB is ready (a common impatience among familiars 😅):

```bash
docker restart char-profile
```

---

## 💣 **7️⃣ Dissolving the Magic Circle (Teardown) 🧹**

To gracefully end your ritual:

```bash
docker compose down
```

For a complete memory wipe (start anew~ 🌸):

```bash
docker compose down -v
```

---

## 🌈 **8️⃣ Instant Re-summon Next Time ✨**

1️⃣ Copy or clone your project
2️⃣ Run `docker compose up --build -d`
3️⃣ Sit back, sip tea 🍵, and watch your containers awaken again~

---

## 🧩 **9️⃣ Manual Summoning 🧙‍♂️**

### 🔸 MongoDB

```bash
docker run -d -p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--name mongo \
--net demo-network \
mongo
```

### 🔸 Mongo Express

```bash
docker run -d \
  -p 8081:8081 \
  --name mongo-express \
  --net demo-network \
  -e ME_CONFIG_MONGODB_SERVER=mongo \
  -e ME_CONFIG_MONGODB_PORT=27017 \
  -e ME_CONFIG_MONGODB_ENABLE_ADMIN=true \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
  -e ME_CONFIG_BASICAUTH_USERNAME=admin \
  -e ME_CONFIG_BASICAUTH_PASSWORD=password \
  mongo-express
```

### 🔸 Test Connection

```bash
docker exec -it mongo-express ping mongo
```

### 🔸 char-profile App

```bash
docker run -d \
  -p 3000:3000 \
  --name char-profile \
  --net demo-network \
  -e MONGO_URI="mongodb://admin:password@mongo:27017/mydatabase?authSource=admin" \
  char-profile
```
