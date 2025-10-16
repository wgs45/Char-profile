FROM node:lts-alpine

WORKDIR /home/app

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm i

COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["pnpm", "dev"]
