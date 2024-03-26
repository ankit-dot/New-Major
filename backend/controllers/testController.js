import {TestModel} from "../models/testModel.js"

export const getMockTest = async (req, res) => {
    try {
        const subject = req.params.subject;
        const mockTest = await TestModel.find({ subject });
        res.json(mockTest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};