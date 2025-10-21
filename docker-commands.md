# Docker commands

---

## Build project

```bash
docker build -t char-profile .
```

---

## Create custom networks

```bash
docker network create example-network
```

---

## MongoDB

```bash
docker run -d -p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--name mongo \
--net demo-network \
mongo
```

---

## Mongo Express

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

---

## Run project file

```bash
docker run -d \
  -p 3000:3000 \
  --name char-profile \
  --net demo-network \
  -e MONGO_URI="mongodb://admin:password@mongo:27017/mydatabase?authSource=admin" \
  char-profile
```
