const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL=process.env.MONGODB_URL_LOCAL

// Setup MongoDB connection
const db = mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
  console.log('database is connected successfully');
})
.catch(()=>{
  console.log('database is not connected successfully');
})

// Get the default connection
// const db = mongoose.connection;

// // Define event listeners
// db.on('connected', () => {
//   console.log('Connected to the MongoDB server');
// });

// db.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// db.on('disconnected', () => { // Changed from 'close' to 'disconnected'
//   console.log('MongoDB disconnected');
// });

// Export the connection
module.exports = db;