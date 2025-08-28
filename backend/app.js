const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const DBconn = require('./DBConn');

dotenv.config();
const app = express();
const port = process.env.port || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
DBconn();

// Routes
const userRoute = require('./Routes/userRoutes');
const adminRoute = require('./Routes/adminRoutes'); // Admin routes

app.use('/api', userRoute);
app.use('/api', adminRoute); // ✅ now /api/auth/Admin-signup exists

// Test
app.get('/', (req, res) => {
    console.log("I am ready to go!");
    res.send("get started");
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
