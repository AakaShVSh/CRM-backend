# CRM Backend API

Customer Lead Management REST API built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---


## ⚙️ Prerequisites

- **Node.js** v18+
- **MongoDB** — local instance or [MongoDB Atlas](https://cloud.mongodb.com)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/AakaShVSh/CRM-backed.git
cd CRM-backed
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
create .env file at root of the project
```

Open `.env` and update the values:
```env
PORT=5000
MONGO_URI=mongodb://aakashvishwakarma059_db_user:9IDXCBYhhz4DCyvV@ac-kvbfnum-shard-00-00.iemv0gr.mongodb.net:27017,ac-kvbfnum-shard-00-01.iemv0gr.mongodb.net:27017,ac-kvbfnum-shard-00-02.iemv0gr.mongodb.net:27017/?replicaSet=atlas-sl9ca6-shard-0&ssl=true&authSource=admin
```

### 4. Start the server
```bash
# Development — auto-restarts on file changes
npm start
```

Server runs at → `http://localhost:8080`

---

## 📡 API Endpoints

Base URL: `http://localhost:8080/api`

| Method   | Endpoint                    | Description                        |
|----------|-----------------------------|------------------------------------|
| `GET`    | `/all-customer`             | Fetch all customers                |
| `GET`    | `/search-customer?search=`  | Search by name, email, or company  |
| `POST`   | `/add-customer`             | Create a new customer              |
| `PATCH`  | `/update-customer/:id`      | Update a customer by ID            |
| `DELETE` | `/delete-customer/:id`      | Delete a customer by ID            |

---

## 📋 Customer Schema

| Field         | Type     | Required | Default | Notes                                          |
|---------------|----------|----------|---------|------------------------------------------------|
| `Name`        | String   | ✅       | —       |                                                |
| `Email`       | String   | ✅       | —       | Stored as lowercase                            |
| `PhoneNumber` | String   | ✅       | —       |                                                |
| `CompanyName` | String   | ✅       | —       |                                                |
| `LeadStatus`  | String   | —        | `New`   | New / Contacted / Qualified / Converted / Lost |
| `Notes`       | String   | ✅       | `""`    |                                                |
| `CreatedDate` | Date     | —        | `now`   | Auto-set on creation                           |

---

## 🌐 CORS Allowed Origins

- `http://localhost:5173` (local frontend dev)
- `https://crm-frontend-grjk.onrender.com` (production frontend)

---

