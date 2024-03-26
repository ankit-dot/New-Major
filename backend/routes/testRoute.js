import express from "express"
import { getMockTest } from '../controllers/testController.js';
import { TestModel } from "../models/testModel.js";
const router = express.Router();
// import {testController} from '../controllers/testController.js'

router.get('/mocktest/:subject', getMockTest);

export default router;