# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's code
COPY . .

# Expose the port the app will run on (e.g., 3000)
EXPOSE 3000

# Command to run your Node.js app
CMD ["npm", "start"]