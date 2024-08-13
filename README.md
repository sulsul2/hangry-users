# Hangry Users API - Backend Engineer Intern Case Study

This project is a RESTful API built using Node.js and TypeScript as a part of the Hangry Backend Engineer Intern Case Study. The API manages user data and supports CRUD operations: Create, Read, Update, and Delete. The user data includes an ID, name, email, and date of birth. The API uses in-memory storage and does not rely on any external databases or frameworks.

## Features

- Create a new user
- Read all users
- Read an user by ID
- Update an existing user
- Delete a user by ID

## Technologies Used

- Node.js
- TypeScript
- UUID for unique ID generation

## Installation

To set up and run this project locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/sulsul2/hangry-users.git
cd hangry-users
```   
2. Install the dependencies:
```
npm install
```   
3. Run the application:
```
npm run dev
```
This will start the server on port 3000. You can access the API at http://localhost:3000.

## Project Structure

```plaintext
- src/
  - server.ts          # Entry point of the application
  - router.ts          # Handles routing for incoming HTTP requests
  - controller.ts      # Logic for handling CRUD operations
  - user.ts            # User data model and in-memory storage
- tsconfig.json        # TypeScript configuration
- package.json         # Project metadata and dependencies
- package-lock.json    # Dependency tree lockfile
