import express from "express";
import mongoose, { Schema, connect } from "mongoose";
import cors from "cors";
const app = express();
const port = 3100;

app.use(express.json());
app.use(cors());

const userSchema = new Schema({
  name: String,
  surname: String,
  mail: String,
  phone: String,
});

const userModel = mongoose.model("user", userSchema);

app.get("/", async (req, res) => {
  try {
    const users = await userModel.find({});
    res.send(users);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.send(user);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, surname, mail, phone } = req.body;
    const newUser = new userModel({
      name,
      surname,
      mail,
      phone,
    });
    await newUser.save();
    res.send("Got a POST request");
  } catch (error) {
    console.error("post", error.message);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, mail, phone } = req.body;
    await userModel.findByIdAndUpdate(id, {
      name,
      surname,
      mail,
      phone,
    });
    res.send("Got a PUT request");
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.send("Got a DELETE request");
  } catch (error) {
    console.error(error.message);
  }
});

mongoose
  .connect("mongodb+srv://mi6vyr5cb:mi6vyr5cb@cluster0.wireeb6.mongodb.net/")
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
