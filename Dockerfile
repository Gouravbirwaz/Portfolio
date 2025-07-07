# 1. Use official Node.js base image
FROM node:18-alpine AS deps

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# 4. Copy source files and build
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx next build || cat .next/trace


# 5. Use a lightweight image to serve Next.js
FROM node:18-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy build output and dependencies
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Optional: Use a non-root user for security
# RUN addgroup app && adduser -S -G app app
# USER app

# Start the app
EXPOSE 3000
CMD ["npm", "start"]
