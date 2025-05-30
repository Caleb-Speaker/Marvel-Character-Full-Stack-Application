# 🦸 Marvel Character Manager

A full-stack CRUD web application that lets users manage Marvel characters. Built with Flask (Python) on the backend and React with Bootstrap on the frontend.

## ⚙️ Technologies Used

**Backend:** Flask, Flask-CORS, SQLAlchemy, MySQL (mysql-connector-python)  
**Frontend:** React, React Router DOM, Axios, React Bootstrap, Bootstrap, Dark Mode toggle

## 🚀 Features

- View all characters  
- View detailed character info  
- Create new characters  
- Edit existing characters (with pre-filled form)  
- Delete characters  
- Dark Mode toggle (dynamic theme and text inversion)  
- Responsive with React Bootstrap  
- React Router 6 navigation  
- 404 NotFound Page

## 🧪 Setup Instructions

### 🔧 Backend Setup

1. Open terminal and navigate to `backend/`
2. Create a virtual environment:
   ```
   python -m venv venv
   venv\Scripts\activate  # or `source venv/bin/activate` on Mac/Linux
   ```
3. Install backend dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Edit `server.py` and replace `YOUR_PASSWORD` with your MySQL root password in both database config lines
5. Start MySQL server (e.g. via MySQL Workbench)
6. Run:
   ```
   python server.py
   ```
7. Open `marvel_characters.sql` in MySQL Workbench and run to populate database

### 💻 Frontend Setup

1. Navigate to `frontend/`
2. Install dependencies:
   ```
   npm install
   ```
3. Start frontend dev server:
   ```
   npm start
   ```
4. App runs at:
   ```
   http://localhost:3000
   ```

## 🌙 Dark Mode

Use the toggle switch in the Navbar to activate dark mode.  
- Background becomes dark  
- Text turns white  
- Cards invert to match the theme  
- Forms and inputs remain clean and readable

## 📄 Author

Caleb Speaker