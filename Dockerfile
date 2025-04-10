FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

FROM node:20-alpine AS runner
WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["pnpm", "run", "start"]