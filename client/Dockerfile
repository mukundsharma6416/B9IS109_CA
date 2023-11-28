# Use an official Node.js image with the latest stable version as the base image
FROM node:latest as builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies, including nodemon for development
RUN npm install

# Copy the application files to the working directory
COPY . .

# Expose port 3000 for development
EXPOSE 3000

# Start the development server using nodemon
CMD ["npm", "run", "start"]
