# zorvyn-backend-assessment

# 💰 Finance Backend API (Zorvyn Assessment)

A secure and scalable backend system for managing financial records with authentication, role-based access control, and dashboard analytics.

---

## 🚀 Features

- 🔐 JWT Authentication (Register & Login)
- 🛡️ Role-Based Access Control (Admin, Analyst, Viewer)
- 📊 Dashboard Aggregation (Income vs Expense)
- 📦 CRUD Operations for Financial Records
- 🔍 Filtering (type, category)
- ⚡ Secure APIs with Middleware
- ❌ Invalid Token Handling & Security Checks

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs

---

## 📂 Project Structure
finance-backend/
│
├── server.js
├── app.js
├── .env
│
└── src/
 ├── config/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── services/
 ├── validations/
 └── utils/

 
---

## 🔑 Authentication Flow

1. User registers
2. User logs in → receives JWT token
3. Token used in headers for protected routes:

Authorization: Bearer <token>

---

## 📡 API Endpoints

### 🔐 Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### 📦 Records
- `POST /api/records` (Admin only)
- `GET /api/records` (All roles)
- `PUT /api/records/:id` (Admin only)
- `DELETE /api/records/:id` (Admin only)

### 📊 Dashboard
- `GET /api/dashboard/summary` (Admin, Analyst)

---

## 📊 Sample Dashboard Response

```json
[
  { "_id": "income", "total": 8000 },
  { "_id": "expense", "total": 2000 }
]

⚙️ Installation & Setup
1. Clone the repo
git clone https://github.com/dhruvmayank9120/zorvyn-backend-assessment.git

2. Install dependencies
npm install

3. Create .env file
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

4. Run server
npm run dev

🧪 Testing

Use Postman to test APIs:

Register → Login → Get Token
Use token in headers for protected routes

🧪 Testing

Use Postman to test APIs:

Register → Login → Get Token
Use token in headers for protected routes
