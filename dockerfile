# Stage 1: Build Next.js & Tauri
FROM node:22 AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build Next.js
RUN npm run next:build

# Build Tauri (สำหรับ Linux ต้องใช้ tauri-cli)
RUN npm run tauri:build

# Stage 2: Run the built project
FROM node:22 AS runtime

# Set working directory
WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src-tauri/target/release/bundle ./bundle

# Set user for security
USER node

# Expose the port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "next:dev"]
