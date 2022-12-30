import { Schema, model } from "mongoose";

const productSchema = new Schema({
    Temperature: Number,
    Humidity: Number
},{
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema);