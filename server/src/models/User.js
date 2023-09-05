import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        minlength: 6,
        maxlength: 32,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
    }],
    date: {
        type: Date,
        default: Date.now,
    }
}, {timestamps: true})

export default model("User", userSchema);