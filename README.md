# Hangry API - Backend Engineer Intern Case Study

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