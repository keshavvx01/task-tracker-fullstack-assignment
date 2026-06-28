# MERN Task Tracker

A full-stack Task Tracker application built using the MERN stack. Users can create, view, update, and delete tasks through a responsive web interface. The application is deployed on AWS EC2 using Nginx and PM2, with MongoDB Atlas as the cloud database.

---

## Live Demo

**Application:** `http://51.20.171.255`

---

## Features

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Task status management
* Priority management
* Due date support
* Responsive user interface
* MongoDB Atlas integration
* RESTful API
* AWS EC2 deployment
* Nginx reverse proxy
* PM2 process management

---

## Tech Stack

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### DevOps & Deployment

* AWS EC2 (Ubuntu 24.04)
* Nginx
* PM2
* Git & GitHub

---

## Project Structure

```
task-tracker/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## API Endpoints

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/tasks     | Get all tasks  |
| GET    | /api/tasks/:id | Get task by ID |
| POST   | /api/tasks     | Create a task  |
| PUT    | /api/tasks/:id | Update a task  |
| DELETE | /api/tasks/:id | Delete a task  |

---

## Local Installation

### Clone the repository

```bash
git clone <repository-url>
cd task-tracker
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Deployment

The application is deployed on **AWS EC2 (Ubuntu 24.04)**.

Deployment components:

* AWS EC2
* Nginx
* PM2
* MongoDB Atlas

---

## Screenshots

Add screenshots here.

Example:

```
screenshots/
├── dashboard.png
├── create-task.png
├── update-task.png
└── delete-task.png
```

---

## Future Improvements

* User Authentication (JWT)
* Search Tasks
* Filter by Status
* Filter by Priority
* Docker Support
* CI/CD using GitHub Actions
* HTTPS with Let's Encrypt
* Unit & Integration Testing

---

## Author

**Keshav**

GitHub: https://github.com/keshavvx01
