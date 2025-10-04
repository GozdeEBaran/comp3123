# Express.js Exercise 05 - API Documentation

## Overview
This project implements a Node.js/Express.js application with user authentication and profile management features.

## Installation
```bash
npm install
```

## Running the Application
```bash
node index.js
```
The server will start on port 8081 (or the port specified in the PORT environment variable).

## API Endpoints

### 1. Home Route
- **URL**: `GET /home`
- **Description**: Serves the home.html page with welcome message
- **Response**: HTML page with "Welcome to ExpressJs Tutorial"

### 2. Profile Route
- **URL**: `GET /api/v1/user/profile`
- **Description**: Returns user profile data from user.json file
- **Response**: JSON object with user details

### 3. Login Route
- **URL**: `POST /api/v1/user/login`
- **Description**: Authenticates user with username and password
- **Request Body**: 
  ```json
  {
    "username": "bret",
    "password": "bret@123"
  }
  ```
- **Responses**:
  - Valid credentials: `{"status": true, "message": "User Is valid"}`
  - Invalid username: `{"status": false, "message": "User Name is invalid"}`
  - Invalid password: `{"status": false, "message": "Password is invalid"}`

### 4. Logout Route
- **URL**: `GET /api/v1/user/logout?username={username}`
- **Description**: Logs out user and displays confirmation message
- **Parameters**: username (query parameter)
- **Response**: HTML message `<b>{username} successfully logged out.</b>`

## Testing with Postman
Import the `Postman_Collection.json` file into Postman to test all endpoints.

## Test Data
The application uses the following test user:
- Username: `bret`
- Password: `bret@123`

## Error Handling
The application includes error handling middleware that returns a 500 status with "Server Error" message for any unhandled errors.

## File Structure
```
├── index.js              # Main application file
├── routes/
│   └── users.js          # User-related routes
├── user.json             # User data file
├── home.html             # Home page HTML
├── package.json          # Dependencies
└── Postman_Collection.json # Postman test collection
```
