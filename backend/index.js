const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/crud")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error: ', error);
  }
);


app.post("/userauth/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((error) => {
      res.json(error);
    });
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});