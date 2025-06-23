const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST route to store message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMsg = new Message({ name, email, message });
    await newMsg.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// GET route for admin (private)
router.get("/admin", async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// DELETE route to remove a message by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);
    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.json({ success: true, message: "Message deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
