const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const userRoutes = require('./routes/users.js');
const authRoutes = require('./routes/auth.js');

const app = express();
dotenv.config();
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
//database connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUniFiedTopology: true })
    .then(() => {
        console.log(`Server is connected to the database`);
    }).catch(error => console.log(error));

//route

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

//server creation
app.listen(5000, () => {
    console.log(`Our Server is Running at port 5000`);
});