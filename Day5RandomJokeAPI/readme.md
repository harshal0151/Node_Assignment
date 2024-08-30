# Random Jokes and Images API

## Overview

This Node.js application provides an API to fetch random dad jokes and images using the Express.js framework. The API has three main endpoints that allow users to retrieve jokes, images, or both combined.

## Features

- **Express Framework:** Uses Express.js to create a simple and efficient server.
- **Random Jokes:** Fetches random dad jokes from an external API.
- **Random Images:** Fetches random images from Unsplash.
- **Combined Endpoint:** Provides both a random joke and a random image in a single response.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- An API key from [API Ninjas](https://api-ninjas.com) for dad jokes
- An Access Key from [Unsplash](https://unsplash.com/developers) for random images

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/random-jokes-images-api.git

   ```

2. Navigate to the project directory:

   ```
     cd random-jokes-images-api
   ```

3. Install the dependencies:

   ```
    npm install
   ```

4. Create a .env file and add your API keys:

   ```
   API_NINJAS_KEY=your_api_ninjas_key
   UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   ```

## API Endpoints

### Get a Random Dad Joke

- **Endpoint:** /api/joke/random
- **Method** GET
- **Description:** Retrieves a random dad joke from the API Ninjas Dad Jokes API.

### Example Response:

```
{
    "image_url": "https://images.unsplash.com/photo-..."
}
```
```
{
  "joke": "Why don't skeletons fight each other? They don't have the guts.",
  "image_url": "https://images.unsplash.com/photo-..."
}
```