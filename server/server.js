require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.post('/', async (req, res) => {
    console.log(req.body);

    const newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    await newMessage.save();
    res.redirect('/answer.html');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});