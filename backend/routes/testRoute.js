import express from "express"
import { TestModel } from "../models/testModel.js";
const router = express.Router();
// import {testController} from '../controllers/testController.js'

router.get('/mocktest/:subject', async (req, res) => {
    try {
        const subject = "Math";
        const mockTest = await TestModel.find({subject});
        res.json(mockTest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;