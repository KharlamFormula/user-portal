const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://harlamformula_db_user:ozsXmN5q1obpuRjj@cluster0.bk8qdnv.mongodb.net/UserPortal?appName=Cluster0');

const messageSchema = {
    name: String,
    email: String,
    message: String
}

const Message = mongoose.model('MyMessages', messageSchema);

app.post('/', async (req, res) => {
    console.log(req.body);

    const newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    await newMessage.save();

    res.sendFile(path.join(__dirname, 'public', 'answer.html'));
});

app.listen(5000, ()=>{
    console.log('Server is listenning!')
})