## Backend Setup (Express.js + Prisma + MySQL)

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.x or later)
- **npm** or **yarn**
- **MySQL**

### Steps

#### 1. Clone the backend repository:

```bash
git clone <https://github.com/Tola-byte/todo-task-backend>
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
```

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
  - The API base URL can be customized in the `.env` file.
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


---

### Useful Commands

#### Frontend:

- **Run in development mode:** `npm run dev`


#### Backend:

- **Run in development mode:** `npm run dev`
- **Run Prisma migrations:** `npx prisma migrate dev`
- **Check Prisma schema:** `npx prisma validate`

---

Thanks
