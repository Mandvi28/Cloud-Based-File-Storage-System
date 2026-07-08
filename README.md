# ☁️ Cloud-Based File Storage System

A full-stack cloud application that allows users to securely upload, manage, search, view, download, and delete files using **Microsoft Azure Blob Storage**. The project demonstrates secure authentication, cloud storage integration, and a responsive user dashboard built with modern web technologies.

---

# 🚀 Tech Stack

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Vite

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas

## Cloud Storage
- Microsoft Azure Blob Storage

## Authentication
- JSON Web Token (JWT)
- bcryptjs

## Additional Packages
- Multer
- UUID
- Dotenv
- CORS

---

# ✨ Features

## User Authentication
- User Registration
- User Login
- Secure JWT Authentication
- Password Encryption using bcrypt

## File Management
- Upload Files
- View Files
- Download Files
- Delete Files
- Search Files
- Upload Date & Time
- Automatic File Size Formatting (B / KB / MB / GB)

## Dashboard
- User Dashboard
- Total Files Counter
- Storage Usage
- Recent Files List
- Responsive UI

## Cloud Integration
- Azure Blob Storage for file storage
- MongoDB Atlas for file metadata

---

# 📂 Project Structure

```text
Cloud-Based-File-Storage-System
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Mandvi28/Cloud-Based-File-Storage-System.git
```

---

## Install Frontend

```bash
cd client
npm install
```

---

## Install Backend

```bash
cd server
npm install
```

---

## Start Backend

```bash
npm start
```

---

## Start Frontend

```bash
npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

AZURE_STORAGE_CONNECTION_STRING=YOUR_AZURE_STORAGE_CONNECTION_STRING

AZURE_STORAGE_CONTAINER_NAME=uploads
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## File APIs

| Method | Endpoint |
|---------|----------|
| GET | /api/files |
| POST | /api/files/upload |
| DELETE | /api/files/:id |

---

# 📸 Screenshots

The following screenshots will be added after deployment:

- Login Page
- Register Page
- Dashboard
- Upload File
- Search Files
- File Statistics
- Azure Blob Storage Container
- MongoDB Atlas Files Collection

---

# 🌐 Live Demo

Frontend: To be updated after deployment.

Backend API: To be updated after deployment.

---

# 📅 Project Progress

## ✅ Day 1
- Project Setup
- React + Express Setup
- Tailwind CSS Configuration
- Routing
- Authentication Pages UI

## ✅ Day 2
- MongoDB Atlas Integration
- Azure Blob Storage Configuration
- JWT Authentication
- User Registration & Login APIs

## ✅ Day 3
- File Upload API
- Azure Blob Upload
- MongoDB File Metadata Storage
- Protected Routes

## ✅ Day 4
- Dashboard Integration
- Upload Files
- View Files
- Delete Files
- File Statistics

## ✅ Day 5
- Upload Date & Time
- Search Files
- Smart File Size Formatting
- Professional README
- Deployment (Next Step)

---

# 🔮 Future Improvements

- File Sharing via Secure Link
- Rename Files
- Folder Support
- Drag & Drop Upload
- Multiple File Upload
- File Preview
- Dark Mode
- User Profile Management

---

# 👨‍💻 Author

**Mandvi Singh**

**GitHub:**  
https://github.com/Mandvi28

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.