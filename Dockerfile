# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json vite.config.js index.html ./
COPY src ./src
COPY public ./public

RUN npm install && npm run build

# Production stage
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
