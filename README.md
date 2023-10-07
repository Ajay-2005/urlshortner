# URL Shortener Microservice

This project is a URL shortening service that uses MongoDB to store and retrieve shortened URLs. With this service, you can convert long URLs into short, easy-to-share links.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Git (optional, for cloning the repository)

## Installation

1. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/Ajay-2005/url-shortener.git

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   This will launch the URL shortening service, and it will be available at `http://localhost:3000` by default.

2. Shorten a URL:

   Send a POST request to `http://localhost:3000/api/shorturl` with a JSON body containing the long URL:

   ```json
   {
     "longUrl": "https://www.example.com/your/long/url"
   }
   ```

   The response will contain the shortened URL.

3. Access a shortened URL:

   Simply visit the shortened URL in your web browser, and you will be redirected to the original long URL.

## MongoDB Database

This project uses MongoDB to store URL data. You can manage your MongoDB data using the MongoDB shell or a GUI tool like MongoDB Compass.

## Using Docker
You can also run this application in a Docker container. To do so, follow these steps:

Build the Docker image:

 ```bash
docker build -t your-image-name .
   ```
Replace your-image-name with a suitable name for your Docker image.

Run the Docker container:
 ```bash
docker run -d -p 3000:3000 your-image-name
  ```
Your application should now be accessible at http://localhost:3000 within the Docker container.

