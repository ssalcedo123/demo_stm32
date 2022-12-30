import { Schema, model } from "mongoose";

export const ROLES = ["user", "admin", "moderator"]

const roleScheman = new Schema({
    name: String
}, {
    versionKey: false
});

export default model ("Role", roleScheman);