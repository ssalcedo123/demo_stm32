import mongoose from "mongoose"
require('dotenv').config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL)
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))