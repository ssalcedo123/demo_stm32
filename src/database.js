import mongoose from "mongoose"

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://sevastian:sev123456789@cluster0.8caypnu.mongodb.net/?retryWrites=true&w=majority')
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))