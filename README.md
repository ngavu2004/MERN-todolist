# MERN Todo List

A simple todo list application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This is a project for ASU Women in Computer Science (WiCs) Careers & TIPS workshop. If you have any problem setting up this project, please reach out to me through WiCs discord, username: imatiramisuhunter. Or my email: thiquynh@asu.edu

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Real-time updates
- ✅ Clean, modern UI

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Styling**: CSS3

## Project Structure

```
mern-todo/
├── client/          # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
├── server/          # Express backend
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── README.md
```

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd mern-todo
```

### 2. Install server dependencies
```bash
cd server
npm install
```

### 3. Install client dependencies
```bash
cd ../client
npm install
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
- **Local MongoDB**: Start the MongoDB service
- **MongoDB Atlas**: Use your connection string in the config

### 5. Start the server
```bash
cd ../server
npm start
```
The server will run on http://localhost:5000

### 6. Start the client (in a new terminal)
```bash
cd client
npm start
```
The client will run on http://localhost:3000

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Toggle todo completion
- `DELETE /api/todos/:id` - Delete a todo

## Workshop Timeline (1 Hour)

### 0-15 minutes: Setup & Server
- Project structure explanation
- Install dependencies
- Create Express server
- Set up MongoDB connection
- Create Todo model

### 15-30 minutes: API Development
- Create REST API endpoints
- Test endpoints with Postman/curl
- Error handling

### 30-45 minutes: React Frontend
- Create React app structure
- Build todo components
- Implement CRUD operations
- Connect to API

### 45-60 minutes: Styling & Polish
- Add CSS styling
- Test full application
- Deploy considerations
- Q&A

## Development Scripts

### Server
```bash
npm start          # Start server
npm run dev        # Start with nodemon (auto-restart)
```

### Client
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in config.js

2. **CORS Issues**
   - Server includes CORS middleware
   - Client proxy is configured

3. **Port Already in Use**
   - Change PORT in server/config.js
   - Update client proxy if needed

## Next Steps

- Add user authentication
- Implement todo categories
- Add due dates
- Deploy to cloud platforms
- Add unit tests

## License

MIT License - feel free to use this project for educational purposes!
