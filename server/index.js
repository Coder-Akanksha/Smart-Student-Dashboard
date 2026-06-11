const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Environment variables (.env) ko load karne ke liye
dotenv.config();

// Database ko connect karne wale function ko call karna
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // JSON data handle karne ke liye

// Ek basic welcome route (testing ke liye)
app.get('/', (req, res) => {
  res.send('Smart Student Dashboard Backend chal raha hai!');
});

// Server ko port par run karna
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});