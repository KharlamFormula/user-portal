require('dotenv').config({ path: __dirname + '/.env' });
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

const messageSchema = {
    name: String,
    email: String,
    message: String
}

const Message = mongoose.model('MyMessages', messageSchema);

app.post('/', async (req, res) => {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.json({ status: "ok" });
});

// Віддавати React (Vite build)
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/answer.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});