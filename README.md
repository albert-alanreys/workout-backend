# Workout Backend

Backend for the **Workout** educational project.

> Provides a RESTful API for workouts, users, and fitness data.

---

## 🧰 Tech Stack

> A quick overview of the main tools and libraries used in this project.

**Core:**

- **Node.js** — JavaScript runtime
- **Express.js** — web framework for building the API
- **PostgreSQL** — relational database
- **Prisma ORM** — type-safe database client

**Authentication & Security:**

- **argon2** — password hashing
- **jsonwebtoken** — JWT authentication
- **cors** — Cross-Origin Resource Sharing middleware

**Development Tools:**

- **nodemon** — auto-restarts server on changes
- **morgan** — HTTP request logger
- **dotenv** — environment variable loader
- **prettier** + **@trivago/prettier-plugin-sort-imports** — code formatting

**Testing & Mocking:**

- **@faker-js/faker** — data generation for testing

**Database Driver:**

- **pg** — PostgreSQL driver for Node.js

---

## ⚙️ Development

This project uses **Yarn** and requires **Node.js v22+**.

To run the development server:

```bash
yarn install
```

Create a PostgreSQL database named `workout`.

Create a `.env` file based on `.env.example`:

```
NODE_ENV=development
DATABASE_URL=postgresql://<USERNAME>:<PASSWORD>@localhost:5432/workout?schema=public
JWT_SECRET=<YOUR_SECRET_KEY>
```

Then apply existing migrations:

```bash
npx prisma migrate deploy
```

Finally, start the server:

```bash
yarn dev
```

---

**License:** MIT  
**Author:** [Albert Alanreys](https://github.com/albert-alanreys)
