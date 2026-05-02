# CIS Engineering — Operations Portal

A full-stack web application for managing the complete document pipeline of an engineering business — from Inquiry to Invoice.

---

## Tech Stack

**Frontend** — React.js, Vite, React Router, Axios, CSS Modules  
**Backend** — Node.js, Express.js  
**Database** — MySQL  

---

## Features

- Login & Signup
- Document Pipeline: `Inquiry → Quotation → Purchase Order → Delivery Challan → GRN → Invoice`
- Operations Dashboard with live order tracking
- Fully responsive UI

---

## Project Structure

```
New Project/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── models/
│   ├── package.json
│   └── server.js
└── frontend/
    └── my-app/
        ├── src/
        │   ├── pages/
        │   ├── components/
        │   └── App.jsx
        └── package.json
```

---

## Getting Started

### Prerequisites
- Node.js
- MySQL

### 1. Clone the repository
```bash
git clone https://github.com/awais9642/cis_engineering.git
cd YOUR_REPO_NAME
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=5000
```

Start the backend:
```bash
npm start
```

### 3. Setup Frontend
```bash
cd frontend/my-app
npm install
npm run dev
```

The app will run at `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login and get token |

---

## Screenshots

> Dashboard, Login, and Signup screens.

---

## Author

**Awais**  
Full Stack Developer — MERN Stack
