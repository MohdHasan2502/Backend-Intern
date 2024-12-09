
const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const bcrypt = require('bcrypt');

// Sign In Route
router.post('/signin', async (req, res) => {
  const { username, email, password, role } = req.body;
  console.log('Received sign-up data:', { username, email, password, role }); // Log the data in the terminal

  try {
    // Check if the user already exists
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const user = new User({ username, email, password: hashedPassword, role });
    // Save the user in the database
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  // getting  the username or email and password from the request body
  const { usernameOrEmail, password } = req.body;
  // Check if the user exists
  const user = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });
  // If the user does not exist
  if (!user) {
    return res.status(400).json({ message: 'Invalid username/email or password' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid username/email or password' });
  }
  // using jwt to create a token and also sending the token as a response to the frontend 
  const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
// token is sent as a response to the frontend
  res.json({ token });
  console.log('User logged in:', user); // Log the user in the terminal
});

module.exports = router;