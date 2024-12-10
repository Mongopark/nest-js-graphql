# NestJS + GraphQL + TypeORM + SQL

# NestJS Backend Test Task

This project is a **NestJS** application that uses **TypeORM** as the ORM, **PostgreSQL** as the database, and **GraphQL** as the API communication layer.

The App has 4 mutations (register, login, department creation and get department) and a query (health).

1. The "register" mutation is the implementation of a GraphQL mutation for user registration

2. The "login" mutation is the implementation of a GraphQL mutation for user login using email and password

3. The "department" mutation is the implementation of a protected GraphQL mutation for user to add department

4. The "department" query is the implementation of a GraphQL mutation for users that are login 

## Getting Started

### 1. Clone the Repository

First, clone the repository, and cd into the root of the app:

```bash
git clone https://github.com/mongopark/nest-js-graphql
cd nest-js-graphql
```

### 2. Prerequisites

Ensure that you have **Node** and **Yarn** installed on your machine. You can install them both from the web.


---

## Running the Application

### Stage 1: Initialize the Database

Before you begin,

1. **Create a .env File:**

   Create a `.env` file and populate it with the environment variables specified in the `.env.example` file:

   ```bash
   touch .env
   ```
   Copy the variables from `.env.example` to `.env` and modify them according to your configuration.



Initialize the PostgreSQL database. Make sure the database service is running before proceeding.

### Stage 2: Running the App

You can either run the app using **Yarn** or **Npm**. Below are the steps for running the app with Yarn.

#### Running with Yarn

1. **Install Dependencies:**

   Run the following command to install all required dependencies:

   ```bash
   yarn install --xxx
   ```

   - `--include=dev`: Ensures that development dependencies are installed alongside the production dependencies.

2. **Build the Application:**

   After installing the dependencies, build the app:

   ```bash
   yarn run build
   ```

3. **Run Tests:**

   After building the application, you can run tests to ensure everything works as expected:

   ```bash
   yarn run test
   ```

4. **Start the App:**

   To start the application, run:

   ```bash
   yarn run start:prod
   ```

   The `yarn run start:prod` command essentially runs two key steps:

   - **Start the App:**

     ```bash
     node dist/src/main
     ```

     This starts the app and binds it to the port specified by the `APP_PORT` variable in the `.env` file.
     You can now access the local GraphQL playground at: `http://localhost:${APP_PORT}/graphql`

## Important Notes on Environment Variables

- **Running the app as a container:**

  If you decide to run the app as a container (e.g., using Docker Compose), ensure the following in your `.env` file:

  - `POSTGRES_HOST=postgres`: The value must be `postgres` since this is the service name defined in your Docker Compose file.
  - `POSTGRES_PORT=5432`: The port should be set to `5432` because it’s the internal port used by the PostgreSQL container.

- **Running the app with Yarn (locally):**

  If you choose to run the app locally using Yarn, configure the following in your `.env` file:

  - `POSTGRES_HOST=localhost`: This points to your local machine where the PostgreSQL instance is running.
  - `POSTGRES_PORT=5434`: Use port `5434` because it's the port mapped to your local machine from the PostgreSQL container.

  **Reason:** When running the app locally, you need to use `localhost` as the host for accessing PostgreSQL on your machine, and port `5434` since Docker maps the PostgreSQL container's port `5432` to `5434` on your local machine.

---

## Accessing the Application

Alternatively, the app is running live, and you can access the **GraphQL Playground** at:

```
https://nestjs-mongopark-task.onrender.com/graphql
```

Use this URL to interact with the GraphQL API, send queries, and test the endpoints.

---

## Conclusion

This documentation provides a step-by-step guide for setting up and running the project locally using Yarn or Npm.