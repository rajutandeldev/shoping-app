const express = require('express');
const shopRoutes= require('./api/routes/route');

const app = express();
const port = 4000;
app.use(express.json());

app.use('/api',shopRoutes);

app.listen(port, ()=>{console.log(`running on port ${port} | url http://localhost:${port}/api/generateOtp`)})