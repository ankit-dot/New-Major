import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({
    text: String,
    options: [String], 
    correctOptionIndex: Number 
});

const testSchema = new mongoose.Schema({
    title: String,
    subject: String, // Add subject field
    questions: [questionSchema]
});

export const TestModel = mongoose.model('Test', testSchema);

