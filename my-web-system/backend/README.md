# Backend Application Documentation

## Overview
This is the backend of the my-web-system project, built using Node.js, Express, and TypeScript. It provides a RESTful API for managing users and work logs.

## Features
- User management (CRUD operations)
- Work log management (CRUD operations)
- MongoDB integration for data persistence
- Middleware for logging, CORS, and error handling

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-web-system/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the root of the backend directory and add your MongoDB connection string:
  ```
  MONGODB_URI=<your-mongodb-connection-string>
  ```

### Running the Application
To start the server, run:
```
npm start
```
The server will run on `http://localhost:3000`.

### API Endpoints
- **Users**
  - `POST /api/users` - Create a new user
  - `GET /api/users/:id` - Retrieve a user by ID
  - `PUT /api/users/:id` - Update a user by ID
  - `DELETE /api/users/:id` - Delete a user by ID

- **Work Logs**
  - `POST /api/worklogs` - Create a new work log
  - `GET /api/worklogs` - Retrieve all work logs

## Deployment
For deployment, ensure that your environment variables are set correctly and use a process manager like PM2 or Docker to run the application in production.

## License
This project is licensed under the MIT License. See the LICENSE file for details.