# Blog_API_POSTGRES

## Overview
The Blog_API_POSTGRES project is a powerful and scalable RESTful API designed for managing a blogging platform. Built with Node.js and Express, and leveraging the power of PostgreSQL, this API provides endpoints for creating, reading, updating, and deleting blog posts.

## Features
- Create, read, update, and delete blog posts
- PostgreSQL database integration
- Modular and scalable code structure

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/NAMBIRAJA-M/Blog_API_POSTGRES.git
    cd Blog_API_POSTGRES
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up PostgreSQL:
    - Create a database named `blog_api`:
      ```sql
      CREATE DATABASE blog_api;
      ```
    - Update `config/db.js` with your PostgreSQL connection details.

4. Run migrations:
    ```sh
    npx sequelize-cli db:migrate
    ```

5. Start the server:
    ```sh
    npm start
    ```

### Endpoints

- **GET** /posts
- **POST** /posts
- **GET** /posts/:id
- **PUT** /posts/:id
- **DELETE** /posts/:id

