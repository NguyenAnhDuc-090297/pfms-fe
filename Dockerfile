# Fetching the latest node image on apline linux
FROM node:alpine AS builder

# Declaring env
ENV NODE_ENV production

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy source code - the entire project to the working directory
COPY . .

# Build the project
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying build assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copying nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf