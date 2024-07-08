require('dotenv').config();

const express = require('express');
const cors    = require('cors')
const { dbConnection } = require('./database/config');

// Create the server using express
const app = express();

// Enable CORS
app.use(cors());

// Body Parser
app.use(express.json());

// Establish connection to the db.
dbConnection();

// Endpoints
app.use('/api/users', require('./routes/users-route'));

app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT}`));