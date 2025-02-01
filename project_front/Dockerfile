# Use an official Node.js image to build the Angular project
FROM node:20 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and install dependencies
COPY package*.json ./

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

RUN npm install

# Copy the Angular source code
COPY . .

# Build the Angular project
RUN npm run build --prod

# Use an Nginx image to serve the Angular app
FROM nginx:alpine

# Copy the built Angular app to Nginx's html directory
COPY --from=build /usr/src/app/dist/project_front /usr/share/nginx/html

# Expose the port Nginx will listen on
EXPOSE 80

# Command to run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
