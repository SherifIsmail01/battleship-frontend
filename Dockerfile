# --- Stage 1: Build the React Application ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Build the application (generates a 'build' or 'dist' folder)
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# Copy custom Nginx configuration to use port 7860
RUN sed -i 's/listen[:[:space:]]*80;/listen 7860;/g' /etc/nginx/conf.d/default.conf


# Copy the static assets from the builder stage to Nginx web root
# Note: Change '/app/build' to '/app/dist' if you use Vite instead of CRA
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
