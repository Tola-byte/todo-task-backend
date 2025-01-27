## Backend Setup (Express.js + Prisma + MySQL)

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.x or later)
- **npm** or **yarn**
- **MySQL**

### Steps

#### 1. Clone the backend repository:

```bash
git clone <backend-repo-url>
cd <backend-repo-folder>
```

#### 2. Install dependencies:

```bash
npm install
# or
yarn install
```

#### 3. Set up environment variables:

Create a `.env` file in the root directory of the project and add the following variables:

```env
DATABASE_URL=mysql://myuser:nooroDB123%3F%3F@localhost:3306/noorodb?schema=public
PORT=3001
```

- Replace `username` and `password` with your MySQL credentials.
- Replace `todo_db` with the name of your database.

#### 4. Initialize the database with Prisma:

1. **Generate the Prisma client:**

   ```bash
   npx prisma generate
   ```

2. **Run the database migrations:**
   ```bash
   npx prisma migrate dev --name init
   ```
   This command:
   - Applies the migrations to your database.
   - Creates the required tables.

#### 3. Start the backend server:

```bash
npm run dev
# or
yarn dev
```

The backend will run at `http://localhost:8000` by default.

---

## Testing the Full Stack

### Step 1: Start the Backend Server

Ensure your backend is running by visiting `http://localhost:8000/`.

### Step 2: Start the Frontend Server

Run the Next.js app and visit `http://localhost:3000` in your browser. The frontend will interact with the backend via the API.

---

## Additional Notes

- **Frontend:**
  - The API base URL can be customized in the `.env.local` file.
- **Backend:**
  - Prisma schema is defined in the `prisma/schema.prisma` file.
  - For further customizations, refer to the `routes` folder for API endpoints.
- **Database:**
  - Ensure your MySQL database is running and properly configured with the correct credentials.

---

### Troubleshooting

If you encounter issues, ensure:

1. The `.env` files are properly configured.
2. Your MySQL database is running.
3. Dependencies are installed with no errors.

For further assistance, check the repository's issue tracker or documentation.

---

### Useful Commands

#### Frontend:

- **Run in development mode:** `npm run dev`
- **Build for production:** `npm run build`
- **Start production server:** `npm start`

#### Backend:

- **Run in development mode:** `npm run dev`
- **Run Prisma migrations:** `npx prisma migrate dev`
- **Check Prisma schema:** `npx prisma validate`

---

Happy coding!
