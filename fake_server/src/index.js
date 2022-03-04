const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('../routes/user');
const authRoute = require('../routes/auth');
const bedsRoute = require('../routes/beds');
const bedsdealingRoute = require('../routes/bedsdealing');
var cors = require('cors');

dotenv.config();
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log())
    .catch((err) => {
        console.log(err);
    })

app.use(express.json());
app.use("/users", userRoute);
app.use(authRoute);
app.use(bedsRoute);
app.use(bedsdealingRoute);

app.listen(process.env.PORT || 8888, () => {
    console.log("Backend server is running! on port 8888")
});

export default app