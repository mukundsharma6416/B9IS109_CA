# Use the official Node.js image with the latest stable version
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Expose port 5001
EXPOSE 5001

# Define the command to run your application
CMD ["npm", "start"]
