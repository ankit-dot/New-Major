import { connect, set } from "mongoose";
import { mockTestData } from "../data.js";


import {TestModel} from "../models/testModel.js"







export const dbconnect = async () => {
    try {
      connect(`mongodb+srv://ankitsolanki61375:password9399@cluster0.3wrxgbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
      await seedMockTests();
      
      console.log("connect successfully---");
    } catch (error) {
      console.log(error);
    }
  };


  async function seedMockTests() {
    try {
      // Check how many documents exist in the TestModel collection
      const testsCount = await TestModel.countDocuments();
      
      // If there are already documents in the collection, log a message and return
      if (testsCount > 0) {
        console.log("Mock tests seed is already done!");
        return;
      }
  
      // If there are no documents in the collection, proceed to seed it
      for (const mockTest of mockTestData) {
        // Log the title of each mock test
        console.log(mockTest.title);
        
        // Map mock test questions to match questionSchema
        const questions = mockTest.questions.map(question => ({
          text: question.text,
          options: question.options,
          correctOptionIndex: question.correctOptionIndex
        }));
  
        // Create a new document in the TestModel collection with the current mock test object
        const test = new TestModel({
          title: mockTest.title,
          subject: mockTest.subject,
          questions: questions
        });
        await test.save();
      }
  
      // Log a message indicating that seeding is done
      console.log("Mock tests seed is done!");
    } catch (error) {
      console.error("Error seeding mock tests:", error);
    }
  }
  