require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.error("MongoDB connection error:", err));

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

const Message = mongoose.model('MyMessages', messageSchema);

app.post('/api/messages', async (req, res) => {
  try {
    console.log("BODY:", req.body);
    const newMessage = new Message(req.body);
    await newMessage.save();
    console.log("Saved to MongoDB ✅");
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error("Save error:", error);
    res.status(500).json({ status: "error" });
  }
});

const frontendPath = path.join(__dirname, '../dist');
app.use(express.static(frontendPath));

app.get('*', function(req, res) {
  if (req.path.startsWith('/api')) return res.status(404).send('Not Found');
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));