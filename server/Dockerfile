# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Expose the port your application will run on (5001 in this case)
EXPOSE 5001

# Define the command to run your application with nodemon
CMD [ "npx", "nodemon", "server.js" ]