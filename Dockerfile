# Use an official Node.js runtime as a parent image
FROM node:18.16.1


# Set the full path of the working directory in the container
WORKDIR /mnt/c/Users/USER/urlshortner/boilerplate-project-urlshortener

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the port your app will run on (assuming your app runs on port 3000)
EXPOSE 3000

# Define the command to start your Node.js application (change 'index.js' to your actual server file)
CMD ["node", "index.js"]
