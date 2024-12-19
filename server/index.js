import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectdb from './Connectdb.js';
import Users from './modules/UserSchema.js';


dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

connectdb;

app.get("/ping", (req, res) => {
  res.send("pong");
}
)

app.post("/Create", (req, res) => {
  const { name, email, age } = req.body;
  const user = new Users({ name, email, age });
  user.save().then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
  })
})

app.get("/", (req, res) => {
  Users.find().then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
  })
})

app.get("/getuser/:id", (req, res) => {
  const id = req.params.id;
  Users.findById(id).then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
  })
})

app.put('/Update/:id', (req, res) => {
  const { name, email, age } = req.body;
  const id = req.params.id;
  Users.findByIdAndUpdate(id, { name, email, age }).then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
  })
}
)

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  Users.findByIdAndDelete(id).then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
  })
})


app.listen(PORT, () => (
  console.log(`Server is running on port ${PORT}`)
))