const express = require('express');
const routes = require('./Routes/Routes')
const cors = require('cors');
const connectDB = require('./Config/db')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);

connectDB();

const port = 5000;

app.listen(port, (req, res) => {
    console.log(`server is listining at port ${port}`);
})