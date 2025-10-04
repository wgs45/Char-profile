FROM node:24.9-alpine

# Environment variables for Mongo (not yet used since you're on in-memory)
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password \
    NEXT_TELEMETRY_DISABLED=1

# Create app directory
RUN mkdir -p /home/app
WORKDIR /home/app

# Copy package files first for caching
COPY ./app/package.json ./app/pnpm-lock.yaml* ./

# Install dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the app
COPY ./app .

# Build Next.js app
RUN pnpm build

# Expose Next.js default port
EXPOSE 3000

# Run in production
CMD ["pnpm", "start"]

