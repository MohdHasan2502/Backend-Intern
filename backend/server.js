// FILE: server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth'); // Authentication routes
const protectedRoutes = require('./routes/protected'); // Protected routes
const cors = require('cors');

// Initialize the app 
const app = express();

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes); // Authentication routes (Sign up, Login in)
app.use('/api/protected', protectedRoutes); // Protected routes (admin, super-admin)

// homepage response 
app.get('/', (req, res) => {
    res.send('Welcome to the Role-Based Access Control API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});