import express from "express"
const router = express.Router();


router.get('/download/:noteId', async (req,res) => {
    console.log("download notes")
});

export default router;