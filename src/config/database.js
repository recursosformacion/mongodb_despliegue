import mongoose, { connect } from 'mongoose';
import { MONGODB_URI } from './config.env';

// (async () => {
//   try {
//     const db = await connect("mongodb://127.0.0.1:27017/crud-mongo");
//     console.log('Conectado a ', db.connection.name)
//   } catch (error) {
//     console.log(error);
//   }
// })();

// mongoose.connect("mongodb://localhost:27017/crud-mongo", {
//   useNewUrlParser: "true",
// })
// mongoose.connection.on("error", err => {
//   console.log("err", err)
// })
// mongoose.connection.on("connected", (err, res) => {
//   console.log("mongoose is connected")
// })

// const { MongoClient } = require("mongodb");

// const url = "mongodb+srv://migarcia:XH96AuldxSWXnHZQ@cluster0.cn3sfg9.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
// const client = new MongoClient(url);
// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");
//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);
const url1 = "mongodb+srv://migarcia:XH96AuldxSWXnHZQ@cluster0.cn3sfg9.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const url2 = "mongodb://127.0.0.1:27017/crud-mongo";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})
console.log("fin de programa");
