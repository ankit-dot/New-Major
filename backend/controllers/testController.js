import {TestModel} from "../models/testModel.js"

exports.testController = async (req, res) => {
    try {
        const subject = "Math";
        const mockTest = await TestModel.find({ subject });
        res.json(mockTest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};