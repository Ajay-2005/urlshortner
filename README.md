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



Make sure to replace placeholders like `https://www.example.com/your/long/url`, the MongoDB connection details, and the project's GitHub repository URL with your specific information.This will launch the URL shortening service, and it will be available at http://localhost:3000 by default.Shorten a URL:Send a POST request to http://localhost:3000/api/shorturl with a JSON body containing the long URL:{
  "longUrl": "https://www.example.com/your/long/url"
}The response will contain the shortened URL.Access a shortened URL:Simply visit the shortened URL in your web browser, and you will be redirected to the original long URL.