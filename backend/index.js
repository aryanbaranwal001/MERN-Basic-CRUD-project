const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/crud")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

app.get("/userauth", (req, res) => {
  UserModel.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.get("/userauth/getUser/:id", (req, res) => {
  UserModel.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
})


app.put("/userauth/updateUser/:id", (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
}
);

app.delete("/userauth/deleteUser/:id", async (req, res) => {
  await  UserModel.findByIdAndDelete(req.params.id)
  
  UserModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.post("/userauth/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
